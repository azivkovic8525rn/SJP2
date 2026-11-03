<template>
  <div class="canvas">
    <div class="row" v-for="(row, rowIndex) in pixels" :key="rowIndex">
      <div
        class="pixel"
        v-for="(color, colIndex) in row"
        :key="colIndex"
        :style="{ backgroundColor: color }"
        @click="paint(rowIndex, colIndex)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">

  defineProps<{
    pixels: string[][]
  }>()

  const emit = defineEmits()

  const paint = (row: number, col: number) => {
    emit('paint', row, col)
  }

</script>

<style scoped>

  .canvas {
    display: flex;
    flex-direction: column;
    border-top: solid 1px #dddddd;
    border-left: solid 1px #dddddd;
  }

  .row {
    display: flex;
  }

  .pixel {
    width: 25px;
    height: 25px;
    box-sizing: border-box;
    border-right: solid 1px #dddddd;
    border-bottom: solid 1px #dddddd;
  }

</style>
