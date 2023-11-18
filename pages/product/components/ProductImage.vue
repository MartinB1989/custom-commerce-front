<template>
  <div class="w-100 bg-white">
    <div class="product-image_img-container d-flex justify-center align-center">
      <img :src="principalImage" alt="Imagen del producto" class="product-image_img" />
    </div>
      <v-slide-group
        v-model="model"
        class="py-4"
        center-active
        show-arrows
      >
        <v-slide-group-item
          v-for="(productImage, index) in images"
          :key="index"
          v-slot="{ isSelected, toggle }"
        >
          <div :class="['mx-1 pa-2 d-flex justify-center align-center product-image_mini_img_container']" @click="() => onClickImage(productImage, toggle)">
            <img :src="productImage" :class="'product-image_mini-img'"/>
          </div>
        </v-slide-group-item>
      </v-slide-group>
  </div>
</template>

<script setup>
  const props = defineProps(['images'])
  const model = ref(null)
  const principalImage = ref(props.images.length === 0 ? 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : props.images[0])

  function onClickImage(productImage, toggle) {
    principalImage.value = productImage
    toggle()
  }
</script>

<style lang="scss" scoped>
.product-image_img-container {
  width: 100%;
  height: 500px;
  .product-image_img {
    width: 100%;
    height: 100%;
    max-height: 500px;
    max-width: 400px;
    object-position: center;
    object-fit: contain;
  }
}
.product-image_mini_img_container {
  width: 140px;
  height: 140px;
  border: 1px solid #000;
  border-radius: 10px;
  .product-image_mini-img {
    width: 100%;
    padding: 20px;
  }
  .product-image_active {
    border-radius: 20px;
  }
}
</style>