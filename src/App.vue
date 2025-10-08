<script setup>
import Assidebar from './Asidebar/Assidebar.vue'
import HeaderComponent from './Componet/HeaderComponent.vue'
import MainComponent from './Componet/MainComponent.vue'
</script>

<template>
  <div class="flex w-screen h-screen overflow-hidden">
    <div class="">
      <Assidebar />
    </div>
    <div class="w-full flex flex-col">
      <HeaderComponent />
      <RouterView class="flex-grow overflow-y-auto" />
    </div>
  </div>
</template>

<style scoped></style>
