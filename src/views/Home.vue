<template>
  <div class="Home">
    <MainVisual />
    <div class="Contents">
      <section class="max-w-screen-xl mx-auto mt-10">
        <div class="text-center">
          <h2 class="TitleLv2">About</h2>
        </div>
        <p class="text-base mt-8">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
        <div class="mt-6 flex justify-center">
          <router-link to="/about" class="Btn">About</router-link>
        </div>
      </section>
      <section class="max-w-screen-xl mx-auto mt-16">
        <div class="text-center">
          <h2 class="TitleLv2">Article</h2>
        </div>
        <p class="text-base mt-8">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
        <div class="mt-6 flex justify-center">
          <router-link to="/article" class="Btn">Article</router-link>
        </div>
      </section>


    </div>
    <Footer></Footer>
  </div>
  
</template>

<script>
// // @ is an alias to /src
import MainVisual from "@/components/top/MainVisual.vue";
import Footer from '@/components/common/Footer.vue'


export default {
  name: "Home",
  components: {
    MainVisual,
    Footer
  },
};
</script>
