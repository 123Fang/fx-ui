import path from "path";
import glob from "fast-glob";
import { fileURLToPath } from "node:url";
import fs from "fs";
import fileSave from "file-save";
// import chalk from "chalk";
import render from "json-templater/string.js";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.resolve(__dirname, ".."); // 项目根路径
const componentsFilePath = path.join(rootPath, "components.json"); // components.json文件路径
const entryPath = path.join(rootPath, "packages/index.js"); // entry入口路径
const componentsFile = {};

function writeCompsJson(components) {
  components
    .map((path) => {
      return {
        key: path.split("/")[1],
        value: path,
      };
    })
    .filter((item) => {
      return item.key !== "index.js";
    })
    .forEach((item) => {
      componentsFile[item.key] = item.value;
    });
  // console.log("===", componentsFile);
  writeJson(componentsFile);
}
function writeJson(content) {
  fileSave(componentsFilePath)
    .write(JSON.stringify(content, null, "  "), "utf-8")
    .end("\n");
}

// 生成入口文件
const IMPORT_TEMPLATE = "import {{name}} from './{{package}}/index.js';";
const INSTALL_COMPONENT_TEMPLATE = "  {{name}}";
const GLOBAL_PROPERTIES__TEMPLATE =
  "  app.config.globalProperties.${{package}} = {{name}}";
const EXPORTS_TEMPLATE = "  {{name}}";
const MAIN_TEMPLATE = `/* Automatically generated by '../script/build-entry.js' */

{{include}}
// 版本号
import pkg from '../package.json'


const components = [
  {{install}}
];

const install = (app) => {
  components.forEach((i) => {
    app.use(i)
  })
  {{globalProperties}}
}

const fxUi = {
  version: pkg.version,
  install
}

export {
  install,
  {{exports}}
}

export default fxUi
`;

function buildEntry() {
  let includeComponentTemplate = [];
  let installTemplate = [];
  let globalPropertyTemplate = [];
  let exportsTemplate = [];
  let ComponentNames = Object.keys(componentsFile);

  ComponentNames.forEach((name) => {
    let componentName = `f${name.slice(0, 1).toUpperCase() + name.slice(1)}`;
    includeComponentTemplate.push(
      render(IMPORT_TEMPLATE, {
        name: componentName,
        package: name,
      })
    );

    if (["loading", "message", "confirm"].indexOf(name) === -1) {
      installTemplate.push(
        render(INSTALL_COMPONENT_TEMPLATE, {
          name: componentName,
        })
      );
    }

    if (["loading", "message", "confirm"].indexOf(name) !== -1) {
      globalPropertyTemplate.push(
        render(GLOBAL_PROPERTIES__TEMPLATE, {
          name: componentName,
          package: name,
        })
      );
    }

    exportsTemplate.push(
      render(EXPORTS_TEMPLATE, {
        name: componentName,
      })
    );
  });

  let endOfLine = os.EOL;
  let template = render(MAIN_TEMPLATE, {
    include: includeComponentTemplate.join(endOfLine),
    install: installTemplate.join("," + endOfLine),
    globalProperties: globalPropertyTemplate.join(endOfLine),
    exports: exportsTemplate.join("," + endOfLine),
  });
  fs.writeFileSync(entryPath, template);
  console.log("entry入口文件已生成 :", entryPath);
}

async function main() {
  let components = await glob(["packages/**/index.js"], {});
  /**  glob匹配到的格式：
   *   ['packages/checkbox/index.js','packages/button/index.js',...]
   * **/ 
  writeCompsJson(components); // 生成 components.json 文件
  buildEntry(); // 生成entry入口文件
}
main();
