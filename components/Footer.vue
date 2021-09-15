<template>
  <footer>
      <div class="column-box">
        <div class="column">
            <div class="logo-box">
                <img src='~/assets/img/logo-footer.svg' />
            </div>
            <div class="text">
                Email us:<span>{{}}</span>
            </div>
            <div class="text">
                Phone:<span>{{}}</span>
            </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div class="last-section">
            <div class="terms">
              <NuxtLink to="/terms">Terms of Service</NuxtLink>
            </div>
          <p>Copyright © {{year}}. All rights reserved.</p>
      </div>
    <img class="bg-img" src='~/assets/img/layout-bg.png' alt="bg-img" />
  </footer>
</template>

<script>
export default {
    data() {
        return{
            year: ""
        }
    },
    mounted() {
        const date = new Date();
        this.year = date.toLocaleDateString('en', {year: 'numeric'})
    }
}
</script>

<style scoped>
footer {
    background-color: var(--color-blue-dark);
    padding: 80px 95px 45px;
    position: relative;
    bottom: 0;
    margin: 0 auto;
    color: var(--color-white);
    font-family: Verdana, sans-serif;
}
.column-box {
    display: flex;
    align-items: center;
    margin-bottom: 87px;
}
.column {
    width: 33.33%;
}
.logo-box {
    margin: 0 0 -25px -25px;
}
.logo-box img {
    object-fit: cover;
}
.last-section {
    margin: 45px 0;
    text-align: center;
}
.terms {
    margin-bottom: 13px;
}
.terms a {
    color: var(--color-white);
}
p {
    color: var(--color-white);
    line-height: 26px;
    font-size: var(--text-16);
}
.text {
    font-family: Verdana, sans-serif;
    font-size: var(--text-16);
    margin-bottom: 8px;
}
.text span {
    margin-left: 5px;
    color: var(--color-pink-light);
}
.bg-img {
  position: absolute;
  right: 0;
  bottom: 80px;
}

@media (max-width:1024px) {
    footer {
        padding: 70px 5% 45px;
    }
}

@media (max-width:768px) {
    footer {
        padding: 40px 15px;
    }
}

</style>
