export const state = () => {
  return {
    userInfo: {}
  }
}

export const mutations = {
  upDataUserInfo (state, info) {
    console.log(info)
    state.userInfo = info
  }
}

export const actions = () => {

}
