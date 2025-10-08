<script setup></script>

<template>
  <div class="w-full">
    <div
      class="bg-[var(--color-background)] flex justify-between items-center py-5 border-b-1 border-neutral-300/80"
    >
      <RouterLink :to="'/'" class="ml-20">Home</RouterLink>
      <RouterLink :to="'/search'" class="">
        <form
          action=""
          class="rounded-full w-100 flex justify-between items-center bg-[var(--color-primary)] px-7 py-[10px]"
        >
          <input type="text" placeholder="Search" class="border-none focus:outline-none w-full" />
          <i class="fa-solid fa-magnifying-glass text-black opacity-10"></i>
        </form>
      </RouterLink>
      <nav class="flex justify-end items-center gap-5">
        <RouterLink
          :to="'/Language'"
          class="bg-[var(--color-primary)] w-[50px] h-[50px] rounded-full flex justify-center items-center"
          ><i class="fa-solid fa-language"></i
        ></RouterLink>
        <RouterLink
          :to="'/Alert'"
          class="bg-[var(--color-primary)] w-[50px] h-[50px] rounded-full flex justify-center items-center"
          ><i class="fa-solid fa-bell"></i>
        </RouterLink>
        <RouterLink to="/Profile" class="">
          <div
            class="flex justify-between items-center gap-5 mr-10 border-black/25 border-1 rounded-full px-1.5 py-1"
          >
            <div
              class="bg-[var(--color-primary)] w-[40px] h-[40px] rounded-full flex justify-center items-center"
            >
              <i class="fa-solid fa-user text-black/80"></i>
            </div>
            <i class="fa-solid fa-chevron-down text-black opacity-50"></i>
          </div>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
