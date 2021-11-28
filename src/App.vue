<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <div class="header-left">
          <h1 class="header-title">Добавление товара</h1>
        </div>
        <div class="header-right">
          <button class="header-filter">По умолчанию</button>
        </div>
      </header>
      <section class="main">
        <div class="main__block-left">
          <AddItem/>
        </div>
        <div class="main__block-right">
          <Item/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue'
import Item from './components/Item.vue'

export default {
  name: 'App',
  components: {
    AddItem,
    Item
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #E5E5E5;
}

#app {
  font-family: Source Sans Pro;
}

.container {
  padding: 32px;

  @media (max-width: 768px) {
    padding: 32px 15px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  &-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;
  }

  &-filter {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 15px;
    border: none;
    color: #B4B4B4;
    font-size: 12px;
    line-height: 15px;
  }
}

.main {
  display: grid;
  grid-auto-columns: 0.25fr 1fr;
  grid-template-areas: 'add item';
  grid-gap: 25px;

  @media (max-width: 1024px) {
    grid-auto-columns: 0.45fr 1fr;
  }

  @media (max-width: 768px) {
    grid-gap: 15px;
  }

  @media (max-width: 425px) {
    grid-template-areas: 'asd';
    grid-auto-columns: auto;
  }
}
</style>
