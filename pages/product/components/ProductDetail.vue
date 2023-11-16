<template>
  <div class="container">
    <v-row>
      <v-col cols="6">
        <v-img :src="product.image" alt="Imagen del producto" />
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

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      // Aquí puedes enviar la información del producto al carrito de compras
    },
  },
};
</script>
