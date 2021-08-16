<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav>
      <ul v-show="!mobile" class="navigation">
        <li>Today</li>
        <li>Tommorow</li>
      </ul>
      <!-- MenuIcon -->
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fas fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <!-- Animation -->
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li class="link">Today</li>
          <li class="link">Tommorow</li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(243, 99, 99);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;
  height: 10%;
}

nav {
  display: flex;
  position: relative;
  flex-direction: row;
  padding: 10px 0;
  transition: 0.5s ease all;
  width: 90%;
}

@media (min-width: 1140px) {
  nav {
    max-width: 1140px;
  }
}
nav ul,
.link {
  font-weight: 500;
  color: white;
  list-style: none;
  text-decoration: none;
}
li {
  text-transform: uppercase;
  padding: 1rem;
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  border-bottom: 1px solid #000;
}
.link:hover {
  color: white;
  cursor: pointer;
  background-color: rgb(245, 55, 55);
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  cursor: pointer;
}
.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 2px;
  height: 100%;
  margin-top: 18px;
}

.icon > i {
  font-size: 24px;
  cursor: pointer;
  transition: rotate(180degree);
}
.fa-bars {
  padding: 10px 0;
}
.icon-active {
  transform: rotate(180degree);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: rgb(85, 83, 83);
  top: 0;
  left: 0;
}
.dropdown-nav > li {
  margin-left: 0;
}
.dropdown-nav > link {
  color: black;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.scrolled-nav {
  background-color: rgb(245, 55, 55);
}
.scrolled-nav > nav {
  padding: 8px 0;
}
</style>