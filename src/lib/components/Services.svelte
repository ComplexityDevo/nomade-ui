<script>
    import { Card, Heading } from "flowbite-svelte";

    let servicios = [
        {servicio:"consulta a domicilio", description: "Medicina general y de especialidad a domicilio"},
        {servicio:"Vacunas", description: "Medicina general y de especialidad a domicilio"},
        {servicio:"Laboratorio", description: "Medicina general y de especialidad a domicilio"},
        {servicio:"Teleconsulta", description: "Medicina general y de especialidad a domicilio"},
        {servicio:"Eutanasia", description: "Medicina general y de especialidad a domicilio"},
        {servicio:"certificados de viaje", description: "Medicina general y de especialidad a domicilio"},      
    ]                                                                                                  
</script>

<div class="">

    <Heading tag="h1" class="mb-4 text-2xl font-extrabold  md:text-5xl lg:text-5xl text-center pt-10">Servicios</Heading>

    <div class="flex flex-row justify-around mt-10">
        {#each servicios as servicio }
            <div class="flex justify-center">
                <Card class="max-w-[250px] p-6">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
    </svg>
    </div>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{servicio.servicio}</h5>
    <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">{servicio.description}</p>
  </Card>
</div>
        {/each}
    </div>
</div>