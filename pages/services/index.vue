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
    <section class="services-conclusion">
      <div class="svg-intro-container">
        <svg
          width="133"
          height="53"
          viewBox="0 0 133 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M15.8129 16.2287C15.8129 13.9675 16.7243 11.799 18.3465 10.2001C19.9687 8.60126 22.169 7.70302 24.4631 7.70302C26.7573 7.70302 28.9575 8.60126 30.5798 10.2001C32.202 11.799 33.1133 13.9675 33.1133 16.2287L33.1133 29.7854L24.4529 38.3211L15.7925 29.7854L15.8129 16.2287Z"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.4526 16.2287L24.4526 44.3463"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.7922 21.7518L24.4526 30.2875"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g clip-path="url(#clip1)">
            <path
              d="M72.2006 16.0672C72.2006 13.8061 73.112 11.6375 74.7342 10.0386C76.3564 8.43976 78.5566 7.54153 80.8508 7.54152C83.145 7.54152 85.3452 8.43976 86.9674 10.0386C88.5897 11.6375 89.501 13.806 89.501 16.0672L89.501 29.6239L80.8406 38.1596L72.1802 29.6239L72.2006 16.0672Z"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M80.8403 16.0672L80.8403 44.1848"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M72.1799 21.5903L80.8403 30.126"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g clip-path="url(#clip2)">
            <path
              d="M60.6754 36.0297C60.6754 38.2909 59.764 40.4594 58.1418 42.0583C56.5195 43.6572 54.3193 44.5554 52.0251 44.5554C49.731 44.5554 47.5308 43.6572 45.9085 42.0583C44.2863 40.4594 43.3749 38.2909 43.3749 36.0297L43.3749 22.473L52.0353 13.9373L60.6957 22.473L60.6754 36.0297Z"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M52.0357 36.0298L52.0357 7.91212"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M60.6955 30.5067L52.0352 21.9709"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g clip-path="url(#clip3)">
            <path
              d="M117.063 35.8682C117.063 38.1294 116.152 40.2979 114.529 41.8968C112.907 43.4957 110.707 44.3939 108.413 44.3939C106.119 44.3939 103.918 43.4957 102.296 41.8968C100.674 40.2979 99.7626 38.1294 99.7626 35.8682L99.7626 22.3115L108.423 13.7758L117.083 22.3115L117.063 35.8682Z"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M108.423 35.8683L108.423 7.75062"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M117.083 30.3452L108.423 21.8094"
              stroke="#8C1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="34.3336"
                height="34.3336"
                fill="white"
                transform="matrix(-0.712215 -0.701961 -0.712215 0.701961 48.9058 24.2623)"
              />
            </clipPath>
            <clipPath id="clip1">
              <rect
                width="34.3336"
                height="34.3336"
                fill="white"
                transform="matrix(-0.712215 -0.701961 -0.712215 0.701961 105.293 24.1008)"
              />
            </clipPath>
            <clipPath id="clip2">
              <rect
                width="34.3336"
                height="34.3336"
                fill="white"
                transform="matrix(0.712215 0.701961 0.712215 -0.701961 27.5825 27.9961)"
              />
            </clipPath>
            <clipPath id="clip3">
              <rect
                width="34.3336"
                height="34.3336"
                fill="white"
                transform="matrix(0.712215 0.701961 0.712215 -0.701961 83.9702 27.8346)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h2>Et les prix dans tout ça ?</h2>
      <p>
        Côté tarifs, il m’est difficile de vous donner une réponse toute prête
        sans connaître votre projet. Mes prestations sont sur-mesure et le prix
        va dépendre de la nature de la mission (voir plus haut) et d’autres
        facteurs (longueur du contenu, technicité du sujet, présence ou non d’un
        brief SEO, etc.)
      </p>
      <p>
        Le plus simple est encore de
        <nuxt-link to="/contact">me contacter ici</nuxt-link>
        en me détaillant votre besoin !
      </p>
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
          animation: "zoom-in",
          anchor: {
            target: "redaction",
            icon: "/create.svg",
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
              text: "Contactez-moi pour plus d'info/tarifs",
              type: "link"
            }
          }
        },
        {
          title: "Relecture, correction et optimisation",
          animation: "zoom-in",
          primaryColor: "#e0c04c",
          secondaryColor: "#38061b",
          anchor: {
            target: "correction",
            icon: "correct.svg",
            text: "Relecture et correction"
          },
          content: {
            sections: [
              "Vous êtes en pleine création ou refonte de votre site internet et vous vous sentez perdu dans les méandres du référencement naturel ? Je vous propose un accompagnement ciblé sur la mise en place d’une stratégie de contenu efficace, pour vous permettre de gravir petit à petit les marches de la première page de Google.",
              "Recherche de sujets et de mots clés, étude de la concurrence, élaboration du planning éditorial, rédaction et intégration des contenus dans WordPress… Confiez-moi une partie ou l’intégralité de votre stratégie de contenu SEO !"
            ],
            image: "seo.jpg",
            button: {
              text: "En savoir plus",
              type: "link"
            }
          }
        },
        {
          title: "Stratégie de contenu SEO",
          animation: "zoom-in",
          primaryColor: "#560628",
          secondaryColor: "#38061b",
          anchor: {
            target: "seo",
            icon: "/seo.svg",
            text: "Stratégie de SEO"
          },
          content: {
            sections: [
              "Vous êtes en pleine création ou refonte de votre site internet et vous vous sentez perdu dans les méandres du référencement naturel ? Je vous propose un accompagnement ciblé sur la mise en place d’une stratégie de contenu efficace, pour vous permettre de gravir petit à petit les marches de la première page de Google.",
              "Recherche de sujets et de mots clés, étude de la concurrence, élaboration du planning éditorial, rédaction et intégration des contenus dans WordPress… Confiez-moi une partie ou l’intégralité de votre stratégie de contenu SEO !"
            ],
            image: "seo.jpg",
            button: {
              text: "Votre stratégie de contenu SEO c'est par ici !",
              type: "link"
            }
          }
        },
        {
          title: "Gestion des réseaux sociaux",
          primaryColor: "#40693f",
          animation: "zoom-in",
          secondaryColor: "#3a5f39",
          anchor: {
            target: "social",
            icon: "/social.svg",
            text: "Réseaux sociaux"
          },
          content: {
            sections: [
              "Aujourd’hui, une marque ne peut plus se permettre de laisser ses réseaux sociaux à l’abandon. Si vous manquez de temps ou d’inspiration, j’enfile ma casquette de community manager et vous épaule sur l’animation de vos comptes professionnels.",
              "Mes services vont de la création d’un calendrier de publication à la rédaction et à planification des posts, en passant par le recyclage et la déclinaison de contenu sous différents formats. Je peux aussi m’occuper de la préparation et de la mise en page d’une newsletter."
            ],
            image: "social-media.jpg",
            button: {
              text: "Ca vous interesse ?",
              type: "link"
            }
          }
        }
      ]
    };
  },
  head() {
    return {
      title: "Plume Nomade | Prestations",
      meta: [
        {
          hid: "Prestations",
          name: "Prestations description",
          content:
            "Rédaction SEO, copywriting et storytelling, stratégie de contenu et réseaux sociaux."
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
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 5.5rem;
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
.services-conclusion {
  position: relative;
  padding: 0rem 1rem 2rem 1rem;
  margin-bottom: 4rem;

  .svg-intro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4em auto;
  }
  h2,
  p {
    max-width: 1000px;
    margin: 0 auto;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 2em;
  }
  p {
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 1.25rem;
  }
}

@media only screen and (max-width: 600px) {
  .intro {
    margin-bottom: 2.5rem;
  }
  .service-links {
    flex-wrap: wrap;
    margin-bottom: 2rem;

    .service-link {
      width: 100px;
      margin: 0 1.2rem;
      padding: 1rem 0;

      .img {
        height: unset;
      }
    }
  }
}
</style>
