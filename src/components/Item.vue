<template>
  <div class="items">
    <div class="card" v-for="(el, index) in filteredItems" :key="el.name + index">
      <div class="card__img">
        <img :src="el.image" width="255" height="150" alt="asd">
      </div>
      <div class="card__about">
        <div class="card__about-title">
          <h1>{{ el.name }}</h1>
        </div>
        <div class="card__about-desctiption">
          <p>{{ el.description }}</p>
        </div>
        <div class="card__about-price">
          <span>{{ el.price }} руб.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Item',
  props: ['filtered'],
  computed: {
    ...mapState(['items']),
    ...mapGetters([
      'lowPriceShortStateItems',
      'hightPriceShortStateItems'
    ]),
    filteredItems: function () {
      switch (this.filtered) {
        case 'defaultStateItems': return this.items
        case 'lowPriceShortStateItems': return this.lowPriceShortStateItems
        case 'hightPriceShortStateItems': return this.hightPriceShortStateItems
        default: return this.items
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc((100% - 60px) / 4));
    grid-gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(auto-fill, calc((100% - 40px) / 3))
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, calc((100% - 20px) / 2))
    }

    @media (max-width: 425px) {
      grid-template-columns: repeat(auto-fill, 100%)
    }
  }

  .card {
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    width: 100%;

    &__img {
      min-height: 150px;

      img {
        width: 100%;

        @media (max-width: 425px) {
          height: 180px;
        }
      }
    }

    &__about {
      padding: 16px;
      display: grid;
      grid-gap: 8px;

      &-title {
        h1 {
          font-size: 1em;
        }
      }

      &-desctiption {
        overflow: hidden;
        height: 80px;

        p {
          font-size: 0.8em;
        }
      }
    }
  }
</style>
