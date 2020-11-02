<template>
  <div class="menu">
    <the-menu-sections :sections="menu.sections" />
  </div>
</template>

<script>
import menu from './menu.json';

import TheMenuSections from '@components/TheMenuSections';

export default {
  name: 'the-menu',
  components: {
    TheMenuSections,
  },
  data() {
    return {
      menu,
    };
  },
};
</script>

<style>
.menu {
  display: flex;
  border: 2px solid navy;
}
</style>
