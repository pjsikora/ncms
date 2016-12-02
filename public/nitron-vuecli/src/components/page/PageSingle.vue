<template>
  <div class="page-single medium-12 columns">
    <page-tree></page-tree>
    <div class="page-form medium-9 columns">
      <h3>Page single</h3>

      <p>
        <strong>_id: </strong>{{page._id}}
        <br>
        <strong>_created: </strong>{{ page._created }}
        <br>
        <strong>is_deleted: </strong>{{ page.is_deleted }}
        <br>
        <strong>is_visible: </strong>{{ page.is_visible }}
        <br>
        <strong>name: </strong>{{ page.name }}
        <br>
        <strong>order: </strong>{{ page.order }}
        <br>
        <strong>parent_id: </strong>{{ page.parent_id }}
        <br>
        <strong>slug: </strong>{{ page.slug }}
        <br>
        <strong>page_keywords: </strong>{{ page.page_keywords }}
        <br>
        <strong>page_description: </strong>{{ page.page_description }}
        <br>
        <br>
        <strong><a href="/pageslug/${ page.slug }" target="blank">Go to page by slug</a></strong>
        <br>
        <strong><a href="/pageid/${ page._id }" target="blank">Go to page by id</a></strong>
        <br>
      </p>
    </div>
  </div>
</template>

<script type="text/babel">
  //  import VueRouter from 'vue-router'

  import PageTree from './PageTree'

  export default {
    components: {
      PageTree
    },

    data () {
      return {
        page: {}
      }
    },

    created () {
      console.log(this.$route.params)
      let pageID = this.$route.params.page_id

      this.$http
              .get('http://localhost:8888/api/pages/read?_id=' + pageID)
              .then((response) => {
                console.log(response)
                this.page = response.body.content[0]
              }, (response) => {
                console.log(response.body)
              }
      )
    }
  }
</script>

<style scoped>
</style>
