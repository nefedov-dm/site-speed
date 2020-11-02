<template>
  <div id="app">
    <the-menu />
    <router-link to="/">Home</router-link>
    <router-link to="/longgrid">LongGrid</router-link>
    <router-view />
  </div>
</template>

<script>
import TheMenu from '@components/TheMenu';

export default {
  name: 'the-app',
  components: {
    TheMenu,
  },
};
</script>

<style></style>
