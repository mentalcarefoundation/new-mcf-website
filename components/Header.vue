<template>
  <div class="nav-wrapper">
    <nav>
      <div class="logo-wrapper">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.svg" alt="logo" />
        </NuxtLink>
      </div>
      <ul id="navItems" class="nav-items" :class="{ open: navMobileVisible }">
        <li class="nav-item" >
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        </li>
        <li ref="dropdown" class="nav-item dropdown-wrapper" @click="toggleDropdown">
          Our Solutions
          <div v-show="isDropdownOpen" class="dropdown-container">
            <NuxtLink to="/help" class="option">JO - Helpline</NuxtLink>
            <NuxtLink to="/fitila" class="option">Fitila</NuxtLink>
            <NuxtLink to="/clubs" class="option">Campus Clubs</NuxtLink>
            <NuxtLink to="/events" class="option">Events</NuxtLink>
            <NuxtLink to="/pledges" class="option">Be A Voice</NuxtLink>
            </div>
        </li>
        <div v-show="isDropdownOpen" class="dropdown-container-mobile">
            <NuxtLink to="/help" class="option">JO - Helpline</NuxtLink>
            <NuxtLink to="/fitila" class="option">Fitila</NuxtLink>
            <NuxtLink to="/clubs" class="option">Campus Clubs</NuxtLink>
            <NuxtLink to="/events" class="option">Events</NuxtLink>
            <NuxtLink to="/pledges" class="option">Be A Voice</NuxtLink>
        </div>

        <li class="nav-item">
          <NuxtLink to="/donate" class="nav-link">Donate</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
        </li>
        <li class="nav-item">
          <a href="https://blog.fitila.life/" class="nav-link" target="_blank">Blog</a>
        </li>
      </ul>
      <div
        ref="icon"
        class="hamburger tab-btn"
        :class="{ toggle: navMobileVisible }"
        aria-roledescription="button"
        tabindex="0"
        @click="toggleMenu"
        @keydown="toggleMenu"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMobileVisible: false,
      isDropdownOpen: false
    }
  },
  mounted () {
    document.addEventListener('click', this.closeDropdown)
    document.addEventListener('click', this.closeMenu)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.closeDropdown)
    document.removeEventListener('click',this.closeMenu)
  },
  methods: {
    toggleMenu() {
      this.navMobileVisible = !this.navMobileVisible
    },
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    closeDropdown (e) {
      if (!this.$refs.dropdown.contains(e.target)) {
        this.isDropdownOpen = false
      }
    },
    closeMenu (e) {
      if ((!this.$refs.icon.contains(e.target)) && (!this.$refs.dropdown.contains(e.target))) {
        this.navMobileVisible = false
      }
    }
  }
}
</script>

<style scoped>
.nav-wrapper {
    position: relative;
    margin: 0 auto;
    background-color: var(--color-blue-100);
}
nav {
    padding: 0 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-wrapper {
    display: flex;
    width: 150px;
    height: auto;
    margin-right: 100px;
    margin-left: -15px;
}
.logo-wrapper img {
    max-width: 100%;
    object-fit: cover;
}
.nav-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:0;
}
.nav-item {
    margin: 0 10px;
    transition: all .5s ease;
}
.nav-link {
    font-weight: 700;
    font-size: var(--text-18);
    padding-bottom: 5px;
    transition: all 0.5s ease;
    color: var(--color-black-primary);
}
.nav-link:hover {
    color: var(--color-pink-dark);
}
.dropdown-wrapper {
    position: relative;
    font-weight: 700;
    font-size: var(--text-18);
    font-family: Arial, sans-serif;
    cursor: pointer;
}
.dropdown-wrapper:hover {
    color: var(--color-pink-dark);
}
.dropdown-container {
    z-index: 999;
    padding: 10px 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 35px;
    left: 25px;
    width: 240px;
    background: var(--color-white);
    border: 1px solid transparent;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(6, 52, 111, 0.2);
  }
  .dropdown-container-mobile {
      display: none;
  }
  .option {
    color: var(--color-black-primary);
    font-size: var(--text-16);
    padding: 6px 16px;
    cursor: pointer;
  }
  .option:hover {
      color: var(--color-pink-dark);
  }
.hamburger {
    display:none;
}
.hamburger div {
    width:25px;
    height:3px;
    background-color: var(--color-black-primary);
    margin-bottom: 5px;
    transition: all 0.5s ease;
}
.toggle {
    position: fixed;
    top:31px;
    right: 30px;
}
.toggle .line1 {
    transform-origin: top left;
    transform: rotate(45deg);
    background-color: var(--color-white);
}
.toggle .line2 {
    opacity:0;
}
.toggle .line3 {
    transform-origin: bottom left;
    transform: rotate(-45deg);
    background-color: var(--color-white);
}

@media (max-width:1024px) {
    nav {
      padding: 0 5%;
    }
    .logo-wrapper {
      margin-right: 0;
    }
}

@media (max-width:840px) {
    nav {
      padding: 10px 30px;
    }
    .nav-items {      
        position: fixed;
        top: 0;
        bottom:0;
        right: 0;
        width: 70%;
        padding: 100px 0 50px;
        flex-direction: column;
        align-items: center;
        background-color: var(--color-blue-dark);
        transform: translateX(110%);
        transition: all 1s ease;
        z-index: 99;
    }
    .nav-link, .dropdown-wrapper {
        font-size: var(--text-16);
        color: var(--color-white);
    }
    .dropdown-wrapper:hover {
        color: var(--color-white);
    }
    .dropdown-container {
        display: none;
    } 
    .dropdown-container-mobile {
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--color-white);
        border: 1px solid transparent;
        border-radius: 0;
        box-sizing: border-box;
        box-shadow: none;
    }
    .option {
        padding: 5px 0;
    }
    .hamburger {
        display: block;
        cursor: pointer;
        z-index: 100;
    }
    .toggle {
        right: 15px;
        top: 40px;
    }
    .open {
        transform: translateX(0);
    }
}

.nuxt-link-exact-active {
  color: var(--color-pink-dark);
}
</style>
