<template>
  <div class="w-100">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows="hover"
      color="white"
    >
      <v-carousel-item
        v-for="(slide) in slides"
        :key="slide.id"
        :src="slide.imgUrl"
        cover
      />
    </v-carousel>

    <div class="px-sm-6 py-16">
      <div class="d-md-flex justify-sm-center">
        <div v-for="n in 3" :key="n" class="px-2">
          <CategoryCard
            title="Categoría de productos"
            subtitle="Productos de la categoría"
            image="https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png"
          />
        </div>
      </div>
      <div class="mb-16" v-for="sliderSection in sections" :key="sliderSection.id">
        <p class="text-h4 mt-16 mb-8">{{ sliderSection.title }}</p>
        <v-sheet
          class="mx-auto"
          elevation="8"
        >
          <v-slide-group
            v-model="model"
            class="py-4"
            center-active
          >
            <v-slide-group-item
              v-for="product in products"
              :key="product.srcImg"
            >
              <ProductCard
                :product="product"
              />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>
<script setup>
  import CategoryCard from "~/pages/home/components/CategoryCard.vue";
  const slides = ref([
    {
      id: 1,
      imgUrl: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1699842080589-home-mainslider-desktop-4.png'
    },
    {
      id: 2,
      imgUrl: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1699843834866-home-mainslider-desktop-v2.png'
    },
    {
      id: 3,
      imgUrl: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1699842531477-homesliderdesktop.png'
    },
    {
      id: 4,
      imgUrl: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1699842208097-mainsliderdektoptecnodeals.png'
    },
  ])
  const products = ref([
    {
      id: 1,
      srcImg: 'https://cdn.pixabay.com/photo/2017/02/15/11/42/t-shirt-2068353_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
    {
      id: 2,
      srcImg: 'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
    {
      id: 3,
      srcImg: 'https://cdn.pixabay.com/photo/2019/06/18/06/05/chair-4281517_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
    {
      id: 4,
      srcImg: 'https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281511_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
    {
      id: 5,
      srcImg: 'https://cdn.pixabay.com/photo/2019/06/18/06/05/chair-4281517_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
    {
      id: 6,
      srcImg: 'https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281512_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
    {
      id: 7,
      srcImg: 'https://cdn.pixabay.com/photo/2017/02/15/11/42/t-shirt-2068353_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
    {
      id: 8,
      srcImg: 'https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281512_1280.png',
      title: 'Zapatillas Nike',
      discount: '40',
      price: '200'
    },
  ])
  const sections = ref([
    {
      id: 1,
      title: 'Destacados'
    },
    {
      id: 2,
      title: 'Tecnólogia'
    },
    {
      id: 3,
      title: 'Electrodomesticos'
    },
    {
      id: 4,
      title: 'Indumentaria'
    },
  ])
</script>
<style lang="scss" scoped>
.home_img-slider {
  object-position: center;
  object-fit: cover;
}
</style>