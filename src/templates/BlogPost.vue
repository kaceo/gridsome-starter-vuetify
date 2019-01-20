<template lang="pug">
layout
  .article
    h1 {{ that.title }}
    span {{ that.date }}
    hr
    | Image is {{ that.fields.image.src }}
    img(:src='that.fields.image.src')
    hr
    .content(v-html='that.content')
    hr
    p {{ that }}
</template>

<page-query>
query getSingle ($path: String!) {
  qq: blogPost (path: $path) {
    title
    date (format: "D MMMM, YYYY")
    content
    fields {
      image
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.that.title
    }
  },
  computed: {
    that: function() {
      return this.$page.qq
    }
  }
}
</script>

<style lang="sass" scoped>
.article
  margin-top: 15px

  h1
    font-size: 40px
    color: #c33;

  img
    width: 100%
    border-radius: 5px

  a
    color: #4dba87
    text-decoration: underline

  a:hover
    text-decoration: none

  span
    font-size: 80%
    margin-bottom: 20px

  ol
  ul
    list-style-position: outside

  ul
    list-style: disc
    padding-left: 20px

  .content p:first-child
    margin-top: 15px

  .content p
    margin-top: 0
    margin-bottom: 10px
    line-height: 1.5

</style>
