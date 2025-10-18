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
    titulo: "Consultas a domicilio",
    descripcion: "Medicina general y de especialidad a domicilio",
  },
  {
    icon: Syringe,
    titulo: "Vacunas a domicilio",
    descripcion: "Anuales, gatitos y cachorros",
  },
  {
    icon: FlaskConical,
    titulo: "Laboratorio",
    descripcion: "Sangre, orina.",
  },
  {
    icon: PhoneCall,
    titulo: "Teleconsultas",
    descripcion: "Con 1 o 2 horas de anticipación.",
  },
  {
    icon: User,
    titulo: "Eutanasia",
    descripcion: "Dormimos tu mascota en su casa",
  },
  {
    icon: FileText,
    titulo: "Certificados de viaje",
    descripcion: "Para viajar al extranjero sin agobios",
  },
];
</script>

<div class="py-6">
  <SectionTitle title={'Servicios'} />

  <section class="bg-white text-center">
    <div
      class="mx-2 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6 lg:m-auto"
    >
      {#each servicios as s}
        <div class="flex h-full flex-col items-center text-center">
          <div
            class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white"
          >
            <s.icon class="h-7 w-7" />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">{s.titulo}</h3>
          <!-- Este es el truco -->
          <p class="text-sm text-black">{s.descripcion}</p>
        </div>
      {/each}
    </div>
  </section>
</div>
