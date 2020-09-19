<template>
  <div class="text-right m-20">
    <div class="form-group">
      <div class="card text-center">
        <div class="card-header font-weight-bold">
          Create New Post
        </div>
        <div class="card-body">
          <b-row class="d-flex">
            <b-col sm="2">
              <label
                for="exampleFormControlSelect1"
                class="font-weight-bold mr-2"
                >Category</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-select
                id="exampleFormControlSelect1"
                v-model="categoryId"
                class="form-control mdb-select md-form mb-2"
                required
              >
                <option
                  v-for="(category, index) in categories"
                  :key="'category' + index"
                  :value="category.id"
                >
                  {{ category.title }}
                </option>
              </b-form-select>
            </b-col>
          </b-row>
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
                placeholder="title"
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
                placeholder="description"
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
                placeholder="details"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="2">
              <label for="textarea-small" class="font-weight-bold">
                thumbnail :</label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-small"
                v-model="thumbnail"
                size="sm"
                placeholder="thumbnail"
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
                placeholder="author"
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
                placeholder="label"
              ></b-form-textarea>
            </b-col>
          </b-row>
        </div>
        <b-button class="btn-primary float-right pr-5" @click="addNewPost"
          >Post</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { categoryActions, blogActions } from '../../constants/vuex'
export default {
  async fetch({ store, params }) {
    await store.dispatch(categoryActions.FETCH.DATA, params.category)
  },
  data() {
    return {
      title: '',
      description: '',
      details: '',
      author: '',
      label: '',
      categoryId: '',
      thumbnail: '',
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.category.data,
    }),
  },
  methods: {
    ...mapActions({
      createNewPost: blogActions.ADD.NEW_POST,
    }),
    addNewPost() {
      const item = {
        categoryId: this.categoryId,
        title: this.title,
        description: this.description,
        details: this.details,
        author: this.author,
        label: this.label,
        thumbnail: this.thumbnail,
      }
      const params = this.$route.params
      this.createNewPost({ params, item })
      this.$router.push('/categories/' + this.categoryId + '/blogs')
    },
  },
}
</script>
