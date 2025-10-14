<script>
    import { deviceWidth, isPhone } from "$lib";
 import MainSection from "$lib/components/MainSection.svelte";
    import Services from "$lib/components/Services.svelte";

</script>

<div class={`max-w-[${$deviceWidth}px]`}>

    <MainSection/>
    <Services/>

</div>