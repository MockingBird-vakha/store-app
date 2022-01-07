<template>
  <div class="items">
    <div class="card" v-for="i in a" :key="i">
      <div class="card__img">
        <img src="../assets/foto.png" width="255" height="150" alt="asd">
      </div>
      <div class="card__about">
        <div class="card__about-title">
          <h1>Наименование товара</h1>
        </div>
        <div class="card__about-desctiption">
          <p>Довольно-таки интересное описание товара в несколько строк.
            Довольно-таки интересное описание товара в несколько строк
          </p>
        </div>
        <div class="card__about-price">
          <span>10 000 руб.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  data () {
    return {
      a: 9
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
