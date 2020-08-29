import { categoryMutations } from '../../constants/vuex'
export default {
  async fetchData({ state, commit, params }) {
    const response = await this.$axios.get('/categories/')
    commit(categoryMutations.SET.DATA, response.data.data, { root: true })
  },
}
