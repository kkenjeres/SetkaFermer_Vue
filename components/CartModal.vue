<template>
  <b-modal
    id="modalCart"
    style="padding-left: 0px !important"
    size="xl"
    title="Корзина"
    hide-footer
  >
    <div v-if="this.selectedItems.length === 0 && this.sendedMail === false">
      <p id="btnCat" @click="hideModal()">
        Нет позиций для оформления ...
        <nuxt-link to="/catalog">
          В каталог
        </nuxt-link>
      </p>
    </div>
    <div
      v-else-if="this.selectedItems.length > 0 && this.sendedMail === false"
      class="cart-items"
    >
      <b-container>
        <b-row class="table-price-head">
          <b-col lg="2">
            <p>Размер</p>
          </b-col>
          <b-col lg="2">
            <p>Кол-во</p>
          </b-col>
          <b-col lg="2">
            <p>Длина</p>
          </b-col>
          <b-col lg="2">
            <p>Цена</p>
          </b-col>
          <b-col lg="2">
            <p>Стоимость</p>
          </b-col>
        </b-row>
        <b-row
          v-for="(select, index) in this.selectedItems"
          :key="index"
          class="cart-item-row-line"
        >
          <b-col lg="2">
            <p>{{ select.heightFence }}X{{ select.widthFence }}</p>
          </b-col>
          <b-col lg="2">
            <vue-number-input
              :value="select.quantity"
              controls
              :max="1000"
              :min="0"
              :center="true"
              @change="updateQuantity(index, $event)"
            />
          </b-col>
          <b-col lg="2">
            <p>{{ select.quantity * 50 }} метров</p>
          </b-col>
          <b-col lg="2">
            <p v-if="$store.state.catalog.totalQuatity >= 10">
              {{ select.wholeFencePice }} за п.м.
              <span class="opt">(Опт.)</span>
            </p>
            <p v-else>
              {{ select.retailPrice }} за п.м.
            </p>
          </b-col>
          <b-col lg="2">
            <p v-if="$store.state.catalog.totalQuatity >= 10">
              {{ select.quantity * 50 * select.wholeFencePice }} руб
            </p>
            <p v-else>
              {{ select.quantity * 50 * select.retailPrice }} руб
            </p>
          </b-col>
          <b-col lg="2">
            <p class="cart-item-close" @click="REMOVE_ITEM(index)">
              удалить
            </p>
          </b-col>
        </b-row>

        <b-row class="total_amount">
          <b-col>
            <p>Итоговая стоимость:</p>
            <p class="display-4">
              {{ getTotalPrice }} рублей
            </p>

            <p class="sizeTitle">
              Габариты груза:
            </p>

            <p>
              {{
                (getTotalAmount * 50 + "").replace(
                  /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                  "$1 "
                )
              }}
              погонных метров, {{ getTotalAmount }} рулонов, объём:
              {{ $store.state.catalog.totalVolume.toFixed(2) }} м<sup>3</sup>,
              Вес: {{ $store.state.catalog.totalWeight }} кг.
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" lg="12">
            <b-form-radio-group
              v-model="selected"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            />
          </b-col>
        </b-row>
        <b-row v-if="selected === 'С' || ('B' && selected != 'A')">
          <b-col lg="4" md="4">
            <p>Рассчитать доставку</p>
          </b-col>
          <b-col lg="4" md="4">
            <v-select
              v-model="selectedCity"
              placeholder="Введите город"
              :options="getCities"
            />
            <b-form-input
              v-if="selected === 'С'"
              v-model="street"
              placeholder="Улица"
              style="margin-top: 24px"
            />
          </b-col>
          <b-col lg="4" md="4">
            <b-button
              v-if="$store.state.catalog.loadingButton === false"
              variant="primary"
              @click="getDelivery(selected === 'С' ? 'true' : 'false')"
            >
              Рассчитать
            </b-button>
            <b-button v-else variant="primary" disabled>
              <b-spinner small type="grow" />Загрузка...
            </b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="8" md="8">
            <b-form id="catalog-form" @submit="onSubmit">
              <div v-if="$store.state.catalog.deliveryPrice.length > 0">
                <b-form-group label="Выбрать транспортную компанию">
                  <b-form-radio-group
                    v-model="selectDelivery"
                    :options="this.deliveryPrice"
                    name="radios-stacked"
                    value-field="item"
                    text-field="item"
                    stacked
                  />
                </b-form-group>
              </div>

              <b-form-group
                id="input-group-1"
                label="Email адрес:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="email"
                  required
                  placeholder="Введите email"
                />
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Телефон:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="phone"
                  v-mask="'+7-(###)-###-##-##'"
                  type="text"
                  required
                  placeholder="Введите телефон"
                />
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Ваше Имя:"
                type="text"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="name"
                  required
                  placeholder="Введите имя"
                />
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="Карта партнёра (Для организаций):"
                type="file"
                label-for="input-4"
              >
                <b-form-file
                  id="input-4"
                  ref="file1"
                  accept=".jpg, .png, .gif, .pdf"
                  placeholder="(*.jpg, *.png, *.gif, *.pdf)"
                  drop-placeholder="Положите файл сюда..."
                  @change="handleFileUpload"
                />
              </b-form-group>

              <b-button type="submit" variant="primary">
                Отправить
              </b-button>
            </b-form>
            <p v-if="$store.state.catalog.sendError === true">
              Произошла ошибка. Попробуйте ещё раз!
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <b-container>
        <b-row class="success">
          <b-col md="12" lg="12">
            <p class="display-4">
              Заказ принят!
            </p>
            <p>
              Спасибо за заказ. Наш менеджер свяжется с вами в кротчайшие сроки!
            </p>
            <b-button class="bt" variant="dark" squared @click="hideModal">
              Закрыть
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </b-modal>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      selectedCity: '',
      street: '',
      selectDelivery: '',
      selected: 'B',
      options: [
        { item: 'A', name: 'Самовывоз' },
        { item: 'B', name: 'Доставка до ближайшено терминала' },
        { item: 'С', name: 'Доставка до двери' }
      ],
      email: '',
      name: '',
      phone: '',
      file: null
    }
  },

  methods: {
    ...mapMutations('catalog', ['REMOVE_ITEM']),
    ...mapMutations('catalog', ['REMOVE_D_PRICE']),

    handleFileUpload () {
      this.file = document.getElementById('input-4').files[0]
      // console.log(this.file)
    },

    hideModal () {
      this.$root.$emit('bv::hide::modal', 'modalCart', '#btnCat')
      this.$store.commit('catalog/DESTROY_THANKS')
    },

    updateQuantity (index, row) {
      this.$store.commit('catalog/UPDATE_QUANTITY', [index, row])
    },
    getDelivery (door) {
      const weight = this.$store.state.catalog.totalWeight
      const side = Math.round((Math.cbrt(this.$store.state.catalog.totalVolume).toFixed(2)) * 100)
      this.$store.dispatch('catalog/getDeliveryPrices', { city: this.selectedCity, weight, width: side, height: side, door })
      this.$store.commit('catalog/CHANGE_SPINNER')
    },
    async onSubmit (evt) {
      evt.preventDefault()
      const formItems = []
      this.$yandexMetrika.reachGoal('otpravka_zakaz')
      this.$store.state.catalog.selectedItems.forEach(setka => formItems.push(setka.heightFence + ' на ' + setka.widthFence + ' - ' + setka.quantity + ' штук')
      )
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('phone', this.phone)
      formData.append('volume', this.$store.state.catalog.totalVolume.toFixed(2) + 'м. куб')
      formData.append('weight', this.$store.state.catalog.totalWeight + 'кг')
      formData.append('side', Math.round((Math.cbrt(this.$store.state.catalog.totalVolume).toFixed(2)) * 100) + 'см')
      formData.append('totalPrice', this.getTotalPrice + ' руб')
      formData.append('delivery', this.selectDelivery ? this.selectDelivery : 'самовывоз')
      formData.append('items', formItems)
      formData.append('city', this.selectedCity)
      formData.append('street', this.street)
      await axios.post('https://setka-fermer.ru/mail.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        this.$store.commit('catalog/SET_THANKS')
        this.$store.commit('catalog/CLEAR_SEL_ITEMS')
        this.$store.commit('catalog/CLEAR_SEND_ERROR')
      })
        .catch((res) => {
          this.$store.commit('catalog/SET_SEND_ERROR')
        })
    }
  },
  watch: {
    selected (val, oldVal) {
      this.$store.commit('catalog/REMOVE_D_PRICE')
    }
  },
  computed: {
    ...mapState('catalog', ['selectedItems']),
    ...mapState('catalog', ['deliveryPrice']),
    ...mapState('catalog', ['sendedMail']),
    getTotalAmount () {
      let totalAmount = 0
      let totalVolume = 0
      let totalWeight = 0
      this.$store.state.catalog.selectedItems.forEach((element) => {
        totalAmount += element.quantity
        totalVolume += element.volume * element.quantity
        totalWeight += element.weight * element.quantity
        this.$store.commit('catalog/UPDATE_TOTAL', [totalAmount, totalVolume, totalWeight])
      })
      return totalAmount
    },
    getTotalPrice () {
      let totalPrice = 0
      this.$store.state.catalog.selectedItems.forEach((el) => {
        if (this.$store.state.catalog.totalQuatity >= 10) {
          totalPrice += (el.wholeFencePice * el.quantity * 50)
        } else { totalPrice += (el.retailPrice * el.quantity * 50) }
      })
      return (totalPrice + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    },
    getCities () {
      if (this.$store.state.catalog.cities.length === 0) {
        this.$store.dispatch('catalog/getCitites')
        return this.$store.state.catalog.cities
      } else {
        return this.$store.state.catalog.cities
      }
    }

  }
}
</script>

<style lang='scss'>
@import "vue-select/src/scss/vue-select.scss";

@media (max-width: 576px) {
  .table-price-head {
    display: none;
  }

  .vs__dropdown-menu {
    bottom: calc(100% - 1px);
    top: auto;
  }

  .custom-file-input:lang(en) ~ .custom-file-label::after {
    content: "Выбрать" !important;
  }
}

.total_amount {
  background: blue;
  color: white;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 16px 0;
}

.opt {
  color: green;
}
.cart-items {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.cart-item-row-line {
  padding: 16px 0;
  border-bottom: 1px solid rgba(87, 97, 100, 0.3);
  div {
    display: flex;
    align-items: center;
    p {
      margin: 0;
    }
  }
}
.modal-content {
  border-radius: 0px;
}
.cart-item-close {
  color: blue;
  &:hover {
    cursor: pointer;
    color: green;
  }
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Выбрать" !important;
}

#modalCart {
  padding-left: 0px !important ;
}

.success {
  background: #24a148;
  color: white;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 16px 0;
  .bt {
    border-radius: 0;
  }
}
</style>
