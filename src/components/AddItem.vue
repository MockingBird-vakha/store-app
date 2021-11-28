<template>
  <div class="form">
    <form @submit="submitForm">
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Наименование товара</span>
        </div>
        <div class="form-group__body">
          <input v-model="form.name.value" class="form-group__body-input" type="text" placeholder="Введите наименование товара">
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text">Описание товара</span>
        </div>
        <div class="form-group__body">
          <textarea v-model="form.description.value" class="form-group__body-textarea" placeholder="Описание товара"/>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Ссылка на изображение товара</span>
        </div>
        <div class="form-group__body">
          <input v-model="form.image.value" class="form-group__body-input" type="text" placeholder="Введите ссылку">
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Цена товара</span>
        </div>
        <div class="form-group__body">
          <input v-model.number="form.price.value" class="form-group__body-input" type="number" placeholder="Введите цену">
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
  name: 'AddItem',
  data () {
    return {
      form: {
        name: {
          value: null
        },
        description: {
          value: ''
        },
        image: {
          value: null
        },
        price: {
          value: null
        }
      }
    }
  },
  methods: {
    submitForm () {
      // const { name, description, image, price } = this.form
      // const validateName = this.validateName(name)
      // const validateDescription = this.validateDescription(description)
      // const validateImage = this.validateImage(image)
      // const validatePrice = this.validatePrice(price)
    },
    validateName (name) {

    },
    validateDescription (description) {

    },
    validateImage (image) {

    },
    validatePrice (price) {

    }
  }
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
      color: #B4B4B4;

      @media (max-width: 768px) {
        padding: 10px 44px;
      }

      &:hover {
        background: #7BAE73;
        transition: 0.4s;
        color: white
      }

      &-text {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
      }
    }
  }
}

.necessarily::after {
  content: '*';
  color: red;
}
</style>
