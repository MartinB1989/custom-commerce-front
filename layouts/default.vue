<template>
  <div>
    <v-app>
      <v-app-bar :elevation="2" color="primary" class="default_app-bar">
        <NuxtLink to="/">
          <NuxtImg src="/mercado-libre-logo-600x400.png" width="200"/>
        </NuxtLink>
        <div class="search-container pl-16">
          <v-text-field
            density="compact"
            variant="solo"
            label="Buscar"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          />
        </div>
        <template v-slot:append>
          <NuxtLink to="/shopping-cart">
            <v-badge content="4" color="optional_red" class="pr-16">
              <v-icon icon="mdi-cart-variant" color="white" size="30"/>
            </v-badge>
          </NuxtLink>
        </template>
      </v-app-bar>
      <div class="max-width">
        <slot />
      </div>
      <DefaultFooter />
    </v-app>
  </div>
</template>

<style lang="scss" scoped>
.default_app-bar {
  position: relative !important;
}
.search-container {
  width: 500px;
}
.max-width {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
}
</style>