<template>
  <div class="long-grid">
    <div
      class="group"
      v-for="(group, $groupIndex) in groups"
      :key="$groupIndex"
    >
      <div class="item" v-for="(item, $itemIndex) in items" :key="$itemIndex">
        <div>Группа: {{ $groupIndex }}</div>
        <div>Элемент: {{ $itemIndex }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-long-grid',
  data() {
    return {
      groups: new Array(5),
      items: new Array(1000),
    };
  },
};
</script>

<style>
.long-grid {
  display: flex;
  justify-content: center;
  color: #e5e5e5;
  border-radius: 4px;
  /* border: 2px solid #8ec3a7; */
  padding: 10px;
}

.group {
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #8ec3a7;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
}
</style>
