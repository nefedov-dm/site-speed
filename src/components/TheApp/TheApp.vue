<template>
  <div id="app">
    <the-menu />
    <div class="nav">
      <router-link class="link" to="/">Домой</router-link>
      <div class="separator">|</div>
      <router-link class="link" to="/ten-thousand-nodes">
        10 000 DOM-элемнетов
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
  margin: auto;
}

body {
  overflow: hidden;
  margin: auto;
}

#app {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #303030;
  height: 100%;
  padding: 10px 10px 10px 10px;
  overflow: scroll;
}

#app::-webkit-scrollbar {
  width: 4px;
  background-color: #303030;
}

#app::-webkit-scrollbar-thumb {
  background-color: #e5e5e5;
  height: 50px;
  border-radius: 4px;
}

.nav {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.separator {
  color: #dc5356;
  margin: 0 20px;
}

.link {
  color: #8ec3a7;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
