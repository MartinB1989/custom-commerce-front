<template>
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
</template>
<script setup>
import ProductCardVue from "~/components/ProductCard.vue"

const props = defineProps(["products"])
const model = ref(null)
</script>