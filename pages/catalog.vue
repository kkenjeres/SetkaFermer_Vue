<template>
  <div>
    <section class="page-header">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <div class="headTitleWrapper">
              <h1 class="display-3 with-back">
                Цены
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <div id="fence-nav" class="fence-nav">
        <a v-smooth-scroll class="fence-nav-link" href="#104">Высота 104 см</a>
        <a v-smooth-scroll class="fence-nav-link" href="#125">Высота 125 см</a>
        <a v-smooth-scroll class="fence-nav-link" href="#147">Высота 147 см</a>
        <a v-smooth-scroll class="fence-nav-link" href="#168">Высота 168 см</a>
        <a v-smooth-scroll class="fence-nav-link" href="#188">Высота 188 см</a>
        <span id="slider" class="tab-slider" :style="{ left: left + 'px' }" />
      </div>
      <price-row
        v-for="(tem, indexA) in this.fence"
        :key="indexA"
        :height="tem.title"
      >
        <catalog-item
          v-for="(fency, indexB) in tem.item"
          :key="indexB"
          :width="fency.width"
          :height="tem.title"
          :whole-price="fency.wholePrice"
          :retail="fency.retailPrice"
          :f-image="fency.pic"
          :index-a="indexA"
          :index-b="indexB"
          :check="fency.check"
          :volume="fency.volume"
          :weight="fency.weight"
        />
      </price-row>
      <section id="wire" class="catalog-section-row wire">
        <b-container fluid>
          <b-row>
            <b-col lg="3" md="3" sm="12">
              <p class="h3 title-row">
                Оцинкованная проволока
              </p>
              <p class="catalog-subtitle subtitle-catalog">
                Гост 3282-74
              </p>
              <p class="catalog-subtitle subtitle-catalog">
                Вся продукция сертефицированна
              </p>
            </b-col>
            <b-col lg="3" md="3" sm="12" xs="12">
              <div class="catalog-img-wrapper">
                <b-img src="~/assets/imgs/wire.jpg" center fluid />
              </div>

              <p class="h4 ct-title">
                D-2 ММ
              </p>
              <p>
                Розница: <span class="price">80 руб</span> за кг<br>
                Бухта (50кг): <span class="price">4000 руб</span>
              </p>
              <p class="wire-text">
                Уточняйте у менеджера по телефону
              </p>
              <b-button variant="primary" disabled>
                В корзину
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PriceRow from '../components/PriceRow.vue'
import CatalogItem from '../components/CatalogItem.vue'

export default {
  components: {
    PriceRow,
    CatalogItem
  },
  data () {
    return {
      left: -500,
      current: 0,
      styleObject: {
        color: 'red'

      },
      wires: {
        retailPricing: 80,
        volumeW: 0.0265
      },
      navCount: []
    }
  },
  head () {
    return {
      title: 'Каталог',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Купить шарнирную сетку. Шарнирная сетка в отличии от рабицы или сварной занимает малый объем, поэтому сумма доставки будет значительно меньше!'
        },
        { hid: 'keywords', name: 'keywords', content: 'Сетка шарнирная краснодар, cетка шарнирная краснодар купить, шарнирная сетка Москва, просто заборы сетка, cетка Фермерская' }
      ]
    }
  },
  computed: {
    ...mapState('catalog', ['fence']),
    catalogSection () {
      const fenceHeight = document.getElementsByClassName('fence-nav-link')
      return fenceHeight
    }
  },
  mounted () {
    window.addEventListener('scroll', this.fenceNavManipulation)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.fenceNavManipulation)
    this.$store.commit('catalog/DISABLE_SPINNER')
  },
  beforeUpdate () {
    this.$store.commit('catalog/DISABLE_SPINNER')
  },
  methods: {
    fenceNavManipulation () {
      const fenceNav = document.getElementById('fence-nav') // Бокс навигации по сетке
      const checkTabContainerPosition = fenceNav.getBoundingClientRect()
      const top = checkTabContainerPosition.top + 30 // 56 пикселей при залипании
      const els = Array.from(this.catalogSection)
      els.forEach((element) => {
        const id = (element.getAttribute('href')).replace('#', '')
        const rowFence = document.getElementById(id) // получение всех секций под ид навигации
        const elParam = rowFence.getBoundingClientRect()

        if (elParam.top <= top && elParam.bottom >= top) {
          if (this.navCount.includes(id)) {
            this.current = this.navCount[this.navCount.length - 1]
            this.left = document.body.clientWidth * 0.2 * this.navCount.length - (document.body.clientWidth * 0.2)
          } else {
            this.navCount.push(id)
          }
        } else if (elParam.top >= top && elParam.bottom >= top) {
          if (this.navCount.includes(id)) {
            this.navCount.pop()
            this.current = this.navCount[this.navCount.length - 1]
            this.left = document.body.clientWidth * 0.2 * this.navCount.length - (document.body.clientWidth * 0.2)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
@media (max-width: 992px) {
  .catalog-img-wrapper {
    padding-right: 24px;
  }
}

@media (max-width: 576px) {
  .ct-item {
    padding-top: 64px;
  }
}

.wire-text {
  color: red;
}

.fence-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 56px;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  z-index: 10;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100%;
    color: black;
    text-align: center;

    &:hover {
      color: white;
      background: rgba(30, 28, 202, 0.8);
      transition: all 0.5s ease;
    }
  }
  .tab-slider {
    width: 20%;
    height: 6px;
    position: absolute;
    bottom: 0;
    background-color: #66b1f1;
    transition: left 0.3s ease;
  }
}

.ct-title {
  padding-top: 1rem;
}

.wire {
  padding-bottom: 10%;
  .catalog-img-wrapper {
    width: 60%;
  }
}

.title-row {
  text-transform: uppercase;
  font-weight: 300;
}

.catalog-img-wrapper {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

.catalog-section-row {
  padding-top: 156px;
  .h4 {
    font-weight: 300;
  }
  .price {
    color: #0043ce;
  }
  .btn {
    border-radius: 0;
    text-transform: uppercase;
  }
}
</style>
