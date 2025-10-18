<script lang="ts">
import { isPhone } from "$lib";
import ContactWhap from "$lib/components/ContactWhap.svelte";
import { Heading, Button } from "flowbite-svelte";
import { ArrowRightOutline } from "flowbite-svelte-icons";

let {
  title = "Veterinaria a domicilio",
  subtitle = "Llevamos la atención directamente a tu casa, para que tu mascota se sienta cómoda y segura sin el estrés de salir o esperar en una clínica. Vos ganás comodidad y tiempo.",
  sectionButton = {
    value: "Reservar Turno",
    href: "/turnos",
  },
} = $props();

const isDev = import.meta.env.MODE === "development";
const base = import.meta.env.BASE_URL || "";

const imgSrc = isDev
  ? `${base}/imagenes/nomade_hero.png` // ruta local en dev
  : `/uploads/avatars/nomade_hero.png`; // ruta en prod

let primaryColor = "bg-green-600";
</script>

<div
  class="max-w-[1600px] m-auto flex flex-col-reverse items-center justify-between gap-10 px-6 py-6 lg:flex-row lg:px-16"
>
  <!-- Texto -->
  <div class="flex-1 text-center lg:text-left">
    <Heading
      tag="h1"
      class="mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100"
    >
      {title}
    </Heading>
    <p class="text-md max-w-prose text-gray-700 dark:text-gray-300">
      {subtitle}
    </p>

    <!-- <Button
      class="{primaryColor} mt-8 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-semibold shadow-md transition duration-300 hover:bg-emerald-500"
    >
    {sectionButton.value}
    <ArrowRightOutline class="h-5 w-5" />
  </Button> -->
    <div class="my-8 rounded-lg text-lg font-semibold">
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
        class="h-100 transform overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"
      >
        <img
          src={imgSrc}
          alt="Veterinaria a domicilio"
          class="h-auto w-full object-cover"
        />
      </div>
    </div>
  {/if}
</div>
