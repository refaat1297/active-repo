<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div class="bg-amber-400 py-4 px-3 rounded">
    using tailwind css pos: {{x}}, {{y}}
  </div>
</template>
