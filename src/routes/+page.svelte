<script lang="ts">
import { deviceWidth, isPhone, showFreqQues } from "$lib";
import Hero from "$lib/sections/Hero.svelte";
import PetCaring from "$lib/sections/PetCaring.svelte";
import Services from "$lib/sections/Services.svelte";
import WhoAreWe from "$lib/sections/WhoAreWe.svelte";

// const handleAction = (action: { id: string; content: any }) => {
//   switch (action.id) {
//     case "freq_questions_toggler":
//       showFreqQuestions = !showFreqQuestions;
//       break;
//   }
// };
</script>

<div class={`max-w-[${$deviceWidth}px] mb-32`}>
  {#if $showFreqQues}
    Comp show freq questions
  {:else}
    <Hero />
    <Services />
    <WhoAreWe />
    <PetCaring />
  {/if}
</div>
