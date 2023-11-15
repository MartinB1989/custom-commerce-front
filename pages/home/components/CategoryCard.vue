<template>
  <v-card
    class="mx-auto mb-4 category-card"
    width="100%"
    max-width="500px"
  >
    <v-row
      justify="space-between"
      align="center"
      class="pa-0 ma-0 w-100 h-100"
    >
      <v-col cols="12" sm="6" class="d-flex flex-column justify-space-between col-one">
        <div>
          <h2 class="text-center category-card_title text-sm-start">{{ title }}</h2>
          <p class="text-center category-card_subtitle text-sm-start">{{ subtitle }}</p>
        </div>
        <v-btn color="primary" @click="onSeeProducts" class="d-none d-sm-block">Ver productos</v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center col-two">
        <img
          :src="image"
          max-width="100%"
          max-height="100%"
          class="category-card_img"
        />
      </v-col>
      <v-col class="d-sm-none ">
        <v-btn block color="primary" @click="onSeeProducts">Ver productos</v-btn>
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
.category-card {
  height: 400px;
  @media screen and (min-width: 600px) {
    height: 300px;
  }
  .col-one{
    @media screen and (min-width: 600px) {
      height: 100%;
    }
  }
  .col-two{
    height: 200px;
    @media screen and (min-width: 600px) {
      height: 100%;
    }
  }
}
.category-card:hover {
  transform: scale(1.05);
  transition: transform 0.5s ease-in-out;
}
.category-card_img {
  width: 100%;
  object-position: center;
  object-fit: contain;
  @media screen and (min-width: 600px) {
    height: 100%;
    object-fit: cover;
  }
}
.category-card_title {
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 8px;
}
.category-card_subtitle {
  font-size: 24px;
  line-height: 1.2;
}
</style>