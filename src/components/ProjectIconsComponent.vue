<script setup>

/*
* TODO:
* - Chrome has issues with "active" or "hover", making the icons / inks \
* pressable even when the icons doesnt show.
* - Instead of calling the backend API for JSON data every time the component mounts, \
* find a solution to store the data after the first call and store it until the client leaves
*/

const props = defineProps({
  links: Object,
});

const icons = {
  visit: "icons/arrow.png",
  download: "icons/download.png",
  github: "icons/github.png",
  info: "icons/information.png"
};
</script>


<template>
  <div class="icons flx-center">
    <div class="icons-shadow"></div>
    <div class="icon" v-for="(value, key) in links" :key="key">
      <a tabindex="-1" :href="links[key]" target="_blank"><img :src="icons[key]" /></a>
      <div class="hover-bar"></div>
    </div>
  </div>
</template>


<style scoped>
div.icons {
  position: absolute;
  column-gap: 20px;
  width: fit-content;
  opacity: 0;
  margin: 0 30px 20px 30px;
  transition: opacity ease var(--hover-on-phase);
  pointer-events: none;
  touch-action: none;
}

div.icon {
  z-index: 1;
  max-width: 70px;
  transition: max-width ease var(--hover-on-phase);
}

div.icon img {
  max-width: 100%;
  max-height: 100%;
}

div.icons-shadow {
  position: absolute;
  width: 80%;
  margin-top: 20px;
  box-shadow: 0 0 40px 50px #000000D9;
}

div.hover-bar {
  height: 5px;
  width: 10%;
  border-radius: 3px;
  opacity: 0;
  margin: 5px auto 0 auto;
  background-color: var(--text);
  transition: all ease var(--hover-off-fast-phase);
}

/* Cursor-specific devices */
@media (hover: hover) and (pointer: fine) {

  /* Override Bootstrap link-opacity */
  a:hover {
    opacity: 1;
  }

  div.content:hover div.icons {
    opacity: 1;
    pointer-events: auto;
  }

  div.content:hover div.icon {
    max-width: 80px;
  }

  div.icon:hover div.hover-bar {
    width: 100%;
    opacity: 1;
  }
}

/* Mobile coverage. */
@media (hover: none) and (pointer: coarse) {
  div.content:focus-within .icons {
    opacity: 1;
    pointer-events: auto;
  }

  div.content.content:focus-within .icon {
    max-width: 80px;
  }
}

/* Mobile CHROME (for some fucking reason supports hover) coverage. */
@media (hover: hover) and (pointer: coarse) {
  div.content:focus-within .icons {
    opacity: 1;
    pointer-events: auto;
  }

  div.content.content:focus-within .icon {
    max-width: 80px;
  }
}
</style>
