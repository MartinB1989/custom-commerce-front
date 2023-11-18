<template>
  <ProductDetail :product="product" />
</template>
<script setup>
  import ProductDetail from "./components/ProductDetail.vue"

  const product = ref({
    image: [
      'https://images.tiendamia.com/materiales/general/2023/argentina/cat_home/ar_categorias_home_camara_187x270.png',
      'https://cdn.pixabay.com/photo/2017/02/15/11/42/t-shirt-2068353_1280.png',
      'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
      'https://cdn.pixabay.com/photo/2019/06/18/06/05/chair-4281517_1280.png',
      'https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281511_1280.png',
      'https://images.tiendamia.com/materiales/general/2023/argentina/cat_home/ar_categorias_home_camara_187x270.png',
      'https://cdn.pixabay.com/photo/2017/02/15/11/42/t-shirt-2068353_1280.png',
      'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
      'https://cdn.pixabay.com/photo/2019/06/18/06/05/chair-4281517_1280.png',
      'https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281511_1280.png'
    ],
    name: 'Nombre corto del producto',
    description: 'Esta es una descripción mas larga del producto',
    price: '$2.000'
  })
</script>