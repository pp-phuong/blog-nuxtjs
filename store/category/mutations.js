export default {
  SET_DATA(state, data) {
    state.data = data
  },
  GET_DATA_SINGLE(state, id) {
    state.category = state.data.filter((category) => {
      return category.id === id
    })
    console.log(state.category)
  },
}
