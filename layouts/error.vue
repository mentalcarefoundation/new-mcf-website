<template>
  <div class="page">
    <div class=" centre wrapper">
      <div>
        <img src="~/assets/img/404.svg" style="max-width: 20%" />
      </div>
      <p class="description">
        <strong>OOPS!</strong> Looks like the page you're looking for doesn't exist.
      </p>
      <btn>
          <NuxtLink to="/">Go to home</NuxtLink>
      </btn>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/Button.vue'

export default {
  components: {
    Btn
  } 
}
</script>

<style scoped>
.centre {
    text-align: center;
    z-index: 10;
}
p {
    font-family: Verdana, sans-serif;
}
button {
    margin: 20px auto 0;
    z-index: 10;
}
</style>
