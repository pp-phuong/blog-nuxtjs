import { categoryMutations } from '../../constants/vuex'
export default {
  async fetchData({ state, commit }, id) {
    const response = await this.$axios.get('/categories/')
    commit(categoryMutations.SET.DATA, response.data.data, { root: true })
    commit(categoryMutations.GET.DATA_SINGLE, id, { root: true })
  },
}
