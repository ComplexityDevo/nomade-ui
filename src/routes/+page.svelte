<script>
import { deviceWidth, isPhone } from "$lib";
    import Hero from "$lib/sections/Hero.svelte";
    import PetCaring from "$lib/sections/PetCaring.svelte";
    import Services from "$lib/sections/Services.svelte";
    import WhoAreWe from "$lib/sections/WhoAreWe.svelte";
</script>

<div class={`max-w-[${$deviceWidth}px] mb-32`}>
  <Hero />
  <Services />
  <WhoAreWe />
  <PetCaring />
</div>
