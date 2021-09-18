<template>
  <div v-if="loading" class="loading-page">
      <img src="~/assets/img/logo.svg">
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-white);
    text-align: center;
  }
  .loading-page img {
    width: 40%;
    object-fit: cover;
    top: 50%;
    transform: translateY(50%);
  }
</style>