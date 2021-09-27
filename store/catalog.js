export const state = () => ({
  fence: [
    {
      title: 104,
      item: [
        {
          width: 7.5,
          retailPrice: 137,
          wholePrice: 128,
          volume: 0.13,
          weight: 36,
          pic: '104x75',
          check: true
        },
        {
          width: 10,
          retailPrice: 110,
          wholePrice: 102,
          volume: 0.1,
          weight: 26,
          pic: '104x10',
          check: true
        },
        {
          width: 15,
          retailPrice: 85,
          wholePrice: 80,
          volume: 0.07,
          weight: 21,
          pic: '104x15',
          check: true
        }
      ]
    },
    {
      title: 125,
      item: [
        {
          width: 7.5,
          retailPrice: 155,
          wholePrice: 145,
          volume: 0.17,
          weight: 42,
          pic: '125x75',
          check: true
        },
        {
          width: 10,
          retailPrice: 127,
          wholePrice: 119,
          volume: 0.12,
          weight: 34,
          pic: '125x10',
          check: true
        },
        {
          width: 15,
          retailPrice: 97,
          wholePrice: 90,
          volume: 0.08,
          weight: 27,
          pic: '125x15',
          check: true
        }
      ]
    },
    {
      title: 147,
      item: [
        {
          width: 7.5,
          retailPrice: 178,
          wholePrice: 164,
          volume: 0.2,
          weight: 47,
          pic: '147x75',
          check: true
        },
        {
          width: 10,
          retailPrice: 138,
          wholePrice: 129,
          volume: 0.14,
          weight: 38,
          pic: '147x10',
          check: true
        },
        {
          width: 15,
          retailPrice: 110,
          wholePrice: 102,
          volume: 0.1,
          weight: 30,
          pic: '147x15',
          check: true
        }
      ]
    },
    {
      title: 168,
      item: [
        {
          width: 7.5,
          retailPrice: 200,
          wholePrice: 184,
          volume: 0.22,
          weight: 53,
          pic: '168x75',
          check: true
        },
        {
          width: 10,
          retailPrice: 146,
          wholePrice: 137,
          volume: 0.16,
          weight: 40,
          pic: '168x10',
          check: true
        },
        {
          width: 15,
          retailPrice: 120,
          wholePrice: 110,
          volume: 0.11,
          weight: 34,
          pic: '168x15',
          check: true
        }
      ]
    },
    {
      title: 188,
      item: [
        {
          width: 7.5,
          retailPrice: 215,
          wholePrice: 200,
          volume: 0.26,
          weight: 59,
          pic: '188x75',
          check: true
        },
        {
          width: 10,
          retailPrice: 161,
          wholePrice: 152,
          volume: 0.18,
          weight: 45,
          pic: '188x10',
          check: true
        },
        {
          width: 15,
          retailPrice: 130,
          wholePrice: 120,
          volume: 0.12,
          weight: 35,
          pic: '188x15',
          check: true
        }
      ]
    }
  ],
  selectedItems: [],
  totalQuatity: 0,
  totalVolume: 0,
  totalWeight: 0,
  cities: [],
  serverError: false,
  deliveryPrice: [],
  loadingButton: false,
  sendedMail: false,
  sendError: false

})

export const mutations = {
  CHANGE_MODAL (state, item) {
    state.visible = !state.visible
    state.firstItem = item
  },
  SET_ITEM (state, item) {
    state.selectedItems.push({
      heightFence: item[0],
      widthFence: item[1],
      retailPrice: item[2],
      wholeFencePice: item[3],
      quantity: item[4],
      indexA: item[5],
      indexB: item[6],
      volume: item[7],
      weight: item[8]
    })
    state.fence[item[5]].item[item[6]].check = false
  },
  REMOVE_ITEM (state, item) {
    state.fence[state.selectedItems[item].indexA].item[state.selectedItems[item].indexB].check = true
    state.selectedItems.splice(item, 1)
    state.deliveryPrice = []
  },
  UPDATE_QUANTITY (state, ind) {
    state.selectedItems[ind[0]].quantity = ind[1]
    state.deliveryPrice = []
  },
  UPDATE_TOTAL (state, payload) {
    state.totalQuatity = payload[0]
    state.totalVolume = payload[1]
    state.totalWeight = payload[2]
  },
  SET_CITIES (state, payload) {
    state.cities = payload
  },
  SET_DELIVERY_PRICE (state, payload) {
    state.deliveryPrice = payload
  },
  CHANGE_SPINNER (state) {
    state.loadingButton = true
  },
  DISABLE_SPINNER (state) {
    state.loadingButton = false
  },
  SET_ERROR_SERVER (state, payload) {
    state.serverError = payload
  },
  REMOVE_D_PRICE (state) {
    state.deliveryPrice = []
  },
  SET_THANKS (state) {
    state.sendedMail = true
  },
  DESTROY_THANKS (state) {
    state.sendedMail = false
  },
  CLEAR_SEL_ITEMS (state) {
    state.selectedItems = []
    state.fence.forEach((element) => {
      element.item.forEach((el) => {
        el.check = true
      })
    })
  },
  SET_SEND_ERROR (state) {
    state.sendError = true
  },
  CLEAR_SEND_ERROR (state) {
    state.sendError = false
  }
}

export const actions = {
  async getCitites ({ commit }) {
    const key = '1263cf412410720b9dbae9c0f608d28e71d11ef3'
    const city = await this.$axios.$get('https://api.c6v.ru/?key=' + key + '&q=getCities')
    const cit = city.map((res) => {
      return res.name
    })
    const withouTDouble = Array.from(new Set(cit))
    commit('SET_CITIES', withouTDouble)
  },
  async getDeliveryPrices ({ commit }, { city, weight, width, height, door }) {
    const key = '1263cf412410720b9dbae9c0f608d28e71d11ef3'
    const prices = await this.$axios.$get('https://api.c6v.ru/?key=' + key + '&q=getPrice&arrivalDoor=true&derivalDoor=' + door + '&startCity=Волгоград&endCity=' + city + '&weight=' + weight + '&width=' + width + '&height=' + height + '&length=' + width + '')
    if (prices.length === 0) {
      commit('SET_ERROR_SERVER', true)
    } else if (prices.length >= 0) {
      const pric = prices.map((res) => {
        return {
          item: res.name + ' ' + res.days + ' дней ' + res.price + ' рублей'
        }
      })
      commit('SET_DELIVERY_PRICE', pric)
      commit('SET_ERROR_SERVER', false)
    }
    commit('DISABLE_SPINNER')
  }
}
