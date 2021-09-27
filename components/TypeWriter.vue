<template>
  <div>
    <div class="type-wrapper">
      <h2>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
      </h2>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['ПРОСТОЙ МОНТАЖ', 'ГАРАНТИЯ 20 ЛЕТ', 'НИЗКАЯ СТОИМОСТЬ'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 100,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  created () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  methods: {
    typeText () {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) { this.typeStatus = true }
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus) { this.typeStatus = true }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length) { this.typeArrayIndex = 0 }
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.type-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
span.typed-text {
  color: #ffffff;
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
