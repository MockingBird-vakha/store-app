<template>
  <div>
    <header class="header">
      <div class="header-left">
        <h1 class="header-title">Добавление товара</h1>
      </div>
      <div class="header-right">
        <select class="header-filter" v-model="filter">
          <option value="defaultStateItems">По умолчанию</option>
          <option value="hightPriceShortStateItems">По возрастанию</option>
          <option value="lowPriceShortStateItems">По убыванию</option>
        </select>
      </div>
    </header>
    <section class="main">
      <div class="main__block-left">
        <AddItem/>
      </div>
      <div class="main__block-right">
        <Item :filtered='filter'/>
      </div>
    </section>
  </div>
</template>

<script>
import AddItem from '../components/AddItem.vue'
import Item from '../components/Item.vue'

export default {
  name: 'Home',
  components: {
    AddItem,
    Item
  },
  data () {
    return {
      filter: 'defaultStateItems'
    }
  }
}
</script>

<style lang="scss">
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
      display: block;
    }

    &__block {

      &-left {
        grid-area: add;

        @media (max-width: 425px) {
          margin-bottom: 20px;
        }
      }

      &-right {
        grid-area: item;
      @media (max-width: 425px) {
          margin-bottom: 20px;
        }
      }

      &-right {
        grid-area: item;
      @media (max-width: 425px) {
          margin-bottom: 20px;
        }
      }

      &-right {
        grid-area: item;
      @media (max-width: 425px) {
          margin-bottom: 20px;
        }
      }

      &-right {
        grid-area: item;
      }
    }
  }
</style>
