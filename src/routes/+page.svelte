<script lang="ts">
import { deviceWidth, isPhone, showFreqQues } from "$lib";
import Hero from "$lib/sections/Hero.svelte";
import PetCaring from "$lib/sections/PetCaring.svelte";
import Services from "$lib/sections/Services.svelte";
import WhoAreWe from "$lib/sections/WhoAreWe.svelte";
import FAQ from "$lib/sections/FAQ.svelte";
import { PawPrint } from "lucide-svelte"; // Importa el ícono 'paw-print'
    import { img } from "flowbite-svelte";

const imgSrc = `/images/nomade_hero2.png`

// const handleAction = (action: { id: string; content: any }) => {
//   switch (action.id) {
//     case "freq_questions_toggler":
//       showFreqQuestions = !showFreqQuestions;
//       break;
//   }
// };
</script>

<div class={`max-w-[${$deviceWidth}px] pb-16 `}>
  <section class="bg">
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

    <style>
      .bg {
        background-image: url('/images/bg_hero3.png');
        background-size: cover;       /* o contain, según corresponda */
        background-repeat: no-repeat; 
        background-position: center;
        min-height: 100vh;
        width: 100%;
      }
    </style>