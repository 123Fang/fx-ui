<template>
  <fx-space :size="[0, 60]">
    <fx-badge :value="99" type="primary">
      <fx-button>默认</fx-button>
    </fx-badge>
    <fx-badge :value="100" type="success">
      <fx-button>成功</fx-button>
    </fx-badge>
    <fx-badge :value="10" type="warning">
      <fx-button>警告</fx-button>
    </fx-badge>
    <fx-badge :value="3" type="danger">
      <fx-button>危险</fx-button>
    </fx-badge>
    <fx-badge :value="3" type="info">
      <fx-button>危险</fx-button>
    </fx-badge>
    <fx-badge :value="50" isDot>
      <fx-button>小红点</fx-button>
    </fx-badge>
  </fx-space>
</template>
