export default {
  SET_DATA(state, data) {
    state.data = { ...state.data, ...data }
  },
  SET_QUERY(state, query) {
    state.query = { ...state.query, ...query }
  },
  SET_TOTAL(state, total) {
    state.total = total
  },
  SET_SINGLE_POST(state, data) {
    state.post = data
  },
  CLEAR_QUERY(state) {
    state.query = {
      page: 1,
      limit: 4,
    }
  },
  INC_QUERY_PAGE(state) {
    state.query.page += state.query.limit
  },

  DEC_QUERY_PAGE(state) {
    state.query.page -= state.query.limit
  },
  GET_ID(state, id) {
    state.data.categoryId = state.data.categoryId.filter((categoryId) => {
      return categoryId === id
    })
  },
}
