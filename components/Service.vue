<template>
  <article class="service">
    <div class="header" :style="service.style">
      <h2 class="title">{{ service.title }}</h2>
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
        <button class="content-button">
          {{ service.content.button.text }}
        </button>
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
  data() {
    return {
      date: 2020
    };
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
    height: 40px;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    color: #fff;
    font-weight: 500;

    .title {
      font-size: 22px;
      margin: 0rem 2rem 0rem 0rem;
      font-weight: inherit;
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
      padding-left: 1rem;
    }
  }
}
</style>
