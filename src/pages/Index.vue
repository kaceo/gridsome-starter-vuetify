<template lang="pug">
layout
  // Learn how to use images here: https://gridsome.org/docs/images
  g-image(alt='Example image', src='~/favicon.png', width='135')
  h1 Hello, world!
  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
  p.home-links
    a(href='https://gridsome.org/docs', target='_blank') Gridsome Docs
    a(href='https://github.com/gridsome/gridsome', target='_blank') GitHub
  p Count is {{ count }}
</template>

<script>
export default {
 // ..
 data() {
   return {
     count: 'Account'
   }
 }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
