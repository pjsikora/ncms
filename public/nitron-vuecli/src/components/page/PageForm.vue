<template>
  <div class="medium-12 columns">
    <page-tree></page-tree>
    <div class="page_form medium-9 columns">
      <div class="page_form__keeper">
        <h3>Page form</h3>

        <form>

          <fieldset class="fieldset">
            <!-- General -->
            <legend>{{L18n.page.form.general}}</legend>

            <label>
              <!-- Visible -->
              {{L18n.page.form.visible}}
              <input type="checkbox" v-model="page.is_visible" v-bind:true-value="1"
                     v-bind:false-value="0">
            </label>

            <label>
              <!-- Deleted -->
              {{L18n.page.form.deleted}}
              <input type="checkbox" v-model="page.is_deleted" v-bind:true-value="1"
                     v-bind:false-value="0">
            </label>

            <label>
              <!-- Parent ID -->
              {{L18n.page.form.parent_id__label}}
              <input type="text" v-bind:placeholder="L18n.page.form.parent_id__placeholder" v-model="page.parent_id">
            </label>

            <label>
              <!-- Page order -->
              Page order
              <input type="text" placeholder="Order" v-model="page.order">
            </label>

            <label>
              <!-- Page name -->
              {{L18n.page.form.page_name__label}}
              <input type="text" v-bind:placeholder="L18n.page.form.page_name__placeholder" v-model="page.name">
            </label>
          </fieldset>

          <fieldset class="fieldset">
            <!-- SEO (Search Engine Optimization) -->
            <legend>{{L18n.page.form.seo}}</legend>

            <label>
              <!-- Slug -->
              {{L18n.page.form.slug__label}}
              <input type="text" v-bind:placeholder="L18n.page.form.slug__placeholder" v-model="page.slug">
            </label>

            <label>
              <!-- Page SEO Keywords (separated with comma ",") -->
              {{L18n.page.form.keywords__label}}
              <input type="text" v-bind:placeholder="L18n.page.form.keywords__placeholder" v-model="page.seo_keywords">
            </label>

            <label>
              <!--Page SEO Description-->
              Page SEO Description
              {{L18n.page.form.description__label}}
              <input type="text" v-bind:placeholder="L18n.page.form.description__placeholder"
                     v-model="page.seo_description">
            </label>
          </fieldset>


          <!--<select name="" id="">-->

          <!--</select>-->
          <button class="button" v-on:click="submitOnClick()">Submit</button>
        </form>
      </div>

      <div class="page_form__notice">

      </div>

      <div class="page_form__progress">

      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import PageTree from './PageTree'
  import Helpers from '../../shared/Helpers'

  import L18n from '../../l18n/Localization'

  import CFG from '../../config'

  export default {
    name: 'hello',
    data () {
      return {
        page: {
          is_visible: 1,
          is_deleted: 0,
          parent_id: '0',
          order: '0'
        },

        // Localization
        L18n: L18n
      }
    },

    components: {
      PageTree
    },

    methods: {
      submitOnClick () {
        console.log(this.page)
        console.log(Helpers.JSON2GET(this.page))

        this.$http.get(CFG.api + '/pages/create?' + Helpers.JSON2GET(this.page))
                .then((response) => {
                  console.log(response)
                }, (response) => {
                  console.log('error')
                  console.log(response)
                })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
