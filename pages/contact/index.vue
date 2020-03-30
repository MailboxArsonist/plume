<template>
  <main class="main">
    <section class="contact">
      <div class="contact-intro">
        <h1>Contactez moi</h1>
      </div>
      <div class="contact-container">
        <div class="contact-form">
          <label for="email">Votre email</label>
          <input
            id="email"
            v-model="email"
            required
            type="email"
            @focus="focus"
            @input="handleInput"
          />

          <label for="subject">Sujet</label>
          <input
            id="subject"
            v-model="subject"
            type="text"
            @focus="focus"
            @input="handleInput"
          />

          <label for="content">Content</label>
          <textarea
            id="content"
            v-model="content"
            name="content"
            cols="30"
            rows="10"
            @focus="focus"
            @input="handleInput"
          />

          <button class="button" type="button" @click="sendEmail">
            Envoyer
          </button>
        </div>

        <div class="email-preview">
          <div class="preview-header">
            <span class="header-title">New Message</span>
            <div class="header-buttons">
              <img src="~/assets/img/dash.png" alt="minimize" />
              <img src="~/assets/img/arrows.png" alt="expand" />
              <img src="~/assets/img/close.png" alt="close" />
            </div>
          </div>

          <div class="preview-to">
            <span
              class="preview-to-placeholder"
              :class="{
                'preview-to-placeholder-styled': showEmailStyle
              }"
            >
              {{ toPreview }}
            </span>
          </div>
          <div class="preview-subject">
            <span class="preview-subject-placeholder">
              {{ subjectPreview }}
            </span>
          </div>
          <div class="preview-content">
            <textarea
              v-model="contentPreview"
              class="preview-content-placeholder"
              cols="30"
              rows="10"
              readonly
            />
          </div>
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
    focus() {
      this.toPreview = "laurie.liagre@gmail.com";
      this.showEmailStyle = true;
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
section.contact {
  width: 80%;
  max-width: 1050px;
  margin: auto;
  padding: 0 2em 2em 2em;
  margin-bottom: 4rem;

  h1 {
    // font-size: 30px;
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

.email-preview {
  // background-color: red;
  width: 400px;
  min-width: 320px;
  margin-left: 3rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);

  .preview-header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: #404040;
    color: #fff;
    font-size: 0.875rem;
    letter-spacing: 0.2px;
    font-weight: 500;

    .header-buttons {
      img {
        width: 10px;
        height: 10px;
        opacity: 0.6;
        margin-left: 0.6em;
      }
    }
  }
  .preview-to,
  .preview-subject {
    height: 36px;
    background-color: #fff;
    padding: 8px 16px 0px 16px;
    > span {
      font-size: 14px;
      padding-bottom: 8px;
      display: block;
      color: #777;
      overflow: hidden;
      box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
      &.preview-to-placeholder-styled {
        color: #000;
      }
      &.preview-subject-placeholder {
        color: #000;
      }
    }
  }
  .preview-content {
    min-height: 375px;
    background-color: #fff;
    padding: 1rem;

    > .preview-content-placeholder {
      word-break: break-word;
      overflow: hidden;
      border: 0;
      width: 100%;
      border: none;
      font-size: 15px;
      outline: none;

      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      resize: none; /*remove the resize handle on the bottom right*/
    }
  }
}
</style>
