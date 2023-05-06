<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div class="hello">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda dignissimos laborum voluptates? Cum debitis, distinctio et ex excepturi, itaque iure obcaecati omnis pariatur quae quam recusandae rem sint veritatis.
  </div>
  <div class="bg-amber-400 py-4 px-3 rounded">
    using tailwind css pos: {{x}}, {{y}}
  </div>
</template>

<style lang="scss" scoped>
.hello {
  background-color: $greenColor;
  padding: 10px;
}
</style>
