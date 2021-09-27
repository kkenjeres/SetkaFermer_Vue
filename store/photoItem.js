export const state = () => ({
  visible: false,
  firstItem: '',
  endpoint: '',
  photo: [
    ['big/1.jpg',
      'big/2.jpg',
      'big/3.jpg',
      'big/4.jpg',
      'big/5.jpg',
      'big/6.jpg',
      'big/7.jpg',
      'big/8.jpg',
      'big/9.jpg',
      'big/10.jpg',
      'big/11.jpg',
      'big/12.jpg'],
    ['about/nrpp.jpg',
      'about/cert-1.jpg',
      'about/cert-2.jpg',
      'about/cert-3.jpg'
    ]
  ]
})

export const mutations = {
  CHANGE_MODAL (state, item) {
    state.visible = !state.visible
    state.firstItem = item[0]
    state.endpoint = item[1]
  },
  NEXT_ITEM (state) {
    state.firstItem >= state.photo[state.endpoint].length - 1 ? state.firstItem = 0 : state.firstItem++
  },
  PREVIOUS_ITEM (state) {
    state.firstItem <= 0 ? state.firstItem = state.photo[state.endpoint].length - 1 : state.firstItem--
  }
}
