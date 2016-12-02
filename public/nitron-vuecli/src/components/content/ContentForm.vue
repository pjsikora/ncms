<template>
  <div class="page-form medium-9 columns">
    <h3>Content form</h3>
    <form action="">
      <input type="text" class="hidden">
      <input type="text" placeholder="Name">
      <input type="text" placeholder="SEO Keywords">
      <input type="text" placeholder="SEO Description">
      <input type="text" placeholder="slug">
      <input type="checkbox" id="is_visible"><label for="is_visible">Visible</label>
      <select name="" id="">

      </select>
      <button class="button">Submit</button>
    </form>




    <h3>Content form</h3>
    <input type="text" class="hidden">
    <input type="text" placeholder="Name">

    <div class="elements">
      <button data-element="div">Div</button>
      <button data-element="div">Div</button>
      <button data-element="div">Div</button>
      <button data-element="div">Div</button>
    </div>

    <textarea name="" id="contentform__content" cols="30" rows="10"></textarea>
    <input type="checkbox"><label for="is_visible">Visible</label>
    <select name="">

    </select>

    <button class="button">Create content</button>


  </div>
</template>

<script type="text/babel">
  export default {
    name: 'hello',

    data () {
      return {
      }
    }
  }
</script>

<style scoped>
</style>
