<script lang="ts">
import { isPhone } from "$lib";
import ContactWhap from "$lib/components/ContactWhap.svelte";
import { Heading } from "flowbite-svelte";
import { PawPrint,Cross } from "lucide-svelte";

let {
  title = "Veterinaria a domicilio",
  subtitle = `En <strong>NOMADE</strong> nuestro objetivo es brindar <strong>atención veterinaria profesional</strong>, <strong>inmediata</strong> y de <strong>calidad</strong>, en la comodidad del hogar. <br><br> Buscamos <strong>reducir el estrés</strong> del paciente, <strong>facilitando el acceso</strong> a la atención médica y acompañando a cada familia con <strong>empatía</strong> y <strong>compromiso</strong>, promoviendo una <strong>medicina integrativa</strong> que <strong>prioriza el bienestar</strong> en cada etapa de la vida.`,
  sectionButton = {
    value: "Reservar Turno",
    href: "/turnos",
  },
} = $props();

const imgSrc = `/images/nomade_hero2.png` // ruta local en dev

</script>
 <!-- Fondo decorativo -->
    {#if !$isPhone}
      <Cross
        class="pointer-events-none absolute top-120 left-10 z-10 h-64 w-64 text-blue-300 opacity-15"
        aria-hidden="true"
      />
    {/if}
<div
  class="m-auto flex max-w-[1600px] flex-col-reverse items-center justify-between px-6 py-6 lg:flex-row lg:px-16 "
>
  <!-- Texto -->
  <div class="flex-1 text-center lg:text-left bg-transparent">
    <Heading
      tag="h1"
      class="mb-2 text-6xl leading-tight font-black text-blue-950 md:text-5xl lg:text-6xl text-center dark:text-gray-100"
    >
      {title}
    </Heading>
    <p class="text-md max-w-[80%] text-center text-gray-700 dark:text-gray-300 display-block m-auto">
      {@html subtitle}
    </p>

    <!-- <Button
      class="{primaryColor} mt-8 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-semibold shadow-md transition duration-300 hover:bg-emerald-500"
    >
    {sectionButton.value}
    <ArrowRightOutline class="h-5 w-5" />
  </Button> -->

    <div class="contact-wrapper">
  <ContactWhap
    title={sectionButton.value}
    mensaje={"Hola Nomade! Quisiera reservar una consulta"}
  />
</div>
  </div>

  <!-- Imagen -->
  {#if !$isPhone}
    <div class="flex h-100 flex-1 items-center justify-center">
      <div
        class="mask-y-from-98% mask-y-to-100% h-100 transform overflow-hidden rounded-xl shadow-xl transition duration-500 hover:scale-102"
      >
        <img
          src={imgSrc}
          alt="Veterinaria a domicilio"
          class="h-auto w-full object-cover scale-125 translate-y-[-35%] "
        />
      </div>
    </div>
  {/if}
</div>

<style>
  /* keyframes y clase local (carga inmediata) */
  @keyframes wiggleX {
    0%, 100% { transform: translateX(0); }
    50%     { transform: translateX(6px); }
  }

  .contact-wrapper {
   /* evita que ocupe todo el ancho si querés */
    animation: wiggleX 2.5s ease-in-out infinite;
    /* opcionales para suavizar */
    will-change: transform;
    align-self: center;
    max-width: 200px ;
    margin: 30px auto ;
  }
</style>
