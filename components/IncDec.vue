<template>
  <div class="control number">
    <button class="decrement-button" :disabled="decrementDisabled" @click="decrement">
      −
    </button>
    <button class="increment-button" :disabled="incrementDisabled" @click="increment">
      +
    </button>
    <input
      v-model.number="currentValue"
      type="number"
      :disabled="inputDisabled"
      :min="min"
      :max="max"
      :step="step"
      @blur="currentValue = value"
      @keydown.esc="currentValue = value"
      @keydown.enter="currentValue = value"
      @keydown.up.prevent="increment"
      @keydown.down.prevent="decrement"
    >
  </div>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: 15
    },
    min: {
      type: Number,
      default: -15
    },
    value: {
      required: true
    },
    step: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      currentValue: this.value,
      decrementDisabled: false,
      incrementDisabled: false,
      inputDisabled: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  mounted () {
    if (this.value === this.min) {
      this.decrementDisabled = true
    }
  },
  methods: {
    increment () {
      if (this.disabled || this.incrementDisabled) {
        return
      }

      const newVal = this.currentValue + 1 * this.step
      this.decrementDisabled = false

      this._updateValue(newVal)
    },
    decrement () {
      if (this.disabled || this.decrementDisabled) {
        return
      }

      const newVal = this.currentValue + -1 * this.step
      this.incrementDisabled = false

      this._updateValue(newVal)
    },
    _updateValue (newVal) {
      const oldVal = this.currentValue

      if (oldVal === newVal || typeof this.value !== 'number') {
        return
      }
      if (newVal <= this.min) {
        newVal = this.min
        this.decrementDisabled = true
      }
      if (newVal >= this.max) {
        newVal = this.max
        this.incrementDisabled = true
      }
      this.currentValue = newVal
      this.$emit('input', this.currentValue)
    }
  }

}
</script>
