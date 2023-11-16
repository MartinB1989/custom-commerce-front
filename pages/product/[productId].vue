<template>
  <ProductDetail :product="product" />
</template>
<script setup>
  import ProductDetail from "./components/ProductDetail.vue"

  const route = useRoute()
  const product = ref({
    image: 'https://images.tiendamia.com/materiales/general/2023/argentina/cat_home/ar_categorias_home_camara_187x270.png',
    name: 'Nombre corto del producto',
    description: 'Esta es una descripción mas larga del producto',
    price: '$2.000'
  })
</script>