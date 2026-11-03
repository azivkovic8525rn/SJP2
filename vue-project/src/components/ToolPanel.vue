<template>
  <div class="panel">
    <button :class="{ active: tool === 'pen' }" @click="selectTool('pen')">Pen</button>

    <div
      class="color"
      v-for="item in colors"
      :key="item"
      :class="{ selected: item === color }"
      :style="{ backgroundColor: item }"
      @click="selectColor(item)"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import Tool from '@/types/tool'

  defineProps<{
    tool: Tool | null,
    color: string
  }>()

  const emit = defineEmits()

  const colors = ['black', 'white', 'red', 'blue', 'green']

  const selectTool = (tool: Tool) => {
    emit('tool', tool)
  }

  const selectColor = (color: string) => {
    emit('color', color)
  }

</script>

<style scoped>

  .panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    margin-right: 1rem;
    background-color: white;
    border: solid 1px #dddddd;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    background-color: white;
    color: #222222;
    border: solid 1px #cccccc;
    border-radius: 5px;
  }

  .active {
    background-color: #222222;
    color: white;
  }

  .color {
    width: 25px;
    height: 25px;
    margin-top: 0.5rem;
    box-sizing: border-box;
    border: solid 1px #cccccc;
    border-radius: 5px;
  }

  .selected {
    border: solid 3px #222222;
  }

</style>
