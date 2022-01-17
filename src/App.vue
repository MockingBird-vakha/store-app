<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #E5E5E5;
}
  .container {
    padding: 32px;

    @media (max-width: 768px) {
      padding: 32px 15px;
    }
  }
</style>
