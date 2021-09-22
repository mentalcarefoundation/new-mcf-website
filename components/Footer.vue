<template>
  <footer>
      <div class="column-box">
        <div class="column">
            <div class="logo-box">
                <img src='~/assets/img/logo-footer.svg' />
            </div>
            <div class="text">
                Email us:<span>{{result.email}}</span>
            </div>
            <div class="text">
                Phone:<span>{{result.phone}}</span>
            </div>
        </div>
        <div class="column col-2">
            <div class="footer-links">
                <NuxtLink to="/about" class="footer-link">About Us</NuxtLink>
                <NuxtLink :to="{ path: '/about',hash:'#vision'}" class="footer-link">Our Vision</NuxtLink>
                <NuxtLink :to="{ path: '/about',hash:'#mission'}" class="footer-link">Our Mission</NuxtLink>
                <NuxtLink :to="{ path: '/about',hash:'#team'}" class="footer-link">Meet The Team</NuxtLink>
            </div>
        </div>
        <div class="column socials col-2">
            <div class="social-group">
                <div class="icon">
                    <img src="~/assets/img/twitter.svg"/>
                </div>
                <p>Twitter: {{result.twitter}}</p>
            </div>
            <div class="social-group">
                <div class="icon">
                    <img src="~/assets/img/facebook.svg"/>
                </div>
                <p>Facebook: {{result.facebook}}</p>
            </div>
            <div class="social-group">
                <div class="icon">
                    <img src="~/assets/img/instagram.svg"/>
                </div>
                <p>Instagram: {{result.instagram}}</p>
            </div>
            <div class="social-group">
                <div class="icon">
                    <img src="~/assets/img/linkedin.svg"/>
                </div>
                <p>LinkedIn: {{result.linkedin}}</p>
            </div>
        </div>
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
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
    data() {
        return{
            year: "",
            result: {}
        }
    },
    async fetch () {
        this.result = await client.getEntry(process.env.CTF_FOOTER)
        .then(entry => entry.fields)
    },
    mounted() {
        const date = new Date();
        this.year = date.toLocaleDateString('en', {year: 'numeric'})
        
    },
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
a {
    color: var(--color-white);
    font-family: Verdana, sans-serif;
    width: fit-content;
}
a:hover {
    color: var(--color-pink-light);
}
.column-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 87px;
}
.col-2 {
    margin-top: 50px;
}
.logo-box {
    margin: 0 0 -25px -25px;
}
.logo-box img {
    object-fit: cover;
}
.footer-links, .socials {
    display: flex;
    flex-direction: column;
}
.footer-link {
    margin-bottom: 16px;
}
.social-group {
    display: flex;
    margin-bottom: 16px;
}
.icon {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    border: 1px solid transparent;
    border-radius: 50%;
}
.last-section {
    margin: 45px 0;
    text-align: center;
}
.terms {
    margin-bottom: 13px;
}
p {
    color: var(--color-white);
    font-size: var(--text-16);
    font-family: Verdana, sans-serif;
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
  z-index: 1;
}

@media (max-width:1024px) {
    footer {
        padding: 70px 5% 45px;
    }
    .logo-box {
        width: 80%;
    }
}

@media (max-width:840px) {
    footer {
        padding: 40px 30px;
    }
    .logo-box {
        margin:0 0 -20px -20px;
        max-width: 30%;
    }
    .column-box {
        display: block;
    }
    .column {
        width: 100%;
    }
    .last-section {
        text-align: left;
    }
    .bg-img {
        display: none;
    }
}

</style>
