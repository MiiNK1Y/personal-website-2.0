<script setup>
import NavigationComponent from '@/components/NavigationComponent.vue';
import LanguageSwitcherComponent from '@/components/LanguageSwitcherComponent.vue';
</script>


<template>
  <button class="menu-button btn btn-primary" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    <i class="bi bi-list"></i>
  </button>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-body">
      <div class="offcanvas-header">
        <LanguageSwitcherComponent />
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <NavigationComponent />
    </div>
  </div>
</template>


<style scoped>
button.menu-button {
  background-color: transparent;
  border-color: var(--text);
  margin-left: auto;
}

button.menu-button:active {
  background-color: var(--leaf);
  border-color: transparent;
  transition: none;
}

div.offcanvas {
  border-radius: 10px 0 0 10px;
  max-width: 200px;
  background-color: var(--base);
  color: var(--text);
}

div.offcanvas-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
}

div.offcanvas-body {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

button.btn-close-white {
  border: 2px solid transparent;
  border-radius: 2em;
  opacity: 1;
  box-shadow: none;
}

button.btn-close-white:active {
  box-shadow: none;
  opacity: 0.8;
}

@media (hover :hover) and (any-pointer: fine) {
  button.btn-close-white:hover {
    background-color: transparent;
  }
}

/* Styling of child elements in this component */
div.offcanvas-body :deep(.navigation) {
  flex-direction: column;
  width: 100%;
  margin: 0;
  text-align: right;
  font-size: 1.5em;
}

div.offcanvas-body :deep(.divider) {
  width: 100%;
  height: 1px;
  margin: 20px 0;
}

div.offcanvas-body :deep(.language-switch.dropdown) {
  margin-left: 0;
  margin-right: auto;
}
</style>
