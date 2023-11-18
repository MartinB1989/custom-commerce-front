<template>
  <v-row class="category-card-list ma-0 pa-0 w-100" justify-md="center">
    <v-col v-for="category in categories" :key="category.id" class="px-2" cols="12" md="6" lg="4">
      <CategoryCard
        :title="category.title"
        :subtitle="category.subtitle"
        :image="category.imgUrl"
      />
    </v-col>
  </v-row>
</template>
<script setup>
import CategoryCard from "./CategoryCard.vue"

const props = defineProps(["categories"])
</script>
<style lang="scss" scope>
// .category-card-list {
//   display: flex;
//   justify-content: center;

//   div {
//     width: 1fr;
//   }
// }
</style>