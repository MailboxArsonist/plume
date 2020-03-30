<template>
  <main class="main">
    <section class="intro">
      <h1>
        These are the serviccees
        <br>
        that I offer
        <br> 
        maybe some interesting stuff
      </h1>
    </section>
    <section class="services-section">
      <Service
        v-for="service in services"
        :key="service.title"
        :service="service"
        class="service"
        :data-aos="service.animation"
        data-aos-once="true"
        data-aos-duration="1000"
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
          title: "Content writing",
          message: "Timeline: 1 - 2 weeks",
          primaryColor: "#287392",
          secondaryColor: "#1c5f7b",
          animation: "fade-right",
          content: {
            title: "The brand collection",
            sections: [
              "You care deeply about your brand. But it doesn’t truly show your voice, your heart, and your vision. You need the support of a copywriting strategist to distill your voice into a brand message that genuinely connects, perfect for the business owner that wants to become fluent in their brand messaging strategy."
            ],
            image: "typing.jpg",
            button: {
              text: "Hit me up",
              type: "link"
            }
          }
        },
        {
          title: "SEO optimaztion",
          message: "Timeline: 1 - 2 weeks",
          animation: "fade-left",
          primaryColor: "#560628",
          secondaryColor: "#38061b",
          content: {
            title: "Seo stuff here",
            sections: [
              "You care deeply about your brand. But it doesn’t truly show your voice, your heart, and your vision.",
              "You need the support of a copywriting strategist to distill your voice into a brand message that genuinely connects, perfect for the business owner that wants to become fluent in their brand messaging strategy.",
            ],
            image: "seo.jpg",
            button: {
              text: "Hire meeeeeeee!",
              type: "link"
            }
          }
        },
        {
          title: "Social media management",
          message: "Timeline: 1 - 2 weeks",
          primaryColor: "#40693f",
          animation: "fade-right",
          secondaryColor: "#3a5f39",
          content: {
            title: "Social media management stuff",
            sections: [
              "You care deeply about your brand. But it doesn’t truly show your voice, your heart, and your vision.",
              "You need the support of a copywriting strategist to distill your voice into a brand message that genuinely connects, perfect for the business owner that wants to become fluent in their brand messaging strategy.",
            ],
            image: "social-media.jpg",
            button: {
              text: "Hire meeeeeeee!",
              type: "link"
            }
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.intro {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto 2rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: left;
  }
}

.service {
  margin-bottom: 4rem;
  margin-left: auto;
  &:nth-child(odd) {
    margin-right: auto;
    margin-left: 0;
  }
}
.services-section {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
