<template>
  <div class="form">
    <form @submit.prevent="submitForm()">
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Наименование товара</span>
        </div>
        <div class="form-group__body">
          <input v-model="form.name" @blur="$v.form.name.$touch()" class="form-group__body-input" type="text" placeholder="Введите наименование товара">
          <span v-if="$v.form.name.$error" class="form-group__body-error">Это поле является обязательным</span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text">Описание товара</span>
        </div>
        <div class="form-group__body">
          <textarea v-model="form.description" class="form-group__body-textarea" placeholder="Описание товара"/>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Ссылка на изображение товара</span>
        </div>
        <div class="form-group__body">
          <input v-model="form.image" @blur="$v.form.image.$touch()" class="form-group__body-input" type="text" placeholder="Введите ссылку">
          <span v-if="$v.form.image.$error" class="form-group__body-error">Это поле является обязательным</span>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group__header">
          <span class="form-group__header-text necessarily">Цена товара</span>
        </div>
        <div class="form-group__body">
          <input v-model.number="form.price" @blur="$v.form.price.$touch()" class="form-group__body-input" type="number" placeholder="Введите цену">
          <span v-if="$v.form.price.$error" class="form-group__body-error">Это поле является обязательным</span>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="form-group__submit" :disabled="$v.$invalid">
          <span class="form-group__submit-text">Добавить товар</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'AddItem',
  data () {
    return {
      form: {
        name: null,
        description: '',
        image: null,
        price: null
      }
    }
  },
  methods: {
    ...mapActions(['addItem']),
    submitForm () {
      this.addItem(Object.freeze(this.form))
      this.resetForm()
      this.$v.$reset()
    },
    resetForm () {
      this.form = {
        name: null,
        description: '',
        image: null,
        price: null
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      image: {
        required
      },
      price: {
        required
      }
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
        letter-spacing: -0.02em;
        color: #49485E;
      }
    }

    &__body {

      &-error {
        font-size: 10px;
        letter-spacing: -0.02em;
        color: red;
      }

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
      background: #7BAE73;
      border-radius: 10px;
      border: none;
      padding: 10px 65px;
      color: white;
      transition: 0.5s;

      @media (max-width: 768px) {
        padding: 10px 44px;
      }

      &:disabled {
        background: #EEEEEE;
        color: #B4B4B4;
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
