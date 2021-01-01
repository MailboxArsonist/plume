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
          <label for="email">Votre email</label>
          <input id="email" v-model="email" required type="email" />

          <label for="subject">Sujet</label>
          <input id="subject" v-model="subject" type="text" />

          <label for="content">Content</label>
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
      toPreview: "Recipients",
      subjectPreview: "Subject",
      contentPreview: "",
      showEmailStyle: false,
      emailSent: false
    };
  },
  methods: {
    handleInput(evt) {
      const target = evt.target.id;
      if (this[target]) {
        this[target + "Preview"] = this[target];
      }
    },
    sendEmail() {
      if (this.email && this.subject && this.content) {
        return "sending email";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  &::before {
    background-image: url("~assets/img/caf.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
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
section.contact {
  width: 80%;
  max-width: 1050px;
  margin: auto;
  padding: 0 2em 2em 2em;
  margin-bottom: 4rem;

  h1 {
    margin-bottom: 1.5em;
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
  input {
    border: 1px solid #404040;
    border-radius: 5px;
    margin-bottom: 1em;
    height: 3em;
  }
  textarea {
    border: 1px solid #404040;
    border-radius: 5px;
    margin-bottom: 1em;
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
</style>
