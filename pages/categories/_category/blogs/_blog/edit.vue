<template>
  <div class="text-right m-20">
    <div class="form-group">
      <div class="card text-center">
        <div class="card-header font-weight-bold">
          <div>Edit Post</div>
          <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
        </div>
        <div class="card-body">
          <b-row class="mb-2">
            <b-col sm="2">
              <label for="textarea-small" class="font-weight-bold">
                title :</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-small"
                v-model="title"
                size="sm"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="2">
              <label for="textarea-small" class="font-weight-bold">
                description :</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-small"
                v-model="description"
                size="sm"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="2">
              <label for="textarea-small" class="font-weight-bold">
                details :</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-small"
                v-model="details"
                size="sm"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="2">
              <label for="textarea-small" class="font-weight-bold">
                author :</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-small"
                v-model="author"
                size="sm"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="2">
              <label for="textarea-small" class="font-weight-bold"
                >label :</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-small"
                v-model="label"
                size="sm"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="2">
              <label for="textarea-small" class="font-weight-bold"
                >thumbnail :</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-small"
                v-model="thumbnail"
                size="sm"
              ></b-form-textarea>
            </b-col>
          </b-row>
        </div>
        <b-button class="btn-primary float-right pr-5" @click="editPost"
          >Update</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { blogActions } from '../../../../../constants/vuex'
export default {
  async fetch({ store, params }) {
    await store.dispatch(blogActions.FETCH.SINGLE_POST, params)
  },
  data() {
    return {
      title: '',
      description: '',
      details: '',
      author: '',
      label: '',
      thumbnail: '',
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.category.data,
      blog: (state) => state.blog.post,
    }),
  },
  created() {
    this.title = this.blog.title
    this.description = this.blog.description
    this.details = this.blog.details
    this.author = this.blog.author
    this.label = this.blog.label
    this.thumbnail = this.blog.thumbnail
  },
  methods: {
    ...mapActions({
      editSinglePost: blogActions.UPDATE.POST,
    }),
    editPost() {
      const item = {
        id: this.blog.id,
        title: this.title,
        description: this.description,
        details: this.details,
        author: this.author,
        label: this.label,
        thumbnail: this.thumbnail,
      }
      const params = this.$route.params
      this.editSinglePost({ params, item })
      this.$router.push(
        '/categories/' + this.blog.categoryId + '/blogs/' + this.blog.id
      )
    },
  },
}
</script>
