export default {
  fetch() {
    this.fetchData()
  },
  methods: {
    async onPagePrev() {
      await this.decDataQueryPage()
      this.$fetch()
    },
    async onPageNext() {
      await this.incDataQueryPage()
      this.$fetch()
    },
    async onPageChange(currentPage) {
      await this.setDataQuery({
        page: currentPage,
      })
      this.$fetch()
    },
    async onTopBlog() {
      await this.setDataQuery({
        limit: 4,
      })
      this.$fetch()
    },
    async onReadMoreBlog() {
      await this.setDataQuery({
        limit: 8,
      })
      this.$fetch()
    },
  },
}
