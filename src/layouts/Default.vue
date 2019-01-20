<template lang="pug">
v-app
  v-toolbar
    v-toolbar-title {{ $static.metaData.siteName }}
    v-spacer
    v-toolbar-items
      v-btn(flat exact :to="{ name: 'home' }") Home
      v-btn(v-for="m in menu"
        :key="m.title"
        flat
        :to="{ name: m.nameroute }"
          ) {{ m.title }}
  v-container
    slot

  v-footer
    hr
    p {{ sidebar }} is sidebar,
    p(v-if="showsidebar") Show Sidebar {{ showsidebar }}
</template>



<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<script>
/*

*/
export default {
  props: ['sidebar'],
  computed: {
    showsidebar: function() {
      if (this.sidebar==false) {return false}
      return true
    }
  },
  data() {
    return {
      count: 10,
      menu: [
        //{ title: 'Home', nameroute: 'home' },
        { title: 'About', nameroute: 'about' },
        { title: 'Contact', nameroute: 'contact' },
        { title: 'Projects', nameroute: 'projects' }
      ]
    }
  }
}
</script>


