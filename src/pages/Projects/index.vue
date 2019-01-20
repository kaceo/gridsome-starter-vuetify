<template lang="pug">
layout
  h1 Current Projects
  ul
    li one
    li two
  h2 Blogs
  ul
    li(v-for="edge in $page.allBlogPost.edges",
      :key="edge.node._id")
      router-link(:to="edge.node.path")
        | {{ edge.node.title }}
  h2 Projects
  ul
    li(v-for="edge in $page.allProjectInfo.edges",
      :key="edge.node._id")
      router-link(:to="edge.node.path")
        | {{ edge.node.title }}
  hr
  h2 Blog More
  .title.mb-3 Total posts: {{ totalCount }}

  v-list(two-line)
    v-list-tile(v-for="(post, index) in posts" :key="index" @click="onClick(post)")
      v-list-tile-content
        v-list-tile-title {{ post.node.title }}
        v-list-tile-sub-title {{ post.node.date }}

</template>

<page-query>
query Home ($page: Int) {
  allBlogPost (page: $page) {
    totalCount
    edges {
      node {
        _id
        id
        title
        fields {
          description
        }
        path
        slug
        date (format: "D MMMM, YYYY")
      }
    }
  }
  allProjectInfo (page: $page) {
    edges {
      node {
        _id
        title
        date (format: "D MMMM, YYYY")
        fields {
          description
        }
        path
      }
    }
  }
}
</page-query>


<script>
export default {
  data () {
    return {
    //  imgUrl: require('@/favicon.png')
    }
  },
  computed: {
    posts () {
      return this.$page.allBlogPost.edges
    },
    totalCount () {
      return this.$page.allBlogPost.totalCount
    }
  },
  methods: {
    onClick (post) {
      this.$router.push({ path: post.node.path })
    }
  }
}
</script>