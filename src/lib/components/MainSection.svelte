<script lang="ts">
  import { deviceWidth, isPhone } from "$lib";
  import { Heading, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

  let title = "Veterinaria a domicilio";
  let subtitle =
    "Llevamos la atención directamente a tu casa, para que tu mascota se sienta cómoda y segura sin el estrés de salir o esperar en una clínica. Vos ganás comodidad y tiempo.";
  let sectionButton = {
    value: "Reservar Turno",
    href: "/turnos",
  };

  const isDev = import.meta.env.MODE === 'development';
  const base = import.meta.env.BASE_URL || '';

  const imgSrc = isDev 
    ? `${base}/imagenes/nomade_hero.png`  // ruta local en dev
    : `/uploads/avatars/nomade_hero.png`; // ruta en prod

  let primaryColor = "bg-green-600";

  console.log('import.meta.env.NODE_ENV', import.meta.env.NODE_ENV)
</script>

<div class="flex flex-col-reverse lg:flex-row items-start justify-between px-6 lg:px-16 py-6 gap-10">
  <!-- Texto -->
  <div class="flex-1 text-center lg:text-left">
    <Heading
      tag="h1"
      class="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100"
    >
      {title}
    </Heading>
    <p class="text-md text-gray-700 dark:text-gray-300 max-w-prose">
      {subtitle}
    </p>

    <Button
      href={sectionButton.href}
      class="{primaryColor} mt-8 px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-emerald-500 transition duration-300 flex items-center justify-center gap-2"
    >
      {sectionButton.value}
      <ArrowRightOutline class="h-5 w-5" />
    </Button>
  </div>

  <!-- Imagen -->
  {#if !$isPhone}
    <div class="flex-1 flex justify-center items-center h-100">
      <div class="h-100 overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:scale-102">
        <img
          src={imgSrc}
          alt="Veterinaria a domicilio"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
  {/if}
</div>
