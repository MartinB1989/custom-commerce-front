<template>
  <v-card
    class="mx-auto category-card"
    max-width="375px"
    height="270px"
  >
    <v-row
      justify="space-between"
      align="center"
      class="pa-0 ma-0 w-100 h-100"
    >
      <v-col class="d-flex flex-column justify-space-between h-100">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
        </div>
        <v-btn color="primary" @click="onSeeProducts">Ver productos</v-btn>
      </v-col>
      <v-col class="h-100 d-flex justify-center">
        <img
          :src="image"
          max-width="100%"
          max-height="100%"
          class="category-card_img"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    onSeeProducts() {
      // Acción al hacer click en el botón
    },
  },
};
</script>
<style lang="scss" scoped>
.category-card:hover {
  transform: scale(1.05);
  transition: transform 0.5s ease-in-out;
}
.category-card_img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>