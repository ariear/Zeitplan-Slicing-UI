<template>
  <nav class="transition-all anjime w-[94vw] md:container z-30 mx-auto flex justify-between items-center py-4 md:py-5 px-6 md:px-14 rounded-md bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] md:shadow-[0_7px_50px_rgba(0,0,0,0.1)] fixed navposisi">
      <div class="flex items-center">
          <img src="/img/logo.png" alt="">
          <p class="font-pupylinux font-semibold ml-4 text-lg md:block hidden">ZEITPLAN</p>
      </div>

      <div class="md:flex hidden font-sourcesans font-normal items-center">
          <p class="mr-8 text-[#FE5E44] font-semibold"><a href="#home">Home</a></p>
          <p class="mr-8"><a href="#fitur">Fitur-Fitur</a></p>
          <p class="mr-8"><a href="#price">Harga</a></p>
          <p class="mr-8"><a href="#testimoni">Testimoni</a></p>
          
          <button class="bg-[#FE5E44] font-semibold flex items-center text-white py-2 px-4 rounded-md">Download <img src="/img/arrow-white.png" ></button>
      </div>

    <!-- mobile View-->
      <div class="md:hidden block" @click="menumobile = true">
          <img src="/img/menu-orange.png" width="37" alt="">
      </div>
      <div class="fixed top-0 left-0 w-screen h-screen bg-[#00000059] md:hidden" @click="menumobile = false" :class="menumobile ? 'block' : 'hidden'"></div>
      <div class="fixed md:hidden h-screen top-0 right-0 bg-white transition-all overflow-x-hidden font-sourcesans font-normal flex flex-col justify-center items-center" :class="menumobile ? 'w-[80vw]' : 'w-0' ">
          <p class="mt-3 text-[#FE5E44] font-semibold"><a href="#home">Home</a></p>
          <p class="mt-3"><a href="#fitur">Fitur-Fitur</a></p>
          <p class="mt-3"><a href="#price">Harga</a></p>
          <p class="mt-3"><a href="#testimoni">Testimoni</a></p>
          
          <button class="bg-[#FE5E44] font-semibold flex items-center text-white py-2 px-4 rounded-md mt-6">Download <img src="/img/arrow-white.png" ></button>        
      </div>
      <!-- end mobile view -->      
  </nav>
</template>

<script>
export default {
    data() {
        return {
            menumobile: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            let anjime = document.querySelector('.anjime')
            if (window.scrollY > 0) {
                anjime.classList.remove('navposisi')
                anjime.classList.remove('md:container')
                anjime.classList.add('bawahnavposisi')
                anjime.classList.add('md:w-screen')
                anjime.classList.remove('w-[94vw]')
                anjime.classList.add('w-screen')
            }else{
                anjime.classList.add('navposisi')
                anjime.classList.add('md:container')
                anjime.classList.remove('bawahnavposisi')
                anjime.classList.remove('md:w-screen')
                anjime.classList.add('w-[94vw]')
                anjime.classList.remove('w-screen')
            }
        })
    },
}
</script>

<style>
    .navposisi{
        top: 36px;
        left: 0;
        right: 0;
    }
    .bawahnavposisi{
        top: 0;
    }
</style>