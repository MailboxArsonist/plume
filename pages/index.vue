<template>
  <main class="main">
    <section class="main-intro">
      <h2 class="page-title">
        This is a title about why you
        <br />
        might need a content writer like me.
      </h2>
      <p>
        This is a <span class="highlight">paragraph</span> for more
        <span class="highlight">info</span> about bla bla lots of text about
        writing <span class="highlight">nice</span> things its
        <span class="highlight">valuable</span> etc etc so just
        <span class="highlight">fucking</span> hurry up and
        <span class="highlight">hire</span> me would you?
      </p>
    </section>
  </main>
</template>

<script>
export default {
  layout: "home"
};
</script>

<style lang="scss" scoped>
.main-intro {
  background: #fff;
  text-align: left;
  width: 80%;
  margin: auto;
  padding: 4em 6em;
}

.page-title {
  margin: 1.5em 0em 0.5em 0em;
  font-size: 3em;
  color: #f95738;
}

.main-intro p {
  margin: 0em 0em 2em 0em;
  line-height: 1.8;
  font-size: 1.6em;
  width: 75%;
  margin-left: 25%;
  font-weight: 600;
}

.highlight {
  border-bottom: 3px solid #f95738;
}
</style>
