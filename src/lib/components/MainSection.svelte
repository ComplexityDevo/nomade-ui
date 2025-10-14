<script lang="ts">
  import { Heading, P, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  let primaryColor = 'bg-green-600'
</script>

<div class="flex flex-row mt-5 p-10 justify-around">
    <div class="text-center basis-1/2 ">
      <Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">Veterinaria a domicilio</Heading>
      <P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">Permitimos llevar la atención directamente a tu casa, así tu mascota se siente tranquila y cómoda sin el estrés de salir o esperar en una clínica. Además, vos ganás comodidad y tiempo</P>
      <Button href="/" class="{primaryColor} hover:bg-emerald-600 cursor-pointer focus:outline-none focus:ring-0 focus:shadow-none active:shadow-none mt-10">
        Turnos
        <ArrowRightOutline class="ms-2 h-6 w-6" />
      </Button>
    </div>

    <div class="w-full h-100 flex justify-center items-center overflow-hidden basis-1/3">
        <img src="/imagenes/imgInicio.jpg" alt="Imagen" class="object-cover w-full h-full rounded-lg" />
    </div>
</div>