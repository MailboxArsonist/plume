<template>
  <nuxt-link :to="`#${service.anchor.target}`" class="service-icon">
    <img :src="`img/${service.anchor.icon}`" alt="service" />
    <p>{{ service.anchor.text }}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: "ServiceIcon",
  props: {
    service: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.service-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: block;
  text-align: center;
  padding: 1rem;
  transition: all 0.3s ease;
  img {
    max-width: 100%;
    width: auto;
    height: 140px;
    max-width: 100%;
  }
  p {
    margin: 1.5rem 0;
    font-size: 18px;
    font-weight: bold;
  }
  &:hover {
    // padding-top: 0.5rem !important;
    transform: scale(1.1);
    // transition: padding-top 3s ease;
  }
}
</style>
