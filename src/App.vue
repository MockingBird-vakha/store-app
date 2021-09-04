<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <div class="header-left">
          <h1 class="header-title">Добавление товара</h1>
        </div>
        <div class="header-right">
          <button>sad</button>
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

#app {
  font-family: Source Sans Pro;
  background: #E5E5E5;
  height: 100%;
}

.container {
  padding: 32px;
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
}

.main {
  display: flex;

  &__block {
    &-left {
      width: 332px;
    }

    &-right {
      width: 100%;
    }
  }
}
</style>
