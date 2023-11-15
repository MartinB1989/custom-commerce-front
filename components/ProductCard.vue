<template>
  <div>
    <NuxtLink :to="`/product/${product.id}`" class="text-decoration-none">
      <v-card class="product-card pa-sm-2">
        <div class="product-card_image-container">
          <img :src="product.srcImg" class="product-card_image"/>
        </div>
        <v-card-title>
          {{ product.title }}
        </v-card-title>
        <v-card-subtitle class="product-card_price d-flex justify-space-between">
          ${{ product.price }}
          <v-chip color="success" text-color="white" v-if="product.discount">
            <span class="product-card_discount-text">
              - {{ product.discount }}
            </span>
            <v-icon right>mdi-percent</v-icon>
          </v-chip>
        </v-card-subtitle>
        <div class="d-flex justify-center">
        <!-- <v-card-actions> -->
          <v-btn color="secondary" class="mt-8" append-icon="mdi-cart-variant">Add to cart</v-btn>
        <!-- </v-card-actions> -->
        </div>
      </v-card>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>

  .product-card {
    width: 300px;
    @media screen and (min-width: 600px) {
      width: 300px;
    }
  }
  .product-card_image-container {
    width: 100%;
    height: 260px;
    .product-card_image {
      object-position: center;
      object-fit: contain;
      // @media screen and (min-width: 600px) {
        width: 100%;
        height: 100%;
      // }
    }
  }
  .product-card_price{
    font-size: 24px;
    font-weight: 600;
  }
  .product-card_discount-text {
    font-size: 20px;
    font-weight: 600;
  }
</style>