<template>
    <fx-space :size="[0, 60]">
          <fx-badge :value="11" :max="10">
            <fx-button>设置最大值10</fx-button>
        </fx-badge>
         <fx-badge :value="100" :max='99'>
            <fx-button>设置最大值99</fx-button>
        </fx-badge>
    </fx-space>
</template>
