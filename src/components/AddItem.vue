<template>
  <div class="form">
    <form action="">
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Наименование товара</span>
        </div>
        <div class="form-group__body">
          <input class="form-group__body-input" type="text" placeholder="Введите наименование товара">
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text">Наименование товара</span>
        </div>
        <div class="form-group__body">
          <textarea class="form-group__body-textarea" placeholder="Введите наименование товара"/>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Наименование товара</span>
        </div>
        <div class="form-group__body">
          <input class="form-group__body-input" type="text" placeholder="Введите наименование товара">
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Наименование товара</span>
        </div>
        <div class="form-group__body">
          <input class="form-group__body-input" type="text" placeholder="Введите наименование товара">
        </div>
      </div>
      <div class="form-group">
        <button class="form-group__submit">
          <span class="form-group__submit-text">Добавить товар</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddItem'
}
</script>

<style scoped lang="scss">
.form {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  padding: 24px;
  border-radius: 4px;
  position: sticky;
  top: 1px;

  &-group:nth-child(n+2) {
    margin-top: 16px;
  }

  &-group {

    &__header {
      margin-bottom: 4px;

      &-text {
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        color: #49485E;
      }
    }

    &__body {

      &-input {
        background: #FFFEFB;
        border: none;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 16px 10px;
        width: 100%;
      }

      &-textarea {
        background: #FFFEFB;
        border: none;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 16px 10px;
        width: 100%;
        height: 108px;
      }
    }

    &__submit {
      width: 100%;
      background: #EEEEEE;
      border-radius: 10px;
      border: none;
      padding: 10px 65px;

      &-text {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #B4B4B4;
      }
    }
  }
}

.necessarily::after {
  content: '*';
  color: red;
}
</style>
