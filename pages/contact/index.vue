<template>
  <main class="main">
    <section class="intro">
      <h1 class="intro-title">
        On discute ?
      </h1>
      <p class="intro-text">
        Parlez-moi de votre projet et de vos attentes, je vous réponds sans
        faute sous 24 heures ! Pour recevoir un devis, ou au moins une
        fourchette de tarifs, soyez le plus précis possible dans la description
        du projet
      </p>
    </section>
    <section class="contact">
      <div class="contact-container">
        <div class="contact-form">
          <h2>Envoyez un email</h2>
          <label for="email">Votre email</label>
          <input id="email" v-model="email" required type="email" />

          <label for="subject">Sujet</label>
          <input id="subject" v-model="subject" type="text" />

          <label for="content">Message</label>
          <textarea
            id="content"
            v-model="content"
            name="content"
            cols="30"
            rows="10"
          />

          <button class="button" type="button" @click="sendEmail">
            Envoyer
          </button>
        </div>
        <div class="info-container">
          <h2>Mes infos</h2>
          <p><span class="location"></span>Brighton</p>
          <a href="mailto:laurie.liagre@gmail.com">
            <span class="email"></span>laurie.liagre@gmail.com
          </a>
          <a href="https://www.malt.fr/profile/laurieliagre" target="_blank">
            <span class="malt"></span>Je suis sur Malt
          </a>
          <a
            href="https://www.linkedin.com/in/laurie-liagre-9b8271b2/?originalSubdomain=fr"
            target="_blank"
          >
            <span class="linkedin"></span>Linkedin aussi !
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      subject: "",
      content: "",
      emailSent: false
    };
  },
  methods: {
    sendEmail() {
      if (this.email && this.subject && this.content) {
        this.emailSent = true;
        return "sending email";
      }
    }
  },
  head() {
    return {
      title: "Plume Nomade | Contact",
      meta: [
        {
          hid: "contact",
          name: "contact",
          content:
            "Parlez-moi de votre projet et de vos attentes, je vous réponds sans faute sous 24 heures ! Pour recevoir un devis, ou au moins une fourchette de tarifs, soyez le plus précis possible dans la description du projet"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  &::before {
    background-image: url("~assets/img/contact.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.7;
    content: "";
    z-index: -1;
  }
}
section.contact {
  padding: 5rem 2rem 2rem 2rem;
  margin-bottom: 4rem;

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
}
.contact-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  min-width: 330px;

  h2 {
    margin-bottom: 2rem;
  }

  input {
    border: 1px solid #404040;
    border-radius: 5px;
    margin-bottom: 1rem;
    height: 3em;
    padding: 0.5rem;
  }
  textarea {
    border: 1px solid #404040;
    border-radius: 5px;
    margin-bottom: 1em;
    padding: 0.5rem;
  }
  label {
    margin-bottom: 0.75em;
    font-weight: 600;
  }

  button {
    padding: 0.75em 1em;
    border: 1px solid #f95738;
    background-color: #f95738;
    color: #fff;
    border-radius: 5px;
    font-weight: 600;
    &:hover {
      background-color: #bb4f39;
      border-color: #bb4f39;
    }
  }
  input:focus,
  textarea:focus {
    border-color: #636262;
  }
}

.info-container {
  min-width: 260px;
  align-self: flex-start;
  h2 {
    margin-bottom: 2rem;
  }

  p,
  a {
    display: flex;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    margin-right: 1.1rem;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 30px;
    width: 30px;
    background-position: center;
  }

  .malt {
    background-image: url("~assets/img/malt.jpg");
  }

  .email {
    background-image: url("~assets/img/email.png");
  }

  .location {
    background-image: url("~assets/img/location.png");
  }

  .linkedin {
    background-image: url("~assets/img/linkedin-icon.png");
  }
}

@media only screen and (max-width: 600px) {
  .contact-container {
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap-reverse;

    > div {
      min-width: unset;
      width: 100%;
      &.info-container {
        margin-bottom: 4rem;
      }
    }
  }
}
</style>
