<template>
  <main class="main">
    <section class="intro">
      <h1 class="intro-title">
        These are the serviccees
        <br>
        that I offer
        <br> 
        maybe some interesting stuff
      </h1>
      <p class="intro-text">Another text about the stuff that I do</p>
    </section>
    <section>
      <div class="service-links">
        <ServiceIcon
          v-for="service in services"
          :key="service.title"
          :service="service"
          class="service-link"
        />
      </div>
    </section>
    <section class="services-section">
      <Service
        v-for="service in services"
        :id="service.anchor.target"
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
import ServiceIcon from "../../components/ServiceIcon";
export default {
  components: {
    Service,
    ServiceIcon
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
          anchor: {
            target: "test",
            icon: "/content.svg",
            text: "Content Writing"
          },
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
          anchor: {
            target: "seo",
            icon: "/blog.svg",
            text: "SEO"
          },
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
          anchor: {
            target: "social",
            icon: "/plan.svg",
            text: "Social Media"
          },
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
        },
        {
          title: "Social media management",
          message: "Timeline: 1 - 2 weeks",
          primaryColor: "#40693f",
          animation: "fade-left",
          secondaryColor: "#3a5f39",
          anchor: {
            target: "social",
            icon: "/plan.svg",
            text: "Social Media"
          },
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
html {
  scroll-behavior: smooth;
}
.intro {
  width: 100%;
  padding: 6rem;
  background: url("~assets/img/test.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1rem;
  h1 {
    text-align: left;
    font-size: 50px;
  }

  p {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 4rem;
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
.service-links {
  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 4rem;
  .service-link {
    width: 200px;
    margin: 0 2rem;
  }
}
</style>
