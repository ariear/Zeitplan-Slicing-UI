<template>
  <div class="container mx-auto mt-24 mb-36 flex justify-between items-center flex-col lg:flex-row">

      <div class="w-[370px]">
          <p class="font-patuh text-3xl md:text-4xl">Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</p>
          <p class="font-sourcesans font-normal text-base md:text-lg text-[#0e144a94] mt-5">
              Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.
          </p>

          <div class="flex mt-12">
              <div class="pr-6">
                  <p class="font-inter font-normal text-xs text-[#0e144a94]">TOTAL DON’TLOUD</p>
                  <p class="font-inter font-semibold text-[#0C1B4D]">1,501,234</p>
              </div>
              <div class="pl-6 border-l-2">
                  <p class="font-inter font-normal text-xs text-[#0e144a94]">TOTAL USERS</p>
                  <p class="font-inter font-semibold text-[#0C1B4D]">1,696,696</p>
              </div>
          </div>

      </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-7 lg:mt-0 mt-20">

        <div class="w-[320px] bg-[#fe5d441c] p-9 rounded-md">
            <div class="flex items-center">
                <img src="/img/database.png" alt="">
                <p class="font-sourcesans font-semibold text-lg ml-5">Aplikasi Gratis</p>
            </div>

            <p class="font-sourcesans font-normal text-base mt-5">
                Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.
            </p>
        </div>

        <div class="w-[320px] bg-[#fe5d441c] p-9 rounded-md">
            <div class="flex items-center">
                <img src="/img/no-internet.png" alt="">
                <p class="font-sourcesans font-semibold text-lg ml-5">Kode OTP Error</p>
            </div>

            <p class="font-sourcesans font-normal text-base mt-5">
                Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.
            </p>
        </div>

        <div class="w-[320px] bg-[#fe5d441c] p-9 rounded-md">
            <div class="flex items-center">
                <img src="/img/user.png" alt="">
                <p class="font-sourcesans font-semibold text-lg ml-5">Data Tidack Aman</p>
            </div>

            <p class="font-sourcesans font-normal text-base mt-5">
                Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.
            </p>
        </div>

        <div class="w-[320px] bg-[#fe5d441c] p-9 rounded-md">
            <div class="flex items-center">
                <img src="/img/code.png" alt="">
                <p class="font-sourcesans font-semibold text-lg ml-5">Biasanya Error</p>
            </div>

            <p class="font-sourcesans font-normal text-base mt-5">
               Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~
            </p>
        </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>