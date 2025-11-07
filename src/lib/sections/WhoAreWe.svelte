<script>
import SectionTitle from "$lib/components/SectionTitle.svelte";

let { nombre = "NOMADE", anios = "10" } = $props();

const imgSrc = `/images/nomade_waw.png`
</script>

<section class="w-full bg-transparent px-6 py-6 md:px-12 lg:px-24">
  <div class="mx-auto max-w-6xl">
    <SectionTitle title={'¿Quiénes somos?'} />

    <div class="grid items-center gap-10 md:grid-cols-2">
      <!-- Texto -->
      <div class="text-base leading-relaxed text-gray-700">
        <p class="mb-4">
      <span class="font-semibold">{nombre}</span> nace con la idea de <span class="font-semibold">transformar la experiencia veterinaria</span>.
    </p>

    <p>
      Nos especializamos en la <span class="font-semibold">atención a domicilio</span>, evitando el <span class="font-semibold">estrés de traslado</span>, ofreciendo una <span class="font-semibold">atención cálida y profesional</span> en la <span class="font-semibold">comodidad del hogar</span> y en el <span class="font-semibold">horario más conveniente</span>, porque sabemos que <span class="font-semibold">cuidar su salud donde están más seguros también es cuidar su bienestar</span>.
      Somos <span class="font-semibold">Gabriel y Lucía</span>, <span class="font-semibold">Médicos Veterinarios egresados en el año 2012</span>.
    </p>

    <br>

    <p>
      Hemos ofrecido y cultivado nuestros <span class="font-semibold">conocimientos médicos</span> y <span class="font-semibold">pasión</span> más allá de las fronteras con enriquecedoras experiencias realizadas en <span class="font-semibold">Nueva Zelanda, Australia, India, Argentina y Uruguay</span>.  
      Hoy en día nuestro enfoque está en <span class="font-semibold">mejorar la salud de tus compañeros de vida</span>.  
      Realizamos <span class="font-semibold">Medicina Preventiva</span> con un fuerte enfoque en la <span class="font-semibold">Nutrición</span>, la cual es base fundamental de un organismo sano.
    </p>

    <p class="mt-4 font-semibold text-gray-900">
      Cuidar de ellos no es solo nuestro trabajo, <span class="text-pink-600">es nuestra vocación ❤️</span>
    </p>
 
        <!-- <p class="mb-4">
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
        </p> -->
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
