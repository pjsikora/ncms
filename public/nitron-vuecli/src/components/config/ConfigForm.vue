<template>
  <div class="pageTree medium-12 columns">
    <h4>Config</h4>
    <div>
    <div class="medium-3 columns"><strong>Key</strong></div>
    <div class="medium-3 columns"><strong>Type</strong></div>
    <div class="medium-6 columns"><strong>Value</strong></div>
    </div>
    <div v-for="item in configoptions" @click="elementClicked($event)" v-bind:data-id="item._id">
      <div class="medium-3 columns">{{item.key}}</div>
      <div class="medium-3 columns">{{item.type}}</div>
      <div class="medium-6 columns">{{item.value}}</div>
    </div>

  </div>
</template>

<script type="text/babel">
  import CFG from '../../config'

  export default {
    name: 'pages-tree',

    state () {

    },

    data () {
      return {
        configoptions: []
      }
    },

    methods: {
      elementClicked (e) {
        console.log('clicked')
        console.log(e.currentTarget.dataset.id)
      }
    },

    created () {
      this
        .$http
        .get(CFG.api + '/config/list')
        .then((response) => {
          this.configoptions = response.body
        })
    }
  }
</script>

<style scoped>

</style>
