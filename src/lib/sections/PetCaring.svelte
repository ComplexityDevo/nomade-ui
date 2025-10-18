<script>
    import SectionTitle from "$lib/components/SectionTitle.svelte";


let {
  titulo = "Tu mascota, segura y tranquila en su hogar",
  subtitulo = "Atención veterinaria profesional sin estrés, sin traslados, sin esperas.",
} = $props();

const isDev = import.meta.env.MODE === "development";
const base = import.meta.env.BASE_URL || "";

const imgSrc = isDev
  ? `${base}/imagenes/nomade_care.png` // ruta local en dev
  : `/uploads/avatars/nomade_care.png`; // ruta en prod
</script>

<section class="w-full bg-white px-6 py-16 text-center md:px-12 lg:px-24">
  <div class="mx-auto max-w-4xl">
    <SectionTitle title={titulo} />
    <p class="mb-10 text-gray-500">{subtitulo}</p>

    <div class="flex justify-center ">
      <img
        src={imgSrc}
        alt="Veterinaria a domicilio"
        class="max-h-[400px] w-full rounded-xl object-cover shadow-lg md:w-3/4 lg:w-2/3"
        loading="lazy"
      />
    </div>
  </div>
</section>
