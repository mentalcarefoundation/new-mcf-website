<template>
  <div class="page">
      <Header />
      <div class="wrapper">
        <Nuxt />
      </div>
      <Footer />
  </div>
</template>

<style>
.page {
  background-color: var(--color-white);
  max-width: 1440px;
  margin: 0 auto;
}
.wrapper {
  margin: 0 95px;
}
@media (max-width:768px) {
  .wrapper {
    margin: 0 15px;
  }
}
</style>