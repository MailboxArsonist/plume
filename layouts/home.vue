<template>
  <div class="app">
    <NavBar class="home" />
    <div class="main-app">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
