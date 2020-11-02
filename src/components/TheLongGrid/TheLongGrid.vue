<template>
  <div class="long-grid">
    <div v-for="(group, $index) in groups" :key="$index">
      <div v-for="(item, $index) in items" :key="$index">{{ $index }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-long-grid',
  data() {
    return {
      groups: new Array(10),
      items: new Array(1000),
    };
  },
};
</script>

<style>
.long-grid {
  display: flex;
  justify-content: space-between;
}
</style>
