<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const modules = ref([Navigation]);
const products = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<template>
  <section class="container py-20">
    <div class="text-center mb-20">
      <img src="/images/banners/dots.png" alt="dots" class="mb-6 mx-auto" />
      <h2 class="text-dark-blue text-4xl font-bold mb-4">
        Your Success, Our Inspiration
      </h2>
      <p class="max-w-[600px] text-xl text-gray-400 leading-[170%] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
    </div>

    <swiper
      :slidesPerView="3"
      :spaceBetween="25"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, index) in products"
        :key="index + '-caroucel-item'"
      >
        <div class="bg-white p-8 rounded-2xl border text-center">
          <img
            src="/images/banners/user.jpg"
            alt="card-img"
            class="mb-4 mx-auto rounded-full w-[100px]"
          />
          <p class="text-gray-400 leading-[150%] h-[72px] overflow-hidden mb-5">
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
            quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
            elit.
          </p>
          <h3 class="text-dark-blue text-2xl font-semibold mb-4">Sunny Khan</h3>
          <p class="text-lg text-gray-400">One of our Clients</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style>
.product_slider .swiper-pagination {
  width: auto;
  bottom: 15px;
  top: auto;
  display: flex;
  align-items: center;
}
.product_slider .swiper-pagination .swiper-pagination-bullet {
  background-color: #fff;
  width: 12px;
  height: 12px;
  opacity: 1;
  margin-right: 16px;
}
.product_slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #95bef3;
  width: 20px;
  height: 20px;
}
</style>
