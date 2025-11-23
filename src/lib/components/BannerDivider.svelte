<script>
  export let items = [
    "Atención veterinaria a domicilio",
    "Emergencias 24/7",
    "Cuidado integral del paciente",
    "Consulta general y especializada",
    "Vacunación y control sanitario"
  ];
</script>

<div class="relative overflow-hidden py-2 bg-[#e4f3f7] border-y border-gray-300">
  <div class="animate-scroll whitespace-nowrap flex items-center gap-10">
    {#each [...items, ...items] as item}
      <span class="text-gray-700 text-sm md:text-base font-semibold">
        {item}
      </span>
    {/each}
  </div>
</div>

<style>
  /* Movimiento infinito */
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 14s linear infinite;
  }
</style>