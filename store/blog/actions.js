import { blogMutations } from '../../constants/vuex'
const qs = require('qs')
export default {
  async fetchData({ state, commit }) {
    const queryString = qs.stringify(state.query)
    console.log(queryString)
    const response = await this.$axios.get('/categories?' + queryString)
    console.log(response)
    commit(blogMutations.SET.DATA, response.data, { root: true })
  },
}
