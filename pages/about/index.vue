<template>
  <main class="main">
    <section class="intro">
      <h1 class="intro-title">
        Qui suis-je ?
      </h1>
      <p class="intro-text">
        Avant d’envisager de travailler ensemble, vous souhaitez sûrement me
        connaître un petit peu mieux.
      </p>
    </section>
    <section class="about">
      <div class="about-container">
        <div class="text-center about-intro">
          <p>Laurie Liagre</p>
          <p>Rédactrice web SEO</p>
        </div>
        <div class="about-details">
          <!-- <p>
            Avant d’envisager de travailler ensemble, vous souhaitez sûrement me
            connaître un petit peu mieux.
          </p> -->
          <p>
            J’exerce le métier de rédacteur web depuis février 2019. Avant cela,
            j’ai travaillé dans le domaine de la communication événementielle,
            au sein de diverses structures culturelles et artistiques.
          </p>
          <p>
            J’ai aussi beaucoup vadrouillé et vécu à l’étranger durant plusieurs
            années. Ma faiblesse : je ne tiens pas en place, et je veux tout
            voir, tout faire. Le monde est trop grand !
          </p>
          <p>
            C’est après une dizaine d’année à alterner étude, travail,
            volontariat et voyage au long cours à divers endroits du globe que
            j’ai décidé de me lancer début 2019 à mon compte. Ce projet
            entrepreneurial, je l’ai construit avec une idée claire en tête :
            faire un métier à la fois stimulant intellectuellement, en
            adéquation avec mes compétences et mon mode de vie atypique.
          </p>
          <p>
            Déjà à l’aise en écriture, très curieuse de nature et dotée d’un bon
            bagage en marketing, le métier de rédacteur web m’a tout de suite
            semblé idéal. Quant au monde complexe et passionnant du
            référencement naturel, je l’ai découvert lorsque je me suis formée
            sérieusement à la rédaction SEO.
          </p>
          <p>
            Depuis, je continue d’apprendre, d’évoluer et de me challenger jour
            après jour, autant à travers mes propres projets qu’auprès des
            entrepreneurs ayant fait appel de mes services.
          </p>
          <p>
            En ce moment, je vis à Brighton, en Angleterre, d’où je travaille à
            distance pour mes super clients francophones. Dont vous, peut-être ?
          </p>
          <button>Hit me up CTA</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  background: url("~assets/img/caf.jpeg");
}
section.about {
  width: 80%;
  max-width: 1050px;
  margin: auto;
  padding: 0 2em 2em 2em;
  text-align: center;
  h1 {
    margin-bottom: 1.5em;
  }
}

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
}

.about-intro {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2em;
  p {
    margin-bottom: 0.5em;
  }
}

.about-details {
  text-align: left;
  p {
    margin-bottom: 1em;
    line-height: 1.6em;
    font-weight: 500;
    &:last-of-type {
      margin-bottom: 2.5em;
    }
  }
  button {
    padding: 1em;
    border: 1px solid black;
    font-weight: 600;
    margin: 1em auto;
    display: block;
    width: 250px;
  }
}
.about-img {
  min-width: 250px;
  margin-bottom: 2em;
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 100%;
  }
}
</style>
