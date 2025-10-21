<script lang="ts">
import { deviceWidth, isPhone, showFreqQues } from "$lib";
import Hero from "$lib/sections/Hero.svelte";
import PetCaring from "$lib/sections/PetCaring.svelte";
import Services from "$lib/sections/Services.svelte";
import WhoAreWe from "$lib/sections/WhoAreWe.svelte";
import FAQ from "$lib/sections/FAQ.svelte";
import { PawPrint } from "lucide-svelte"; // Importa el ícono 'paw-print'

// const handleAction = (action: { id: string; content: any }) => {
//   switch (action.id) {
//     case "freq_questions_toggler":
//       showFreqQuestions = !showFreqQuestions;
//       break;
//   }
// };
</script>

<div class={`max-w-[${$deviceWidth}px] mb-32`}>
  <section>
    <!-- Fondo decorativo -->
    {#if !$isPhone}
      <PawPrint
        class="pointer-events-none absolute top-25 left-5 -z-10 h-48 w-48 text-green-300 opacity-20"
        aria-hidden="true"
      />
    {/if}
    <PawPrint
      class=" pointer-events-none absolute right-16 bottom-20 -z-10 h-64 w-64 text-green-200 opacity-15"
      aria-hidden="true"
    />

    {#if $showFreqQues}
      <FAQ />
    {:else}
      <Hero />
      <Services />
      <WhoAreWe />
      <PetCaring />
    {/if}
  </section>
</div>
