import { blogMutations } from '../../constants/vuex'
const qs = require('qs')
export default {
  async fetchData({ state, commit }, id) {
    const queryString = qs.stringify(state.query)
    console.log(queryString)
    const response = await this.$axios.get(
      '/categories/' + id + '/blogs/?' + queryString
    )
    console.log(response.data.data)
    commit(blogMutations.SET.DATA, response.data.data, { root: true })
    commit(blogMutations.SET.TOTAL, response.data.total, { root: true })
  },

  async fetchSinglePost({ commit }, params) {
    console.log(params)
    const response = await this.$axios.get(
      '/categories/' + params.category + '/blogs/' + params.blog
    )
    console.log(response.data)
    commit(blogMutations.SET.SINGLE_POST, response.data, { root: true })
  },
  async updatePost({ commit }, data) {
    const response = await this.$axios.put(
      '/categories/' + data.params.category + '/blogs/' + data.params.blog,
      data.item
    )
    console.log(response.data)
    commit(blogMutations.SET.SINGLE_POST, response.data, { root: true })
  },

  async addNewPost({ commit }, data) {
    const response = await this.$axios.post(
      '/categories/' + data.item.categoryId + '/blogs/',
      data.item
    )
    console.log(response.data)
    commit(blogMutations.SET.DATA, response.data, { root: true })
  },
}
