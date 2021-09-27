<template>
  <div>
    <nav-main :top-y="scrollPosition" />
    <Nuxt />
    <photo-overlay />
    <Footer />
    <cart-modal />
  </div>
</template>

<script>
import NavMain from '../components/NavMain.vue'
import PhotoOverlay from '../components/PhotoOverlay.vue'
import CartModal from '../components/CartModal.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    NavMain,
    PhotoOverlay,
    CartModal,
    Footer
  },
  data () {
    return {
      scrollPosition: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  }

}
</script>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
}

.page-header {
  background-color: #0043ce;
  color: white;
  font-size: 48px;
}

.headTitleWrapper {
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.with-back {
  background: white;
  color: #0043ce;
}
</style>
