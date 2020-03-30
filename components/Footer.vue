<template>
  <footer class="footer">
    <!-- <p class="footer-link-title">Links</p> -->
    <!-- put a line here -->
    <p class="footer-link">
      <nuxt-link to="/">Home</nuxt-link>
    </p>
    <p class="footer-link">
      <nuxt-link to="/about">About</nuxt-link>
    </p>
    <p class="footer-link">
      <nuxt-link to="/services">Prestations</nuxt-link>
    </p>
    <p class="footer-link">
      <nuxt-link to="/contact">Contact</nuxt-link>
    </p>
    <!-- links to other sites -->
    <div class="footer-follow-container">
      <a
        href="https://www.linkedin.com/in/laurie-liagre-9b8271b2"
        class="footer-follow"
        target="_blank"
      >
        <svg viewBox="0 0 512 512">
          <g>
            <path
              clip-rule="evenodd"
              d="M332.051,176.916c24.504,0,45.362,8.772,62.607,25.707   c14.518,14.82,21.474,36.289,21.474,64.714v163.317h-61.398V322.381c0-29.327-1.511-48.99-3.928-58.676   c-2.717-9.67-7.258-17.231-13.912-22.069c-6.653-5.14-14.818-7.562-24.493-7.562c-12.403,0-23.295,3.935-32.366,12.399   c-9.069,8.47-15.121,19.966-18.744,34.786c-1.822,7.849-2.729,24.485-2.729,50.202v99.192H196.57V182.965h61.992v25.706   c14.215-11.794,26.92-19.961,38.416-24.798C308.464,179.338,319.961,176.916,332.051,176.916L332.051,176.916z M25.701,512h460.89   c13.912,0,25.409-11.48,25.409-25.403V25.706C512,11.491,500.503,0,486.591,0H25.701C11.486,0,0,11.491,0,25.706v460.891   C0,500.519,11.486,512,25.701,512L25.701,512z M135.482,81.35c10.883,0,20.265,3.93,28.128,11.794   c7.862,7.864,11.486,17.539,11.486,28.732c0,10.886-3.624,20.264-11.486,28.123c-7.561,7.864-16.943,11.497-27.826,11.497   s-20.265-3.935-28.127-11.799c-7.862-7.859-11.789-17.54-11.789-29.031c0-10.886,3.926-19.96,11.487-27.825   C115.217,85.28,124.59,81.35,135.482,81.35L135.482,81.35z M104.335,182.965h61.993v247.689h-61.993V182.965z"
            />
          </g>
        </svg>
      </a>
      <a
        href="mailto:laurie.liagre@gmail.com?Subject=From%20Website"
        class="footer-follow"
      >
        <svg viewBox="0 0 20 16">
          <g fill-rule="evenodd" stroke="none" stroke-width="1">
            <g transform="translate(0.000000, -85.000000)">
              <g transform="translate(0.000000, 85.000000)">
                <path
                  d="M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,2 C20,0.9 19.1,0 18,0 L18,0 Z M18,14 L16,14 L16,5.2 L10,9 L4,5.2 L4,14 L2,14 L2,2 L3.2,2 L10,6.2 L16.8,2 L18,2 L18,14 L18,14 Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
    <!-- extra info -->
    <div class="footer-info">
      <p>&copy; Laurie Liagre {{ date }}</p>
      <p>Website designed and created by Matthew Dodd</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date: 2020
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: #f0e2cd;
  width: 100%;
  height: 28em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // font-family: "Abel", sans-serif;
  color: black;
}

.footer p {
  font-size: 1.2em;
  text-align: center;
  margin-top: 0.3em;
}
.footer-link-title {
  font-size: 1.4em;
  margin-top: 0;
}
.footer-link-title::after {
  content: " ";
  width: 290px;
  border-bottom: 0.5px solid black;
  display: block;
  margin-bottom: 0.2rem;
  height: 4px;
}
.footer-follow-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1em;
}

.footer-follow {
  width: 60px;
  height: 60px;
  margin: 0 1em 0 1em;
  border: 1.2px solid;
  padding: 0.9em;
  color: black;
}

.footer-follow img {
  width: 100%;
  height: 100%;
}
.footer-follow svg {
  width: 100%;
  height: 100%;
}

.footer-info {
  margin: 1em;
  p {
    font-size: 1em;
  }
}

.footer-link {
  transition: color 0.3s, fill 0.3s;
  // font-family: "News Cycle", sans-serif;
  position: relative;
  padding: 0 2em;
  &:before {
    content: " ";
    display: inline-block;
    background: url("~assets/img/svg/nav-feather.svg");
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
  &:after {
    content: " ";
    display: inline-block;
    background: url("~assets/img/svg/nav-feather.svg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 35px;
    margin-left: 0.5em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    right: 0;
    opacity: 0;
    transition: opacity 400ms;
  }
  &:hover {
    &:before,
    &:after {
      opacity: 1;
      transition: opacity 400ms;
    }
  }
}
.footer-follow:hover {
  transition: color 0.3s, fill 0.3s;
  color: #fff;
  fill: #fff;
}
</style>
