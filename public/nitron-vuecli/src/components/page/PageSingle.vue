<template>
  <div class="page-single medium-12 columns">
    <page-tree></page-tree>
    <div class="page-form medium-9 columns">
      <h3>Page single</h3>
      <div class="medium-12 columns">
        <!--Page ID-->
        <div class="medium-3 columns text-right"><strong>{{L18n.page_id}}</strong></div>
        <div class="medium-9 columns">{{page._id}}</div>
      </div>
      <div class="medium-12 columns">
        <!--Created-->
        <div class="medium-3 columns text-right"><strong>{{L18n.created}}</strong></div>
        <div class="medium-9 columns">{{page.created}}</div>
      </div>
      <!--Is deleted-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>Is {{L18n.is_deleted}}</strong></div>
        <div class="medium-9 columns">{{page.is_deleted}}</div>
      </div>
      <!--Is visible-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>{{L18n.is_visible}}</strong></div>
        <div class="medium-9 columns">{{page.is_visible}}</div>
      </div>
      <!--Name-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>{{L18n.name}}</strong></div>
        <div class="medium-9 columns">{{page.name}}</div>
      </div>
      <!--Order-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>{{L18n.order}}</strong></div>
        <div class="medium-9 columns">{{page.order}}</div>
      </div>
      <!--Parent ID-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>{{L18n.parent_id}}</strong></div>
        <div class="medium-9 columns">{{page.parent_id}}</div>
      </div>
      <!--Slug-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>{{L18n.slug}}</strong></div>
        <div class="medium-9 columns">{{page.slug}}</div>
      </div>
      <!--Keywords-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>{{L18n.page_keywords}}</strong></div>
        <div class="medium-9 columns">{{page.page_keywords}}</div>
      </div>
      <!--Description-->
      <div class="medium-12 columns">
        <div class="medium-3 columns text-right"><strong>{{L18n.page_description}}</strong></div>
        <div class="medium-9 columns">{{page.page_description}}</div>
      </div>
      <br>
      <div class="medium-12 class">
        <a href="/pageslug/${ page.slug }" target="blank" class="button tiny">{{L18n.actions.go_to_page_by_slug}}</a>
        <a v-bind:href="'/pageid/'+ page._id" target="blank" class="button tiny">{{L18n.actions.go_to_page_by_id}}</a>
      </div>
      <div class="medium-12 class">
        <a v-bind:href="'/pageid/'+ page._id" target="blank" class="button alert tiny">Edit page</a>
        <a v-bind:href="'/pageid/'+ page._id" target="blank" class="button alert tiny">Remove page</a>
        <a @click="removePage()" target="blank" class="button alert tiny">Remove page</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import PageTree from './PageTree'
  import L18n from '../../l18n'

  export default {
    components: {
      PageTree
    },

    data () {
      return {
        page: {},
        L18n: L18n.page.single
      }
    },

    methods: {
      edit () {
      },
      removePage () {
        console.log('removePage')
        console.log(this.page._id)
      }
    },

    created () {
      console.log(this.$route.params)
      let pageID = this.$route.params.page_id

      this.$http.get('http://localhost:8888/api/pages/read?_id=' + pageID)
        .then((response) => {
          console.log(response)
          this.page = response.body.content[0]
        })
    }
  }
</script>

<style scoped>
</style>
