<template>
  <div class="ArticleContents">
    <div class="max-w-screen-xl mx-auto mt-10 px-4">
    <div class="mt-8">
      <img :src='require("@/assets/img/article/" + article_json[articleId].thumbnail)' alt="">
    </div>
    <h1 class="text-3xl mt-8">{{article_json[articleId].title}}</h1>
      <section v-for="(data,index) in article_json[articleId].head" :key="data" class="mt-12">
        <h2 class="text-2xl font-bold border-b-4 border-solid border-blue-700">{{article_json[articleId].head[index]}}</h2>
        <p class="mt-6">{{article_json[articleId].contents[index]}}</p>
      </section>
    </div>
    <Footer></Footer>

  </div>

</template>

<script>
import article_json from '@/assets/json/article.json'
import Footer from '@/components/common/Footer.vue'


export default {
  name: 'ArticleContents',
  components: {
    Footer
  },  
  props: {
    id: {
      type: String,
      default: '',
      required: true
    }
  },
  data(){
    return {
      articleId: Number(this.id) - 1,
      article_json : article_json,
      article_times : article_json.head
    }
  },
  computed: {

  }
}
</script>