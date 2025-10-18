<script>
import { deviceWidth, isPhone } from "$lib";
import Hero from "$lib/components/Hero.svelte";
import Services from "$lib/components/Services.svelte";
import WhoAreWe from "$lib/components/WhoAreWe.svelte";
</script>

<div class={`max-w-[${$deviceWidth}px] mb-32`}>
  <Hero />
  <Services />
  <WhoAreWe />
</div>
