<template>
  <article class="service" :style="cssVars">
    <div class="header">
      <h2 class="title">{{ service.title }}</h2>
    </div>
    <div class="content-container">
      <div class="image-container">
        <img :src="`img/${service.content.image}`" alt="" />
      </div>
      <div class="description-container">
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
        "--primary": this.service.primaryColor,
        "--secondary": this.service.secondaryColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.service {
  width: 1000px;
  max-width: 100%;
  box-shadow: 0 -2px 8px 1px rgba(0, 0, 0, 0.04), 0 12px 20px 2px rgba(0, 0, 0, 0.12), 0 5px 16px -3px rgba(0, 0, 0, 0.05);

  &:nth-child(even) {
    .content-container {
      flex-direction: row-reverse !important;
    }
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    color: #fff;
    font-weight: 500;
    background-color: var(--primary);
    border: 1px solid var(--primary);

    .title {
      font-size: 28px;
      margin: 0rem 2rem 0rem 0rem;
      font-weight: inherit;
      font-family: "Indie Flower", cursive;
    }

    .message {
      margin-left: auto;
      font-size: 20px;
      font-family: "Indie Flower", cursive;
    }
  }

  .content-container {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-right: 1px solid rgba($color: #000000, $alpha: 0.1);

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
      padding-top: 2rem;
      display: flex;
      flex-direction: column;

      h4 {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 1.5rem;
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
        margin: 1rem auto;
        transition: all 600ms;
        text-align: center;
        &:hover {
          background-color: var(--secondary);
          border-color: var(--secondary);
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .service {
    .header .title {
      margin-right: 0;
      font-size: 23px;
    }
    .content-container {
      padding: 0;
      flex-direction: column;

      .image-container {
        width: 100%;
      }

      .description-container {
        width: 100%;
        padding: 1rem;

        .description-section {
          font-size: 1.1rem;
          line-height: 1.5;
        }

        .content-button {
          width: 90%;
        }
      }
    }
  }
}
</style>
