import { blogMutations } from '../../constants/vuex'
const qs = require('qs')
export default {
  async fetchData({ state, commit }) {
    const queryString = qs.stringify(state.query)
    console.log(queryString)
    const response = await this.$axios.get(
      '/categories/1/blogs/?' + queryString
    )
    console.log(response.data.data)
    commit(blogMutations.SET.DATA, response.data.data, { root: true })
  },
}
