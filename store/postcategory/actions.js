import { postCategoryMutations } from '../../constants/vuex'
const qs = require('qs')
export default {
  async fetchData({ state, commit, params }) {
    const id = this.params.id
    const queryString = qs.stringify(state.query)
    const response = await this.$axios.get(
      '/categories/' + id + 'blogs/?' + queryString
    )
    console.log(response.data.data)
    commit(postCategoryMutations.SET.DATA, response.data.data, { root: true })
  },
}
