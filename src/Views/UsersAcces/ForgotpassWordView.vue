<script setup></script>

<template>
  <div class="flex justify-between items-center">
    <div class="">
      <img src="../../asset/auth-img3.png" alt="Connexion" />
    </div>
    <div class="bg-[var(--color-background)]">
      <div>
        <img class="w-[200px] h-[150px]" src="../../asset/LogoYunoaeducation.png" alt="" />
      </div>
      <div>
        <h1 class="font-medium text-3xl py-8">Mot de passe oublié?</h1>
        <p>
          Mot de passe oublié ? Veuillez saisir votre adresse e-mail. Vous recevrez un lien pour
          créer un nouveau mot de passe par e-mail.
        </p>
        <div>
          <form action="">
            <div>
              <h2 class="mb-2 mt-8 font-semibold">E-mail</h2>
              <div class="p-2 border-neutral-300 rounded-[8px] flex border items-center gap-2.5">
                <i class="fa-regular fa-envelope"></i>
                <input
                  class="w-full border-none outline-none"
                  type="text"
                  placeholder="Tapez votre adresse e-mail"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Envoyer Le Lien De Réinitialisation"
              class="w-full font-semibold text-center py-2 flex text-[var(--color-background)] my-8 rounded-3xl bg-[var(--color-linkbtn)]"
            />
          </form>
          <div class="text-center mb-12">
            <a href="" class="text-[var(--color-linkbtn)] font-medium text-[14px]"
              ><i class="fa-solid fa-arrow-left text-[var(--color-linkbtn)] mr-[1px]"></i>Retour à
              la page de connexion</a
            >
          </div>
        </div>
        <div class="flex justify-center items-center gap-5">
          <div
            class="w-10 h-10 bg-[var(--color-bgfacebok)] text-[var(--color-colorfacebok)] rounded-full flex justify-center items-center"
          >
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div
            class="w-10 h-10 bg-[var(--color-bgtwitter)] text-[var(--color-colortwitter)] rounded-full flex justify-center items-center"
          >
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div
            class="w-10 h-10 bg-[var(--color-bggeogle)] text-[var(--color-colorgeogle)] rounded-full flex justify-center items-center"
          >
            <i class="fa-brands fa-google text"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
