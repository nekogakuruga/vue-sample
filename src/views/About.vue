<template>
  <div class="About">
    <h1 class="text-3xl py-8 px-4 bg-gray-400">About</h1>
    <div class="max-w-screen-xl mx-auto mt-10 px-4">
      <div>
        <p class="text-base">このボタンをクリックすると、画像つきのモーダルが開きます。</p>
        <div class="mt-6"><button @click="openModal(item,0)" class="Btn">モーダルを開く</button></div>
      </div>
      <div class="mt-8">
        <p class="text-base">このボタンをクリックすると、テキストだけのモーダルが開きます。</p>
        <div class="mt-6"><button @click="openModal(item,1)" class="Btn">モーダルを開く</button></div>
      </div>
    </div>
    <Modal :modalData="modalItem" v-show="showFlag" @close="closeModal()"/>
    <Footer></Footer>
  </div>
</template>
<script>
  import Modal from '@/components/about/Modal.vue'
  import Footer from '@/components/common/Footer.vue'

  export default {
    name: 'About',
    components: {
      Footer,
      Modal
    },
    data(){
      return {
        showFlag: false,
        modalItem: '',
        item: [
          {
            title: 'イメージつきのモーダル01',
            text: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
            img: 'slide02.jpg'
          },
          {
            title: 'テキストだけのモーダル02',
            text: 'サンプルテキストサンプルテキスト',
            img: ''
          }
        ]
      }
    },
    methods: {
      openModal (item,modalNumber){
        this.showFlag = true;
        this.modalItem = item[modalNumber];
      },
      closeModal(){
        this.showFlag = false;
      },

    }
  }
</script>
