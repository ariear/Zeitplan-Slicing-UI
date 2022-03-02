<template>
<div class="bg-[#fe5d4415] pt-20 pb-20"> 
    <div class="w-[95vw] md:w-[560px] text-center mx-auto pb-16">
        <p class="font-patuh text-3xl md:text-4xl text-[#0E144A] px-4">{{ title }}</p>
        <p class="font-sourcesans font-normal text-base md:text-lg text-[#0e144abd] mt-4 md:px-0 px-4">{{ sentence }}</p>
    </div>

    <div class="w-[95vw] md:w-[700px] lg:w-[1000px] xl:w-[1190px] mx-auto flex flex-wrap justify-evenly">

        <div v-for="(card , index) in cardPrice" :key="index" class="bg-white rounded-md w-[320px] xl:w-[360px] h-max px-6 py-8 lg:mt-0 mt-7">
            <p class="font-ibmplex font-semibold text-sm text-[#FE5E44]">{{ card.title }}</p>
            <p class="font-patuh text-3xl text-[#0C0E2B] mt-4">{{ card.price }}</p>
            <p class="font-sourcesans font-normal text-lg text-[#0e144abd] mt-3">{{ card.keterangan }}</p>

            <div v-for="(bene , index) in card.listbenefit" :key="index" class="flex items-center mt-2">
                <img src="/img/centang.png" >
                <p class="font-sourcesans font-normal text-lg text-[#0C0E2B] ml-3">{{ bene.benefit }}</p>
            </div>

            <button class="font-sourcesans font-semibold text-base bg-[#FE5E44] text-white w-full py-3 rounded-lg mt-5">Download</button>
        </div>

    </div>

    <div class="w-[93vw] md:w-[567px] text-center mx-auto mt-28">
        <p class="font-sourcesans font-normal text-base text-[#0e144a9f]"><span class="font-sourcesans font-bold text-[#0e144abb]">Harap Diingat:</span>Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara mendadak seperti pengumuman PPKM darurat.</p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Main Catur Sambil Bersepeda, beda harga beda fitur',
            sentence: 'Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!',
            cardPrice: [
                {
                    title: 'RINDURATU',
                    price: 'Free',
                    keterangan: 'Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.',
                    listbenefit: [{
                        benefit: 'Jadwal Tak Terbatas'
                    },
                    {
                        benefit: 'Fitur Notifikasi (Kadang Telat)'
                    },
                    {
                        benefit: 'Mode Gelap'
                    },
                    {
                        benefit: 'Bisa Topup Pulsa'
                    },
                    {
                        benefit: 'Bisa Beli Token Listrik'
                    },
                    {
                        benefit: 'Data Lo Dijual'
                    }
                    ]
                },
                {
                    title: 'SULTAN',
                    price: 'Rp 100K',
                    keterangan: 'Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain.',
                    listbenefit: [{
                        benefit: 'Semua Fitur Sebelumnya'
                    },
                    {
                        benefit: 'Diingetin Makan'
                    },
                    {
                        benefit: 'Sleepcall Sampe Bobo'
                    },
                    {
                        benefit: 'Ditemenin Jalan Tiap Minggu'
                    },
                    {
                        benefit: 'Ditemenin Nonton Eksekswan'
                    },
                    {
                        benefit: 'Terhindar Razia Rambut'
                    },
                    {
                        benefit: 'Dapet Izin Biki Ormas'
                    }]
                },
                {
                    title: 'RAFATAR',
                    price: 'Rp 10000K',
                    keterangan: 'Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok.',
                    listbenefit: [{
                        benefit: 'Semua Fitur Sebelumnya'
                    },
                    {
                        benefit: 'Dibayarin Kuliah 4 Semester'
                    },
                    {
                        benefit: 'Dibayarin Cicilan Motor'
                    },
                    {
                        benefit: 'Dicicilin KPR 12 Tahun'
                    },
                    {
                        benefit: 'Magang di NASA Cab. Depok'
                    },
                    {
                        benefit: 'Dapet Skin Alok'
                    },
                    {
                        benefit: 'Nonton Film Gratis di Ganool'
                    },
                    {
                        benefit: 'Naik Haji Bila Mampu'
                    }]
                }
            ]
        }
    },
}
</script>