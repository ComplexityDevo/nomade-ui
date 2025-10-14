<script>
import { Heading } from "flowbite-svelte";
import { Stethoscope, Syringe, FlaskConical, PhoneCall, User, FileText } from 'lucide-svelte';

const servicios = [
    {
      icon: Stethoscope,
      titulo: 'Consultas a domicilio',
      descripcion: 'Medicina general y de especialidad a domicilio'
    },
    {
      icon: Syringe,
      titulo: 'Vacunas a domicilio',
      descripcion: 'Anuales, gatitos y cachorros'
    },
    {
      icon: FlaskConical,
      titulo: 'Laboratorio',
      descripcion: 'Sangre, orina.'
    },
    {
      icon: PhoneCall,
      titulo: 'Teleconsultas',
      descripcion: 'Con 1 o 2 horas de anticipación.'
    },
    {
      icon: User,
      titulo: 'Eutanasia',
      descripcion: 'Dormimos tu mascota en su casa'
    },
    {
      icon: FileText,
      titulo: 'Certificados de viaje',
      descripcion: 'Para viajar al extranjero sin agobios'
    }
  ]
</script>

<div class=" mb-60">
  <Heading
    tag="h1"
    class="mb-4 pt-10 text-center  text-2xl font-extrabold md:text-5xl lg:text-5xl"
    >Servicios</Heading
  >
  
  <section class="py-16 bg-white text-center">

  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
    {#each servicios as s}
      <div class="flex flex-col items-center text-center">
        <div class={`flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 bg-green-600`}>
          <s.icon class="w-7 h-7" />
        </div>
        <h3 class="font-semibold text-gray-800 text-lg">{s.titulo}</h3>
        <p class="text-gray-500 text-sm mt-1">{s.descripcion}</p>
      </div>
    {/each}
  </div>
</section>
</div>
