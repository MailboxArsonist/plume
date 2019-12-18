<template>
  <nav class="nav">
    <img src="../assets/img/svg/plume.svg" alt="plume-icon">
    <ul class="nav-links">
      <li class="nav-link"><a href="about.html">About</a></li>
      <li class="nav-link"><a href="prestations.html">Prestations</a></li>
      <li class="nav-link"><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style lang="scss">
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 10em;
    color: black;
    border-bottom: 1px solid transparent;
    background: #fff;
    transition: height 700ms;

    
    box-shadow: 0 10px 20px -4px rgba(0,0,0,.03);
    border-color: #fff;
    transition: height 700ms;
}
.nav::after {
    clear: both;
    content: ' ';
}

.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

.nav img {
    height: auto;
    min-width: 20em;
    margin-left: 2em;
}

.nav-links {
    width: 100%;
    margin: 0;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: inherit;
}

.nav-link {
  list-style: none;
  display: inline;
  margin-right: 5em;
  a {
    font-family: 'News Cycle', sans-serif;
    font-size: 1.4em;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    position: relative;
    padding-left: 2em;
    &:before {
      content: ' ';
      display: inline-block;
      background: url('~assets/img/svg/nav-feather.svg');
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 35px;
      margin-right: 0.5em;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      opacity: 0;
      transition: opacity 400ms;
    }
    &:hover {
      &:before {
        opacity: 1;
        transition: opacity 400ms;
      }
    }
  }
}
</style>