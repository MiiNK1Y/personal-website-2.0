<script setup>
import TheOffcanvasComponent from '@/components/TheOffcanvasComponent.vue';
import LanguageSwitcherComponent from '@/components/LanguageSwitcherComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();               // Use the functionality given by the router.
const wWidth = ref(window.innerWidth);  // Set the current width of the window / viewport, made reactive.
const breakpoint = 650; // px           // The point from which the component is shown.
const hideFromRoute = '/';              // The route where to hide components, even if the width is met.

// Replace old window width with new one.
const onResize = () => {
  wWidth.value = window.innerWidth;
};

// Create eventlistener on mount to check on the width of the viewport.
onMounted(() => {
  window.addEventListener('resize', onResize);
})
</script>


<template>
  <div class="navbar">
    <RouterLink v-if="route.path != hideFromRoute" to="/"><img src="/logo.png" /></RouterLink>
    <div class="sub-navbar" v-if="breakpoint < wWidth && route.path != hideFromRoute">
      <NavigationComponent />
      <LanguageSwitcherComponent />
    </div>
    <div class="offcanvas-menu" v-else-if="route.path != hideFromRoute">
      <TheOffcanvasComponent />
    </div>
    <div class="languageswitch-only" v-else>
      <LanguageSwitcherComponent />
    </div>
  </div>
</template>


<style scoped>
div.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  flex-wrap: nowrap;
}

div.navbar img {
  max-width: 45px;
}

div.sub-navbar {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
}

div.offcanvas-menu {
  margin-left: auto;
}

div.languageswitch-only {
  margin-left: auto;
}
</style>
