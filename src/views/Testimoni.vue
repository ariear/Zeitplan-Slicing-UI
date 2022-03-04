<template>
  <div class="bg-[#fe5d442a] pb-28" id="testimoni">

    <div class="text-center w-[93vw] md:w-[567px] mx-auto py-20">
        <p class="font-patuh text-3xl md:text-4xl text-[#0E144A]">Apa kata umat manusia tentang aplikasi keren ini?</p>
        <p class="font-sourcesans font-normal text-base md:text-lg text-[#0E144A] opacity-60 mt-5">Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini semuanya asli tanpa reksadana.</p>
    </div>

    <div class="w-max mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center">

        <div v-for="(testimoni , index) in cardTestimoni" :key="index" class="w-[93vw] md:w-[270px] lg:w-[370px] bg-white p-7 rounded-md h-max">
            <img :src="testimoni.star" alt="">
            <p class="my-6" v-text="testimoni.comment"></p>
            <div class="flex items-center">
                <img :src="testimoni.pp" alt="">
                <div class="ml-5">
                    <p class="font-pupylinux font-medium text-base" v-text="testimoni.name"></p>
                    <p class="font-pupylinux font-medium text-xs text-[#0e144aa6]" v-text="testimoni.title"></p>
                </div>
            </div>
        </div>

    </div>

  </div>

</template>

<script>
export default {
    data() {
        return {
            cardTestimoni: [
                {
                    star: '/img/five-star.png',
                    comment: '“Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉”',
                    pp: '/img/pp/profil.png',
                    name: 'Sanusi Sulivan',
                    title: 'Dosen di Boating School Ny. Puff'
                },
                {
                    star: '/img/star.png',
                    comment: '“Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.”',
                    pp: '/img/pp/profil1.png',
                    name: 'Wahyu Hayuk',
                    title: 'Mahasiswa Abadi'
                },
                {
                    star: '/img/five-star.png',
                    comment: '“Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!”',
                    pp: '/img/pp/profil2.png',
                    name: 'Ibu Scarlet Darkening',
                    title: 'Ibunya Wahyu Hayuk'
                },
                {
                    star: '/img/three-star.png',
                    comment: '“Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”',
                    pp: '/img/pp/profil3.png',
                    name: 'Indah Cyank Dya Clmax',
                    title: 'Works at Looking For True Love, Inc'
                },
                {
                    star: '/img/star.png',
                    comment: '“Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... 😀😀😀😀😀”',
                    pp: '/img/pp/profil4.png',
                    name: 'Jumadi RT. 03',
                    title: 'Ketua RT. 06'
                },
                {
                    star: '/img/five-star.png',
                    comment: '“aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.”',
                    pp: '/img/pp/profil5.png',
                    name: 'Cucunya Megalodon',
                    title: 'Pecinta Kucing Hungaria'
                }
            ]
        }
    },
}
</script>