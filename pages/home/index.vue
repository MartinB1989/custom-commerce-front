<template>
  <div class="w-100">
    <Header :slides="slides" />
    <div class="px-sm-6 py-16 max-width">
      <CategoryCardList :categories="categoriesTop" />
      <div class="mb-16" v-for="sliderSection in sectionsOne" :key="sliderSection.id">
        <p class="text-h4 mt-16 mb-8">{{ sliderSection.title }}</p>
        <ProductSlide :products="products" />
      </div>
      <CategoryCardList :categories="categoriesMiddle" />
      <div class="mb-16" v-for="sliderSection in sectionsTwo" :key="sliderSection.id">
        <p class="text-h4 mt-16 mb-8">{{ sliderSection.title }}</p>
          <ProductSlide :products="products" />
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
  import CategoryCardList from "./components/CategoryCardList.vue"
  import ProductSlide from "./components/ProductSlide.vue"
  import Header from "./components/CarouselHeader.vue"

  const slides = ref([
    {
      id: 1,
      imgUrl: 'https://http2.mlstatic.com/D_NQ_673284-MLA72879189307_112023-OO.webp'
    },
    {
      id: 2,
      imgUrl: 'https://http2.mlstatic.com/D_NQ_632513-MLA72784134388_112023-OO.webp'
    },
    {
      id: 3,
      imgUrl: 'https://http2.mlstatic.com/D_NQ_846616-MLA72782205048_112023-OO.webp'
    },
    {
      id: 4,
      imgUrl: 'https://http2.mlstatic.com/D_NQ_894025-MLA72803276380_112023-OO.webp'
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
  const sectionsOne = ref([
    {
      id: 1,
      title: 'Destacados'
    },
    {
      id: 2,
      title: 'Tecnólogia'
    },
  ])
  const sectionsTwo = ref([
    {
      id: 3,
      title: 'Electrodomesticos'
    },
    {
      id: 4,
      title: 'Indumentaria'
    },
  ])
  const categoriesTop = ref([
    {
      id: 1,
      title: 'Tecnología Renovada',
      subtitle: '¡Hasta 50% más barato',
      imgUrl: 'https://images.tiendamia.com/materiales/general/2022/argentina/categorias%20home/octubre/ar_cybermonday_categorias-home_renovada_187x270.png'
    },
    {
      id: 2,
      title: 'Productos selecionados',
      subtitle: '',
      imgUrl: 'https://images.tiendamia.com/materiales/general/2023/argentina/cat_home/ar_categorias_home_camara_187x270.png'
    },
    {
      id: 3,
      title: 'Stanley',
      subtitle: 'Hasta 30% Off',
      imgUrl: 'https://images.tiendamia.com/materiales/general/2022/argentina/categorias%20home/octubre/ar-tm-cat-home-stanley.png'
    },
  ])
  const categoriesMiddle = ref([
    {
      id: 1,
      title: 'Relojes',
      subtitle: 'Modelos exclusivos',
      imgUrl: 'https://images.tiendamia.com/materiales/general/2023/argentina/octubre/cat-home/ar_categorias_home_relojes_187x270.png'
    },
    {
      id: 2,
      title: 'Consolas Gaming',
      subtitle: '¡Hasta 40% más barato que en Argentina',
      imgUrl: 'https://images.tiendamia.com/materiales/general/2023/argentina/octubre/cat-home/ar_categorias_home_gaming_187x270.png'
    },
    {
      id: 3,
      title: 'Moda Exclusiva',
      subtitle: 'Las mejores marcas',
      imgUrl: 'https://images.tiendamia.com/materiales/general/2023/uruguay/septiembre/cat-home/uy_categorias_home_adidas_187x270.png'
    },
  ])

</script>
<style lang="scss" scoped>
.max-width {
  margin: 0 auto;
  max-width: 1440px;
}
.home_img-slider {
  object-position: center;
  object-fit: cover;
}
</style>