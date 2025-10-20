<script lang="ts">
import {
  Navbar,
  NavBrand,
  NavLi,
  NavUl,
  NavHamburger,
  Button,
  Dropdown,
  DropdownItem,
} from "flowbite-svelte";
import { ChevronDownOutline } from "flowbite-svelte-icons";
import WhatsAppLink from "./WhatsAppLink.svelte";
import { isPhone, showFreqQues } from "$lib";
</script>

<Navbar class="border-b border-neutral-200">
  <!-- BRAND -->
  <NavBrand>
    <img
      src="/nomade/imagenes/nomade-favicon-dark.svg"
      alt="Nomade Favicon"
      class="h-10 w-10"
    />
    {#if !$isPhone}
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >NOMADE</span
      >
    {/if}
  </NavBrand>

  <!-- Botones -->
  <div class="flex md:order-2">
    <WhatsAppLink
      mensaje="¡Hola! Quisiera más info sobre tus servicios, gracias!"
    >
      <Button
        size="sm"
        class="mr-2 cursor-pointer rounded-full bg-emerald-500 hover:bg-emerald-600 focus:shadow-none focus:ring-0 focus:outline-none active:shadow-none"
      >
        Contacto
      </Button>
    </WhatsAppLink>
    <WhatsAppLink
      mensaje="Hola Nomade! Tengo una urgencia y necesito ayuda inmediata!"
    >
      <Button size="sm" class="cursor-pointer rounded-full">Emergencias</Button>
    </WhatsAppLink>
    <NavHamburger />
  </div>

  <!-- LINKS -->
  <NavUl class="order-1">
    <!-- Servicios dropdown -->
    <NavLi class="cursor-pointer text-base hover:!text-emerald-600">
      Servicios <ChevronDownOutline
        class="inline h-6 w-6 text-secondary-800 dark:text-white"
      />
    </NavLi>
    <Dropdown simple class="w-44">
      <DropdownItem>
        <WhatsAppLink
          mensaje="Hola! Quisiera agendar una Consulta a domicilio."
        >
          <span>Consulta a domicilio</span>
        </WhatsAppLink>
      </DropdownItem>
      <DropdownItem>
        <WhatsAppLink mensaje="Hola! Quisiera información sobre Vacunas.">
          <span>Vacunas</span>
        </WhatsAppLink>
      </DropdownItem>
      <DropdownItem>
        <WhatsAppLink mensaje="Hola! Quisiera realizar Analiticos y tests.">
          <span>Analiticos y tests</span>
        </WhatsAppLink>
      </DropdownItem>
      <DropdownItem>
        <WhatsAppLink mensaje="Hola! Quisiera agendar una Teleconsulta.">
          <span>Teleconsultas</span>
        </WhatsAppLink>
      </DropdownItem>
      <DropdownItem>
        <WhatsAppLink mensaje="Hola! Necesito información sobre Eutanasia.">
          <span>Eutanacia</span>
        </WhatsAppLink>
      </DropdownItem>
      <DropdownItem>
        <WhatsAppLink mensaje="Hola! Necesito un Certificado de exportación.">
          <span>Certificados de exportacion</span>
        </WhatsAppLink>
      </DropdownItem>
    </Dropdown>

    <NavLi class="text-base hover:!text-emerald-600">
      <WhatsAppLink mensaje="Hola! Quisiera saber más sobre ustedes.">
        <span>Nosotros</span>
      </WhatsAppLink>
    </NavLi>

    <NavLi class="text-base hover:!text-emerald-600">
      <WhatsAppLink mensaje="Hola! Quiero información sobre la Tienda.">
        <span>Tienda</span>
      </WhatsAppLink>
    </NavLi>

    <NavLi class="text-base hover:!text-emerald-600">
      <WhatsAppLink mensaje="Hola! Quiero sacar un Turno.">
        <span>Turnos</span>
      </WhatsAppLink>
    </NavLi>

    <NavLi
      class="text-base hover:!text-emerald-600"
      onclick={()=>{showFreqQues.set(true)}}
    >
      <span>Preguntas frecuentes</span>
    </NavLi>
  </NavUl>
</Navbar>
