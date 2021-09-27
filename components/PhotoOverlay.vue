<template>
  <div v-if="visible" class="photo-overlay">
    <b-container fluid class="ph-over">
      <b-row class="ph-over">
        <b-col md="2" lg="2" class="right">
          <div class="nav-slide-button" @click="PREVIOUS_ITEM()">
            <b-icon
              icon="chevron-left"
              variant="success"
              class="photo-previous"
            />
          </div>
        </b-col>

        <b-col md="8" lg="8" class="middle">
          <div class="img-overlay-wrapper">
            <b-img
              :src="`${require(`~/assets/imgs/${
                this.photo[this.endpoint][this.firstItem]
              }`)}`"
              center
              fluid
              alt="Применение шарнирной сетки"
            />
          </div>
        </b-col>

        <b-col md="2" lg="2" class="right">
          <div class="nav-slide-button" @click="NEXT_ITEM()">
            <b-icon icon="chevron-right" variant="success" class="photo-next" />
          </div>
        </b-col>
      </b-row>
      <div class="photo-close">
        <p class="h2 animate__jello" @click="CHANGE_MODAL(['', ''])">
          ЗАКРЫТЬ
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  watch: {
    visible () {
      if (this.visible) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
  computed: {
    ...mapState('photoItem', ['visible']),
    ...mapState('photoItem', ['firstItem']),
    ...mapState('photoItem', ['photo']),
    ...mapState('photoItem', ['endpoint'])
  },
  methods: {
    ...mapMutations('photoItem', ['CHANGE_MODAL']),
    ...mapMutations('photoItem', ['PREVIOUS_ITEM']),
    ...mapMutations('photoItem', ['NEXT_ITEM']),
    show () {
      // prevent body scrolling
      document.body.classList.add('open-photo-overlay')
    },
    hide () {
      // restore any previous scrollability
      document.body.classList.remove('open-photo-overlay')
    }
  }
}
</script>

<style lang="scss">
.ph-over {
  height: 100%;
}
.nav-slide-button {
  height: 100%;
  cursor: pointer;
  position: relative;
}
.photo-overlay {
  color: white;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
  transition: all 0.5s ease;
  user-select: none;
}
.img-overlay-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  overflow: hidden;
}
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.open-photo-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
.photo-close {
  position: absolute;
  top: 3%;
  left: 20%;
  width: 60%;
  margin-right: 20%;
  color: white;
  text-align: center;
  p {
    cursor: pointer;
    &:hover {
      color: grey;
    }
  }
}

.photo-previous {
  position: absolute;
  top: 50%;
  left: 5%;
  fill: white;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.photo-next {
  position: absolute;
  top: 50%;
  right: 5%;
  fill: white;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
