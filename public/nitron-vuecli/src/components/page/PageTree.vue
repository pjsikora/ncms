<template>
  <div class="pageTree medium-3 columns">
    <h4>Pages tree</h4>
    <ul>

      <li v-for="modelus in pages.children" @click="elementClicked($event)" v-bind:data-id="modelus._id">
        <router-link v-bind:to="'/pages/single/'+modelus._id">{{modelus.name}}</router-link>
      </li>
    </ul>

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
        unsortedList: [],
        pages: []
      }
    },

    methods: {
      unFlatArray (data) {
        var list = data
        var rootNode = {children: []}
        var nodeList = {0: rootNode}

        console.log(list)

        for (var i = 0; i < list.length; i++) {
          nodeList[data[i]._id] = data[i]

          if (typeof nodeList[data[i].parent_id].children === 'undefined') {
            nodeList[data[i].parent_id]['children'] = []
          }

          nodeList[data[i].parent_id].children.push(nodeList[data[i]._id])
        }

        return rootNode
      },

      elementClicked (e) {
        console.log('clicked')
        console.log(e.currentTarget.dataset.id)
      }
    },

    created () {
      this
              .$http
              .get(CFG.api + '/pages/list')
              .then((response) => {
                this.pages = response.body.content

                console.log(this.pages)
                console.log(this.unFlatArray(this.pages))

                this.pages = this.unFlatArray(this.pages)
              })
    }
  }
</script>

<style scoped>

</style>
