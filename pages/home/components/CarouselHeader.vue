<template>
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
</template>
<script setup>
  const props = defineProps(["slides"])
</script>