<template>
  <div class="sections" :class="[`sections_${index}`]">
    <div class="section" v-for="(section, $index) in sections" :key="$index">
      {{ section.title.name }}
      <the-menu-sections
        v-if="section.sections && section.sections.length"
        :index="index + 1"
        :sections="section.sections"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-menu-sections',
  props: {
    sections: Array,
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.sections {
  display: none;
  margin: 10px;
}

.sections_0 {
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
}

.section {
  margin: 10px;
}
</style>
