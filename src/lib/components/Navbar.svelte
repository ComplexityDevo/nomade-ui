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

<Navbar class="border-b border-neutral-200 bg-[#80abbd]">
  <!-- BRAND -->
  <NavBrand onclick={()=>{showFreqQues.set(false)}} class="cursor-pointer">
    <img
      src="/images/nomade-favicon-dark.svg"
      alt="Nomade Favicon"
      class="h-12 w-12"
    />
    {#if !$isPhone}
      <span
        class="self-center text-3xl font-semibold whitespace-nowrap text-white dark:text-white"
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
        class="mr-2 cursor-pointer rounded-xl
         bg-blue-500 px-3
         py-1 text-sm
         hover:bg-blue-700 focus:shadow-none focus:ring-0 focus:outline-none
         active:shadow-none md:px-4 md:py-2 md:text-xl"
      >
        Contacto
      </Button>
    </WhatsAppLink>
    <WhatsAppLink
      mensaje="Hola Nomade! Tengo una urgencia y necesito ayuda inmediata!"
    >
      <Button
        size="sm"
        class="cursor-pointer rounded-xl
         px-3 py-1
         text-sm md:px-4 md:py-2 md:text-xl"
      >
        Emergencias
      </Button>
    </WhatsAppLink>
  </div>
  <NavHamburger />

  <!-- LINKS -->
  <NavUl class="order-1 ">
    <!-- Servicios dropdown -->
    <NavLi
      class="relative text-xl text-blue-950 md:text-white hover:md:!text-blue-950"
    >
      <span
        >Servicios <ChevronDownOutline
          class="inline h-6 w-6 text-secondary-800 dark:text-white"
        />
      </span>
      <Dropdown
        simple
        placement="bottom-start"
        strategy="absolute"
        class="z-50"
      >
        <!-- Trigger -->
        <div slot="trigger" class="flex cursor-pointer items-center gap-1">
          Servicios
          <ChevronDownOutline
            class="h-6 w-6 text-secondary-800 md:text-white"
          />
        </div>

        <!-- Items -->
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
            <span>Eutanasia</span>
          </WhatsAppLink>
        </DropdownItem>

        <DropdownItem>
          <WhatsAppLink mensaje="Hola! Necesito un Certificado de exportación.">
            <span>Certificados de exportacion</span>
          </WhatsAppLink>
        </DropdownItem>
      </Dropdown>
    </NavLi>
    <NavLi
      class="text-xl text-blue-950 md:text-white hover:md:!text-blue-950  "
    >
      <WhatsAppLink mensaje="Hola! Quisiera saber más sobre ustedes.">
        <span>Nosotros</span>
      </WhatsAppLink>
    </NavLi>

    <NavLi class="text-xl text-blue-950 md:text-white hover:md:!text-blue-950">
      <WhatsAppLink mensaje="Hola! Quiero información sobre la Tienda.">
        <span>Tienda</span>
      </WhatsAppLink>
    </NavLi>

    <NavLi class="text-xl text-blue-950 md:text-white hover:md:!text-blue-950">
      <WhatsAppLink mensaje="Hola! Quiero sacar un Turno.">
        <span>Turnos</span>
      </WhatsAppLink>
    </NavLi>

    <NavLi
      class="cursor-pointer text-xl text-blue-950 md:text-white hover:md:!text-blue-950"
      onclick={()=>{showFreqQues.set(true)}}
    >
      <span>Preguntas frecuentes</span>
    </NavLi>
  </NavUl>
</Navbar>
