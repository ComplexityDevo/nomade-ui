<script>
    import SectionTitle from "$lib/components/SectionTitle.svelte";
import {
  Stethoscope,
  Syringe,
  FlaskConical,
  PhoneCall,
  User,
  FileText,
} from "lucide-svelte";

const servicios = [
  {
    icon: Stethoscope,
    titulo: "Consulta a domicilio",
    descripcion: "Medicina general y de especialidad a domicilio",
  },
  {
    icon: Syringe,
    titulo: "Nuestros productos",
    descripcion: "Anuales, gatitos y cachorros",
  },
  {
    icon: FlaskConical,
    titulo: "Toma de muestras",
    descripcion: "Sangre, orina.",
  },
  {
    icon: PhoneCall,
    titulo: "Teleconsulta",
    descripcion: "Con 1 o 2 horas de anticipación.",
  },
  {
    icon: User,
    titulo: "Eutanasia",
    descripcion: "Dormimos tu mascota en su casa",
  },
  {
    icon: FileText,
    titulo: "Certificado de viaje",
    descripcion: "Para viajar al extranjero sin agobios",
  },
  {
    icon: FileText,
    titulo: "Plan sanitario",
    descripcion: "VACUNAS-DESPARASITACIONES",
  },
  {
    icon: FileText,
    titulo: "Asesoramiento nutricional",
    descripcion: "Para viajar al extranjero sin agobios",
  },
];
</script>

<div class="px-6 py-6 lg:px-16">
  <SectionTitle title={'Servicios'} />

  <section class="bg-transparent text-center">
    <div
      class="mx-2 flex flex-wrap max-w-6xl gap-3 justify-around items-start sm: lg: lg: lg:m-auto"
    >
      {#each servicios as s}
        <div class="flex h-full flex-col items-center text-center max-w-[120px]">
          <div
            class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white"
          >
            <s.icon class="h-7 w-7" />
          </div>
          <h3 class="text-sm !font-normal text-gray-800">{s.titulo}</h3>
          <!-- Este es el truco -->
          <!-- <p class="text-sm text-black">{s.descripcion}</p> -->
        </div>
      {/each}
    </div>
  </section>
</div>
