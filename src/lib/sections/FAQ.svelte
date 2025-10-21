<script lang="ts">
import { fade } from "svelte/transition";
import { goto } from "$app/navigation";
import { ArrowLeft, ChevronDown } from "lucide-svelte";
import { showFreqQues } from "$lib";

type FAQ = {
  question: string;
  answer: string;
};

let faqs: FAQ[] = [
  {
    question: "¿Cómo funciona el servicio de veterinaria a domicilio?",
    answer:
      "Nos trasladamos hasta tu casa para atender a tu mascota en su ambiente. Solo necesitás agendar un turno por WhatsApp o desde nuestra web.",
  },
  {
    question: "¿Qué zonas cubren?",
    answer:
      "Atendemos en distintas zonas de la ciudad y alrededores. Consultanos si estás cerca y vemos si podemos llegar.",
  },
  {
    question: "¿Qué servicios realizan a domicilio?",
    answer:
      "Consultas clínicas, vacunación, desparasitación, controles de rutina, asesoramiento y urgencias leves.",
  },
  {
    question: "¿Atienden urgencias?",
    answer:
      "Sí, atendemos urgencias leves. En casos graves te orientaremos al centro veterinario más cercano disponible.",
  },
  {
    question: "¿Qué necesito tener preparado para la visita?",
    answer:
      "Un espacio tranquilo donde tu mascota se sienta cómoda, su libreta sanitaria y cualquier estudio previo que tengas.",
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer:
      "Efectivo, transferencia y tarjeta (a través de link de pago o lector móvil).",
  },
];

let openIndex: number | null = null;

const toggle = (index: number) => {
  openIndex = openIndex === index ? null : index;
};
</script>

<section class="mx-auto max-w-3xl px-4 py-10">
  <!-- Botón para volver al inicio -->
  <button
    onclick={()=>{showFreqQues.set(false)}}
    class="mb-6 flex cursor-pointer items-center gap-2 transition-colors hover:text-green-900"
  >
    <ArrowLeft class="h-5 w-5" />
    <span class="font-medium">Volver al inicio</span>
  </button>

  <h2 class="mb-8 text-center text-3xl font-extrabold">Preguntas Frecuentes</h2>

  <div
    class="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-md"
  >
    {#each faqs as faq, i}
      <div class="p-4 ">
        <button
          class="cursor-pointer flex w-full items-center justify-between text-left text-lg font-semibold text-gray-800 transition-colors hover:text-green-700"
          onclick={() => toggle(i)}
          aria-expanded={openIndex === i}
        >
          <span>{faq.question}</span>
          <ChevronDown
            class={`h-5 w-5 transition-transform duration-300 ${
              openIndex === i ? "rotate-180 text-green-700" : "text-gray-500"
            }`}
          />
        </button>

        {#if openIndex === i}
          <div class="mt-2 leading-relaxed text-gray-600" transition:fade>
            <p>{faq.answer}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
