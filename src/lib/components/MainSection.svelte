<script lang="ts">
  import { Heading, P, Button, Img } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
//   import img from "../../../static/imagenes/imgInicio.jpg"
</script>

<div class="flex flex-row mt-5 p-10">
    <div class="text-center basis-1/2 ">
      <Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">Veterinaria a domicilio</Heading>
      <P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">Permitimos llevar la atención directamente a tu casa, así tu mascota se siente tranquila y cómoda sin el estrés de salir o esperar en una clínica. Además, vos ganás comodidad y tiempo</P>
      <Button href="/" class="bg-emerald-500 hover:bg-emerald-600 cursor-pointer focus:outline-none focus:ring-0 focus:shadow-none active:shadow-none">
        Turnos
        <ArrowRightOutline class="ms-2 h-6 w-6" />
      </Button>
    </div>

    <div class="basis-1/2 inline-block align-middle text-center border-1  h-100 p-8">
         <img src="/imagenes/imgInicio.jpg" alt="sample 1" class=""/>
    </div>
</div>