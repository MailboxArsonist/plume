<template>
  <article class="service" :style="cssVars">
    <div class="header">
      <h2 class="title">{{ service.title }}</h2>
      <span class="message">{{ service.message }}</span>
    </div>
    <div class="content-container">
      <div class="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRoDrL6SYSqrVi-5R_2hZzYf9JAhi7T4aowL9c2QJ5gs0DGmi_" alt="" />
      </div>
      <div class="description-container">
        <h4>{{ service.content.title }}</h4>
        <p
          v-for="section in service.content.sections"
          :key="section"
          class="description-section"
        >
          {{ section }}
        </p>
        <nuxt-link to="contact" class="content-button">
          {{ service.content.button.text }}
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Service",
  props: {
    service: {
      type: Object,
      default: null
    }
  },
  computed: {
    cssVars() {
      return {
        "--primary": this.service.primaryColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.service {
  width: 800px;
  max-width: 100%;
  border: 1px solid rgba($color: #000000, $alpha: 0.3);

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    color: #fff;
    font-weight: 500;
    background-color: var(--primary);

    .title {
      font-size: 22px;
      margin: 0rem 2rem 0rem 0rem;
      font-weight: inherit;
    }

    .message {
      margin-left: auto;
    }
  }

  .content-container {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .image-container {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: auto;
        max-width: 100%;
      }
    }
    .description-container {
      width: 70%;
      padding-left: 2rem;

      h4 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 1rem;
        text-align: center;
      }

      .description-section {
        line-height: 1.4;
        margin-bottom: 0.75rem;
      }
      .content-button {
        display: inline-block;
        padding: 0.75rem 1rem;
        background-color: var(--primary);
        border: 1px solid var(--primary);
        color: #fff;
      }
    }
  }
}
</style>
