<template>
  <div id="app">
    <the-menu />
    <div class="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/ten-thousand-nodes">
        10 000 Nodes
      </router-link>
    </div>
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

<style>
html {
  overflow-y: scroll;
}

#app {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
}

.nav {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
