<script setup>
import { ref } from 'vue'

const cash = ref(false)
const tab = ref(false)
const coures = ref(false)
function cashtrue() {
  cash.value = !cash.value
}
function tabtrue() {
  tab.value = !tab.value
}
function courestrue() {
  coures.value = !coures.value
}
</script>

<template>
  <div class="bg-[var(--color-background)] border-r-1 border-neutral-300/80 h-screen w-[400px]">
    <div>
      <img class="w-[150px]" src="../asset/LogoYunoaeducation.png" alt="YunoaEducation" />
    </div>
    <aside>
      <div>
        <div
          class="cursor-pointer mb-5 flex justify-center items-center gap-2 bg-[var(--color-linkbtn)] text-[var(--color-background)] py-2 rounded"
          @click="tabtrue"
        >
          <i class="fa-solid fa-table"></i>Tableau De bord<i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="text-[var(--color-linkna)] grid justify-center items-center pt-4" v-if="tab">
          <div class="pb-2">
            <RouterLink to="/firstdashbord">- Dashboard One</RouterLink>
          </div>
          <div class="pb-2">
            <RouterLink to="/seconddashbord">- Dashboard Two</RouterLink>
          </div>
          <div class="pb-2">
            <RouterLink to="/lastdashbord">- Dashboard Three</RouterLink>
          </div>
        </div>
      </div>
      <div>
        <div
          class="cursor-pointer mb-5 flex justify-center items-center gap-2 bg-[var(--color-linkbtn)] text-[var(--color-background)] py-2 rounded"
          @click="courestrue"
        >
          <i class="fa-solid fa-graduation-cap"></i>Coures<i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="text-[var(--color-linkna)] grid justify-center items-center pt-4" v-if="coures">
          <div class="pb-2">
            <RouterLink to="/coures">- Students Courses</RouterLink>
          </div>
          <div class="pb-2">
            <RouterLink to="/mentor">- Mentor Courses</RouterLink>
          </div>
          <div class="pb-2">
            <RouterLink to="/creatcours">- Create Course</RouterLink>
          </div>
        </div>
      </div>
      <div>
        <div
          class="cursor-pointer mb-5 flex justify-center items-center gap-2 bg-[var(--color-linkbtn)] text-[var(--color-background)] py-2 rounded"
        >
          <i class="fa-solid fa-person-military-to-person"></i
          ><RouterLink to="/Students">Students</RouterLink>
        </div>
      </div>
      <div>
        <div
          class="cursor-pointer flex justify-center items-center gap-2 bg-[var(--color-linkbtn)] text-[var(--color-background)] py-2 rounded"
          @click="cashtrue"
        >
          <i class="fa-solid fa-shield-halved"></i>Authentification<i
            class="fa-solid fa-chevron-down"
          ></i>
          <!-- <RouterLink to="/AsideBAr">Se connecter</RouterLink> -->
        </div>
        <div class="text-[var(--color-linkna)] grid justify-center items-center pt-4" v-if="cash">
          <div class="pb-2">
            <RouterLink to="/login">- Se connecter</RouterLink>
          </div>
          <div class="pb-2">
            <RouterLink to="/signup">- S'inscrire</RouterLink>
          </div>
          <div class="pb-2">
            <RouterLink to="/forgotpassword">- Mot de passe oublié</RouterLink>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped></style>
