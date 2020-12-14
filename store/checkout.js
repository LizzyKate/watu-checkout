export const state = () => ({
  back: false,
  otp: false,
  cardDetail: true,
  //   details: true,
  //   success: false,
})
export const mutations = {
  goBack(state, payload) {
    state.back = payload
  },
  getOtp(state, payload) {
    state.otp = payload
  },
  hideCardDetail(state, payload) {
    state.cardDetail = payload
  },
  //   paymentSuccess(state, payload) {
  //     state.success = payload
  //     state.details = payload
  //   },
}
