<template>
  <div class="Article">
    <h1 class="text-3xl py-8 px-4 bg-gray-400">Article</h1>
    <div class="max-w-screen-xl mx-auto mt-10 px-4">
      <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-4 gap-4">
        <div v-for="(data, key) in article_data" :key="key" class="border border-gray-700 border-solid rounded-md">
          <router-link :to="`/article/data${data.id}`" class="p-3 block">
            <div><img :src='require("@/assets/img/article/" + data.thumbnail)' alt=""></div>
            <p class="text-base mt-3">{{data.title}}</p>
          </router-link>
        </div>
      </div>

      
    </div>
    <Footer></Footer>

  </div>

</template>

<script>
  import article_json from '@/assets/json/article.json'
  import Footer from '@/components/common/Footer.vue'

  export default {
    name: 'Article',
    components: {
      Footer
    },
    data(){
      return {
        article_data: article_json
      }
    }
  }

</script>