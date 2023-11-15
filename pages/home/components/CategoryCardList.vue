<template>
  <div class="d-md-flex justify-sm-center">
    <div v-for="category in categories" :key="category.id" class="px-2">
      <CategoryCard
        :title="category.title"
        :subtitle="category.subtitle"
        :image="category.imgUrl"
      />
    </div>
  </div>
</template>
<script setup>
import CategoryCard from "./CategoryCard.vue"

const props = defineProps(["categories"])
</script>