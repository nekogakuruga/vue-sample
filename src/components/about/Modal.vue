<template>
  <div class="Modal">

    <div class="fixed bg-black bg-opacity-60 w-full h-full inset-0" >
      <div class="absolute w-full h-full inset-0 p-6" @click.self="$emit('close')">
        <div class="w-full mx-auto max-w-screen-sm bg-white">
          <div class="w-full mx-auto max-w-screen-sm bg-white absolute transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 max-h-screen rounded-md p-4">
            <p class="text-2xl pt-4 pb-2 border-b-2 border-gray-700 border-solid">{{modalData.title}}</p>
            <div class="max-h-80p min-h-200">
              <p class="text-base">{{modalData.text}}</p>
              <div class="mt-3" v-if="modalImg">
                <img :src='require("@/assets/img/common/" + modalData.img)' alt="">
              </div>
            </div>
            <div class="mt-6 flex">
              <button class="Btn" @click.self="$emit('close')">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalData: {
      type: String,
      default: "",
      require: true
    }
  },
  data() {
    return {
      modalImg: false
    }
  },
  watch: {
    modalData: function(){
      return this.modalImg = this.modalData.img.length ? true : false
    }
  }

}
</script>