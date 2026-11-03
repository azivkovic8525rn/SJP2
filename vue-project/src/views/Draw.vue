<template>

  <div class="draw">
    <ToolPanel :tool="selectedTool" :color="selectedColor" @tool="toggleTool" @color="selectColor" />
    <Canvas :pixels="pixels" @paint="paint" />
  </div>

</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tool from '@/types/tool'
  import ToolPanel from '@/components/ToolPanel.vue'
  import Canvas from '@/components/Canvas.vue'

  const createPixels = () => {
    const matrix: string[][] = []

    for (let i = 0; i < 16; i++) {
      const row: string[] = []
      for (let j = 0; j < 16; j++) {
        row.push('white')
      }
      matrix.push(row)
    }

    return matrix
  }

  const pixels = ref<string[][]>(createPixels())

  const selectedTool = ref<Tool | null>('pen')
  const selectedColor = ref('black')

  const toggleTool = (tool: Tool) => {
    if (selectedTool.value === tool) {
      selectedTool.value = null
    } else {
      selectedTool.value = tool
    }
  }

  const selectColor = (color: string) => {
    selectedColor.value = color
  }

  const paint = (row: number, col: number) => {
    const pixelRow = pixels.value[row]
    if (selectedTool.value === 'pen' && pixelRow) {
      pixelRow[col] = selectedColor.value
    }
  }

</script>

<style scoped>

  .draw {
    display: flex;
    align-items: flex-start;
  }

</style>
