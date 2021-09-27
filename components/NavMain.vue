<template>
  <div>
    <b-navbar
      toggleable="lg"
      :type="topY > 10 ? 'light' : 'dark'"
      fixed="top"
      :class="topY > 10 ? 'background-nav' : ''"
    >
      <b-navbar-brand to="/">
        СЕТКА-ФЕРМЕР
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            Главная
          </b-nav-item>
          <b-nav-item to="/about">
            О нас
          </b-nav-item>
          <b-nav-item to="/catalog">
            Цены
          </b-nav-item>
          <b-nav-item to="/delivery">
            Как заказать
          </b-nav-item>
          <b-nav-item to="/contact">
            Контакты
          </b-nav-item>
          <b-nav-item id="btnShow" class="nav-object" @click="showModal">
            Корзина
            <p v-show="productsQuantity > 0" class="quantity">
              {{ productsQuantity }}
            </p>
          </b-nav-item>
          <b-nav-item to="/">
            Отзывы
          </b-nav-item>
          <b-nav-item
            id="whatsapp"
            class="whatsapp"
            href="https://wa.me/79275360360"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" /> WhatsApp
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <slot />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    topY: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showModal () {
      this.$root.$emit('bv::show::modal', 'modalCart', '#btnShow')
    }
  },
  computed: {
    ...mapState('catalog', ['selectedItems']),
    productsQuantity () {
      if (this.selectedItems) {
        return this.selectedItems.length
      } else { return 0 }
    }
  }
}
</script>

<style lang="scss">
.navbar-collapse.collapse.show,
.navbar-collapse.collapsing {
  background-color: white;

  .nuxt-link-exact-active {
    color: blue !important;
  }

  ul {
    padding-left: 24px;
    padding-bottom: 24px;
    padding-top: 24px;
    #whatsapp > a {
      margin-left: 0px;
      padding: 8px 0;
      background-color: transparent;
      color: green !important;
    }
    li {
      a {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}

.fixed-top {
  transition: background-color 0.3s ease-out;
}
.background-nav {
  background-color: #fff;
  transition: all 0.3s ease-out;
  box-shadow: 0 2px 10px -1px rgba(87, 97, 100, 0.35);
}
// .navbar-light .navbar-brand {
//   color: white !important;
// }
.navbar-dark .navbar-nav .nav-link {
  color: white;
}
.navbar-collapse.collapse {
  justify-content: flex-end;
}

.navbar-dark .nuxt-link-exact-active {
  color: rgba(255, 255, 255, 0.8) !important;
}
.navbar-light .nuxt-link-exact-active {
  color: #007bff;
}
.nav-item {
  text-transform: uppercase;
}
.nav-object {
  position: relative;
  .quantity {
    position: absolute;
    right: 0;
    top: 0;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    background-color: #fb3f4c;
    width: 20px;
    color: #fff;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }
}

.navbar-brand {
  font-weight: 400;
  font-size: 24px;
}

#whatsapp.whatsapp .nav-link {
  background-color: #007bff;
  text-transform: none !important;
  margin-left: 32px;
  padding-left: 1rem;
  padding-right: 1rem;
  color: white !important;
  &:hover {
    background-color: green;
  }
}
@media (min-width: 576px) and (max-width: 991.98px) {
  .cart-bb {
    margin-right: 40%;
  }
}
</style>
