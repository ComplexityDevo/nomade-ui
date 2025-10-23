<script>
import SectionTitle from "$lib/components/SectionTitle.svelte";

let { nombre = "NOMADE", anios = "10" } = $props();

const isDev = import.meta.env.MODE === "development";
const base = import.meta.env.BASE_URL || "";

const imgSrc = isDev
  ? `${base}/images/nomade_waw.png` // ruta local en dev
  : `/uploads/avatars/nomade_waw.png`; // ruta en prod
</script>

<section class="w-full bg-white px-6 py-6 md:px-12 lg:px-24">
  <div class="mx-auto max-w-6xl">
    <SectionTitle title={'¿Quiénes somos?'} />

    <div class="grid items-center gap-10 md:grid-cols-2">
      <!-- Texto -->
      <div class="text-base leading-relaxed text-gray-700">
        <p class="mb-4">
          ¡Hola! Soy <span class="font-semibold">{nombre}</span>, médica
          veterinaria con pasión por los animales y más de {anios} años de experiencia
          en el cuidado de mascotas.
        </p>

        <p class="mb-4">
          Creé este servicio de <span class="font-semibold"
            >veterinaria móvil</span
          >
          para que tu compañero reciba atención de calidad
          <span class="font-semibold">sin salir de casa</span>, en un ambiente
          tranquilo y sin estrés.
        </p>

        <p class="mb-4">
          Mi objetivo es ofrecer una atención personalizada, basada en el
          cariño, la paciencia y la prevención. Creo que cada mascota es única y
          merece ser tratada con respeto, empatía y dedicación.
        </p>

        <p class="mt-4 font-semibold text-gray-900">
          Cuidar de ellos no es solo mi trabajo, <span class="text-pink-600"
            >es mi vocación ❤️</span
          >
        </p>
      </div>

      <!-- Imagen -->
      <div
        class="flex transform justify-center overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"
      >
        <img
          src={imgSrc}
          alt="Veterinaria con gato"
          class="max-h-[400px] w-full rounded-2xl object-cover shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
