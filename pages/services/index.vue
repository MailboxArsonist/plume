<template>
  <main class="main">
    <section class="intro">
      <h1 class="intro-title">
        De façon plus concrète,
        <br />
        voici ce que je peux faire pour vous.
      </h1>
      <p class="intro-text">
        Rédaction SEO, copywriting et storytelling, stratégie de contenu et
        réseaux sociaux, découvrez mes différents services.
      </p>
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
          title: "Rédaction SEO, Copywriting & Storytelling",
          primaryColor: "#287392",
          secondaryColor: "#1c5f7b",
          animation: "fade-right",
          anchor: {
            target: "redaction",
            icon: "/content.svg",
            text: "Rédaction de contenu"
          },
          content: {
            sections: [
              "Articles de blog, pages fixes, fiches produits, catégories, page à propos, ebook, livre blanc… je rédige pour vous toutes sortes de contenus adaptés aux exigences du web. À la clé, 3 garanties : un texte optimisé, fluide et adapté à la ligne éditoriale du site, et des informations pertinentes et sourcées.",
              "Vous pouvez me fournir un brief détaillé que je suivrais à la lettre, ou me laisser carte blanche quant à la structure et à l’optimisation SEO. Envie d’ajouter une touche de copywriting à vos pages de vente et à vos fiches produits, ou une pincée de storytelling pour raconter l’histoire de votre entreprise ?",
              "C’est aussi dans mes cordes !"
            ],
            image: "typing.jpg",
            button: {
              text: "Hit me up",
              type: "link"
            }
          }
        },
        {
          title: "Relecture, correction et optimisation",
          animation: "fade-left",
          primaryColor: "#e0c04c",
          secondaryColor: "#38061b",
          anchor: {
            target: "correction",
            icon: "blog.svg",
            text: "Relecture et correction"
          },
          content: {
            sections: [
              "Vous êtes en pleine création ou refonte de votre site internet et vous vous sentez perdu dans les méandres du référencement naturel ? Je vous propose un accompagnement ciblé sur la mise en place d’une stratégie de contenu efficace, pour vous permettre de gravir petit à petit les marches de la première page de Google.",
              "Recherche de sujets et de mots clés, étude de la concurrence, élaboration du planning éditorial, rédaction et intégration des contenus dans WordPress… Confiez-moi une partie ou l’intégralité de votre stratégie de contenu SEO !"
            ],
            image: "seo.jpg",
            button: {
              text: "Hire meeeeeeee!",
              type: "link"
            }
          }
        },
        {
          title: "Stratégie de contenu SEO",
          animation: "fade-left",
          primaryColor: "#560628",
          secondaryColor: "#38061b",
          anchor: {
            target: "seo",
            icon: "/analyse.svg",
            text: "SEO"
          },
          content: {
            sections: [
              "Vous êtes en pleine création ou refonte de votre site internet et vous vous sentez perdu dans les méandres du référencement naturel ? Je vous propose un accompagnement ciblé sur la mise en place d’une stratégie de contenu efficace, pour vous permettre de gravir petit à petit les marches de la première page de Google.",
              "Recherche de sujets et de mots clés, étude de la concurrence, élaboration du planning éditorial, rédaction et intégration des contenus dans WordPress… Confiez-moi une partie ou l’intégralité de votre stratégie de contenu SEO !"
            ],
            image: "seo.jpg",
            button: {
              text: "Hire meeeeeeee!",
              type: "link"
            }
          }
        },
        {
          title: "Gestion des réseaux sociaux",
          primaryColor: "#40693f",
          animation: "fade-right",
          secondaryColor: "#3a5f39",
          anchor: {
            target: "social",
            icon: "/plan.svg",
            text: "Réseaux sociaux"
          },
          content: {
            sections: [
              "Aujourd’hui, une marque ne peut plus se permettre de laisser ses réseaux sociaux à l’abandon. Si vous manquez de temps ou d’inspiration, j’enfile ma casquette de community manager et vous épaule sur l’animation de vos comptes professionnels.",
              "Mes services vont de la création d’un calendrier de publication à la rédaction et à planification des posts, en passant par le recyclage et la déclinaison de contenu sous différents formats. Je peux aussi m’occuper de la préparation et de la mise en page d’une newsletter."
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
h3 {
  text-align: center;
  padding: 2em;
  text-decoration: underline;
  font-size: 26px;
  // color: grey;
}
.intro {
  position: relative;
  &::before {
    background: url("~assets/img/test.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.8;
    content: "";
    z-index: -1;
  }
}
.intro {
  width: 100%;
  padding: 5.5rem 8rem;
  // background: url("~assets/img/test.jpg");
  // background-position: center;
  // background-size: cover;
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 5.5rem;
  h1 {
    text-align: left;
    font-size: 50px;
  }

  p {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.6;
    margin-bottom: 4rem;
    max-width: 800px;
  }
}

.service {
  margin-bottom: 5rem;
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
