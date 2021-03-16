<template>
  <nav
    class="nav"
    :class="{
      'nav-minimized': minimizeNav
    }"
    @scroll="handleScroll"
  >
    <nuxt-link to="/">
      <img src="../assets/img/svg/plume.svg" alt="plume-icon" class="logo" />
    </nuxt-link>
    <ul class="nav-links">
      <li class="nav-link">
        <nuxt-link to="/">Accueil</nuxt-link>
      </li>
      <li class="nav-link">
        <nuxt-link to="/services">Prestations</nuxt-link>
      </li>
      <li class="nav-link">
        <nuxt-link to="/about">À propos</nuxt-link>
      </li>
      <li class="nav-link">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
    <div class="mobile-links">
      <div
        id="nav-icon1"
        :class="{
          open: sideMenuOpen
        }"
        @click="handleMenuClick"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        class="panel"
        :class="{
          active: sideMenuOpen
        }"
      >
        <ul class="nav-mobile-links">
          <li class="nav-link">
            <nuxt-link to="/">Accueil</nuxt-link>
          </li>
          <li class="nav-link">
            <nuxt-link to="services">Prestations</nuxt-link>
          </li>
          <li class="nav-link">
            <nuxt-link to="/about">À propos</nuxt-link>
          </li>
          <li class="nav-link">
            <nuxt-link to="contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      minimizeNav: false,
      sideMenuOpen: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (window.scrollY > 50) {
      this.minimizeNav = true;
    } else if (document.body.scrollTop < 50) {
      this.minimizeNav = false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.minimizeNav = true;
      } else if (document.body.scrollTop < 50) {
        this.minimizeNav = false;
      }
    },
    handleMenuClick() {
      this.sideMenuOpen = !this.sideMenuOpen;
    },
    closeMenu() {
      this.sideMenuOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 9em;
  color: black;
  border-bottom: 1px solid transparent;
  background: transparent;
  transition: height 700ms;

  .logo {
    height: auto;
    width: 240px;
    margin-left: 2em;
    min-width: 200px;
  }
}

.nav::after {
  clear: both;
  content: " ";
}

.nav-minimized {
  height: 75px;
  box-shadow: 0 10px 20px -4px rgba(0, 0, 0, 0.03);
  border-color: #fff;
  background-color: #fff;
  transition: height 700ms;
}

.nav-links {
  width: 100%;
  margin: 0;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: inherit;
}

.nav-link {
  list-style: none;
  display: inline;
  margin-right: 5em;
  a {
    // font-family: "News Cycle", sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    position: relative;
    padding-left: 2em;
    &:before {
      content: " ";
      display: inline-block;
      background: url("~assets/img/svg/nav-feather.svg");
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 35px;
      margin-right: 0.5em;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      opacity: 0;
      transition: opacity 400ms;
    }
    &:hover,
    &.nuxt-link-exact-active {
      &:before {
        opacity: 1;
        transition: opacity 400ms;
      }
    }
  }
}

.mobile-links {
  display: none;
  margin: 0 2em 0 auto;
  .nav-button {
    width: 20px;
    height: 20px;
    border: 0;
    cursor: pointer;
    background: none;
    img {
      width: 100%;
      height: auto;
    }
  }
  .panel {
    position: fixed;
    left: 100%;
    top: 112px;
    transition: left 200ms;
    width: 100%;

    &.active {
      left: 0;
    }
  }
  .nav-mobile-links {
    background: #fff;
    height: 100%;
    margin: 0;
    margin-left: 20%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: inherit;
    box-shadow: -8px 18px 15px 1px rgba(0,0,0,0.2);
    border-radius: 10px;
    .nav-link {
      margin-bottom: 1em;
      margin-right: 0;
      &:first-of-type {
        margin-top: 1em;
      }
    }
  }
}

@media (max-width: 900px) {
  .mobile-links {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }
  .nav-links {
    display: none;
  }
}
@media (max-width: 500px) {
  .nav {
    height: 7em;
    .logo {
      min-width: 110px;
      margin-left: 1em;
    }
  }
  .mobile-links {
    margin-right: 1em;
  }
}
#nav-icon1 {
  width: 32px;
  height: 29px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: #000;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 12px;
}

#nav-icon1 span:nth-child(3) {
  top: 24px;
}

#nav-icon1.open span:nth-child(1) {
  top: 12px;
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open span:nth-child(3) {
  top: 12px;
  transform: rotate(-135deg);
}
</style>
