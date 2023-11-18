<template>
  <div class="container">
    <v-row>
      <v-col cols="6">
        <ProductImage :images="product.image"/>
      </v-col>
      <v-col cols="6">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <h3>{{ product.price }}</h3>
        <v-text-field
          type="number"
          v-model="quantity"
          label="Cantidad"
          outlined
        />
        <v-btn color="primary" @click="addToCart">Agregar al carrito</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import ProductImage from './ProductImage.vue';

const props = defineProps(['product'])
const quantity = ref(1)
function addToCart() {
  console.log('Agregado al carrito')
}
</script>
<style lang="scss" scoped>
</style>