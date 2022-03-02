<template>
  <div class="w-[93vw] md:w-[561px] lg:w-[761px] mx-auto text-center pt-28 pb-36">
      <p class="font-patuh text-4xl text-[#0E144A]" v-text="title"></p>
      <p class="font-sourcesans font-normal text-lg text-[#0e144ab0] my-6" v-text="subtitle"></p>
      <div class="flex justify-center">
          <img src="/img/appstore.png" alt="appstore" class="mr-2">
          <img src="/img/playstore.png" alt="playstore" class="ml-2">
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Download Aplikasi Keren ini Sekarang!',
            subtitle: 'Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.'
        }
    },
}
</script>