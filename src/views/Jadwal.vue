<template>
<div class="container mx-auto flex justify-center mb-20">
  <img src="/img/jadwal-img.png" class="mr-6 w-[340px] object-cover object-center lg:block hidden xl:w-[540px]">

    <div class="w-[555px] ml-6">
        <p class="font-patuh text-2xl md:text-4xl text-[#0E144A] md:pr-0 pr-9">
            {{ titleFiture }}
        </p>
        <p class="font-sourcesans font-normal text-base md:text-lg text-[#0e144a9c] mt-5 md:pr-0 pr-9">
            {{ basabasifiture }}
        </p>

        <div class="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-12 mt-11">

            <div class="w-[145px] md:w-[260px]">
                <img src="/img/cloud-off.png" alt="">
                <p class="font-patuh text-base md:text-lg text-[#0E144A] my-2">Tidak Tersimpan Otomatis</p>
                <p class="font-sourcesans font-normal text-base text-[#0e144ab4]">Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.</p>
            </div>
            <div class="w-[145px] md:w-[260px]">
                <img src="/img/video.png" alt="">
                <p class="font-patuh text-base md:text-lg text-[#0E144A] my-2">Tidak Tersimpan Otomatis</p>
                <p class="font-sourcesans font-normal text-base text-[#0e144ab4]">Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.</p>
            </div>
            <div class="w-[145px] md:w-[260px]">
                <img src="/img/sampah.png" alt="">
                <p class="font-patuh text-base md:text-lg text-[#0E144A] my-2">Tidak Tersimpan Otomatis</p>
                <p class="font-sourcesans font-normal text-base text-[#0e144ab4]">Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.</p>
            </div>
            <div class="w-[145px] md:w-[260px]">
                <img src="/img/bell.png" alt="">
                <p class="font-patuh text-base md:text-lg text-[#0E144A] my-2">Tidak Tersimpan Otomatis</p>
                <p class="font-sourcesans font-normal text-base text-[#0e144ab4]">Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.</p>
            </div>
            
        </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            titleFiture: 'Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~',
            basabasifiture: 'Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!'
        }
    },
}
</script>