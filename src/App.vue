<template>
  <Navbar />
  <Home />
  <Kneaf />
  <Jadwal />
  <Price />
  <Testimoni />
  <Promosi />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from './views/Home.vue';
import Kneaf from "./views/Kneaf.vue";
import Jadwal from './views/Jadwal.vue'
import Price from "./views/Price.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";
import { EffectCards } from "swiper";
import Testimoni from "./views/Testimoni.vue";
import Promosi from "./views/Promosi.vue";
import Footer from "./views/Footer.vue";

export default {
    components: { Navbar, Home, Swiper, SwiperSlide, Kneaf, Jadwal, Price, Testimoni, Promosi, Footer },
    setup() {
    return {
      modules: [EffectCards],
    }      
    }
}
</script>
