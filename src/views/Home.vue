<template>
<div class="bg-[#FFF4F2]">
  <div class="flex flex-col lg:flex-row items-center justify-between container mx-auto pb-11 pt-40 md:overflow-visible overflow-hidden">

      <div class="w-[96vw] md:w-[500px] md:pl-0 pl-2">
          <p class="font-patuh text-4xl md:text-5xl sm:text-center lg:text-left">
              Sebuah cara mudah mengatur jadwal kuliah kamu
          </p>
          <p class="font-sourcesans font-normal text-lg text-[#6F6F6F] mt-6 sm:text-center lg:text-left">
              Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~
          </p>

          <div class="mt-10 mb-20">
          <button class="py-3 px-7 md:px-10 text-white bg-[#FE5E44] rounded-md font-sourcesans font-semibold">Learn More</button>
          <button class="py-3 px-7 md:px-10 text-[#FE5E44] bg-[#fcd5ce81] rounded-md font-sourcesans font-semibold border border-[#ff745f49] ml-4">Play Demo</button>
          </div>

            <!-- slider -->
              <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="rounded-md">
          <div class="w-[90vw] md:w-[465px] rounded-md bg-white py-6 px-7 shadow-md">
              <img src="/img/star.png" alt="">
              <p class="font-pupylinux font-normal text-sm my-4">
                  “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”
              </p>

              <div class="flex flex-wrap justify-evenly items-center">
                  <img src="/img/pptesti.png" alt="">
                  <div class="font-pupylinux font-medium md:ml-0 ml-2">
                      <p class="">P-Star 7</p>
                      <p class="text-xs text-[#0e144a8e]">Mahasiswa Boating School Ny. Puff</p>
                  </div>

                  <div class="flex items-center">
                      <img src="/img/arrow-orange-left.png" >
                      <img src="/img/arrow-orange-right.png" class="ml-3" >
                  </div>
              </div>
          </div>
    </swiper-slide>
    <swiper-slide class="rounded-md">
          <div class="w-[90vw] md:w-[465px] rounded-md bg-white py-6 px-7 shadow-md">
              <img src="/img/star.png" alt="">
              <p class="font-pupylinux font-normal text-sm my-4">
                  “Game nya jelekkkkkkk !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! tapi boong hayyuuu”
              </p>

              <div class="flex flex-wrap justify-evenly items-center">
                  <img src="/img/pptesti.png" alt="">
                  <div class="font-pupylinux font-medium md:ml-0 ml-2">
                      <p class="">P-Star 7</p>
                      <p class="text-xs text-[#0e144a8e]">Mahasiswa Boating School Ny. Puff</p>
                  </div>

                  <div class="flex items-center">
                      <img src="/img/arrow-orange-left.png" >
                      <img src="/img/arrow-orange-right.png" class="ml-3" >
                  </div>
              </div>
          </div>
    </swiper-slide>
    <swiper-slide class="rounded-md">
          <div class="w-[90vw] md:w-[465px] rounded-md bg-white py-6 px-7 shadow-md">
              <img src="/img/star.png" alt="">
              <p class="font-pupylinux font-normal text-sm my-4">
                  “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”
              </p>

              <div class="flex flex-wrap justify-evenly items-center">
                  <img src="/img/pptesti.png" alt="">
                  <div class="font-pupylinux font-medium md:ml-0 ml-2">
                      <p class="">P-Star 7</p>
                      <p class="text-xs text-[#0e144a8e]">Mahasiswa Boating School Ny. Puff</p>
                  </div>

                  <div class="flex items-center">
                      <img src="/img/arrow-orange-left.png" >
                      <img src="/img/arrow-orange-right.png" class="ml-3" >
                  </div>
              </div>
          </div>
    </swiper-slide>
  </swiper>
         
      </div>

    <div class="md:block md:mt-9 lg:mt-0 hidden">
        <img src="/img/mobile-asset.png" alt="" width="600">
    </div>

  </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import "../style.css";
import { EffectCards } from "swiper";

export default {
    components: { Swiper , SwiperSlide },
    setup() {
    return {
      modules: [EffectCards],
    }      
    }
}
</script>