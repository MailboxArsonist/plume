<template>
  <main class="main">
    <section class="contact">

      <h1>Send me an email !</h1>

      <div class="contact-container">

        <div class="contact-form">
          <label for="email">Votre email</label>
          <input id="email" type="email" />

          <label for="subject">Sujet</label>
          <input id="subject" type="text" />

          <label for="content">Content</label>
          <textarea id="content" name="content" cols="30" rows="10"></textarea>

          <button class="button">Envoyer</button>
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
            <span class="preview-to-placeholder">Recipients</span>
          </div>
          <div class="preview-subject">
            <span class="preview-subject-placeholder">Subject</span>
          </div>
          <div class="preview-content">
            <div class="preview-content-placeholder"></div>
          </div>
          <div class="preview-actions"></div>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section.contact {
  width: 80%;
  max-width: 1050px;
  margin: auto;
  padding: 2em;

  h1 {
    font-size: 30px;
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
  input {
    border: 2px solid #f0e2cd;
    border-radius: 5px;
    margin-bottom: 1em;
    height: 2em;
  }
  textarea {
    border: 2px solid #f0e2cd;
    border-radius: 5px;
    margin-bottom: 1em;
  }
  label {
    margin-bottom: 0.5em;
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
    border-color: #f95738;
  }
}

.email-preview {
  // background-color: red;
  width: 400px;
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
      box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
    }
  }
  .preview-content {
    min-height: 375px;
    background-color: #fff;
  }
}
</style>
