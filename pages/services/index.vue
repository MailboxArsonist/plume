<template>
  <main class="main">
    <h1>These are the serviccees</h1>
    <section class="services-section">
      <Service
        v-for="service in services"
        :key="service.title"
        :service="service"
        class="service"
      />
    </section>
  </main>
</template>

<script>
import Service from "../../components/Service";
export default {
  components: {
    Service
  },
  data() {
    return {
      services: [
        {
          title: "Brand messaging",
          message: "Timeline: 1 - 2 weeks",
          primaryColor: "#287392",
          secondaryColor: "#1c5f7b",
          content: {
            title: "The brand collection",
            sections: [
              "You care deeply about your brand. But it doesn’t truly show your voice, your heart, and your vision. You need the support of a copywriting strategist to distill your voice into a brand message that genuinely connects, perfect for the business owner that wants to become fluent in their brand messaging strategy."
            ],
            image: "typing.jpg",
            button: {
              text: "Hit me up",
              type: "link",
              color: "red"
            }
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.service {
  margin: 1rem;
}
.services-section {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
