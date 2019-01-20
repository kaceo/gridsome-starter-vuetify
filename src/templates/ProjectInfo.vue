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
  qq: projectInfo (path: $path) {
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

<style>
  /* .header {
    margin-bottom: 70px;
  } */

  .article {
    margin-top: 15px;
  }

  .article h1 {
    font-size: 40px;
  }

  .article img {
    width: 100%;
    border-radius: 5px;
  }

  .article a {
    color: #4dba87;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
