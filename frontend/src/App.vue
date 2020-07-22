<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  html,
  body,
  #app{
    padding: 0;
    margin: 0;
    height: 100%;
  }
  *{
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  #app{
    font-family: 'Roboto', sans-serif;
    background-color: #ececec;
  }
</style>
