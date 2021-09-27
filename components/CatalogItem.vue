<template>
  <b-col lg="3" md="3" sm="1" xs="1" class="ct-item">
    <div class="catalog-img-wrapper">
      <b-img
        :src="`${require(`~/assets/imgs/fence_svg/${fImage}.svg`)}`"
        :alt="`Шарнирная сетка высотой ${height} см с шириной ячейки ${width} см`"
        fluid
      />
    </div>
    <p class="h4">
      {{ height }} X {{ width }} СМ
    </p>
    <p class="price-info">
      Розница:
      <span class="price">{{ retail }} руб</span> за п.м.
    </p>
    <p class="price-info">
      Опт:
      <span class="price">{{ wholePrice }} руб</span> за п.м.
    </p>
    <!-- <inc-dec v-model="sheepCount" :min="0" /> -->
    <b-button
      v-if="check"
      class="btn"
      variant="primary"
      @click="
        setItem(
          [
            height,
            width,
            retail,
            wholePrice,
            1,
            indexA,
            indexB,
            volume,
            weight,
          ],
          'primary',
          'b-toaster-top-right'
        )
      "
    >
      В корзину
    </b-button>
    <b-button v-else disabled variant="primary">
      Добавлено
    </b-button>
  </b-col>
</template>

<script>
import { mapState } from 'vuex'

export default {

  props: {
    height: Number,
    width: Number,
    wholePrice: Number,
    retail: Number,
    fImage: String,
    indexA: Number,
    indexB: Number,
    check: Boolean,
    volume: Number,
    weight: Number
  },
  data () {
    return {
      value: 1
    }
  },
  methods: {
    setItem (items, variant = null, tsst) {
      this.$store.commit('catalog/SET_ITEM', items)
      this.$bvToast.toast('Позиция ' + items[0] + 'X' + items[1] + ' добавлена в корзину', {
        title: 'Корзина',
        variant,
        toaster: tsst,
        solid: true
      })
    },
    showModal () {
      this.$root.$emit('bv::show::modal', 'modalCart', '#btnShow')
    }

  },
  computed: {
    ...mapState('catalog', ['fence'])
  }
}
</script>

<style lang="scss" scopped>
.b-toast-primary.b-toast-solid .toast {
  background-color: #001d6c;
  color: white;
}
.toast {
  border: none;
  border-radius: 0 !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.toast-body {
  border-radius: none !important;
}

.toast-header {
  border-bottom: none !important;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.b-toast-primary .toast .toast-header {
  color: white !important;
  background-color: transparent !important;
}

.close.ml-auto.mb-1 {
  color: white;
}

.btn{
  display: block;
  margin-top: 20px;
}
</style>
