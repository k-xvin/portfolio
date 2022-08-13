<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>
<script>
 // https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>