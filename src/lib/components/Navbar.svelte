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
</script>

<Navbar class="border-b border-neutral-200">
  <!-- BRAND -->
  <NavBrand href="/">
    <img
      src="/nomade/imagenes/nomade-favicon-dark.svg"
      alt="Nomade Favicon"
      class="h-10 w-10"
    />
    <span
      class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >NOMADE</span
    >
  </NavBrand>

  <!-- Botones -->
  <div class="flex md:order-2">
    <Button
      size="sm"
      class="mr-2 cursor-pointer rounded-full bg-emerald-500 hover:bg-emerald-600 focus:shadow-none focus:ring-0 focus:outline-none active:shadow-none"
    >
      Contacto
    </Button>
    <Button size="sm" class="cursor-pointer rounded-full">Emergencias</Button>
    <NavHamburger />
  </div>

  <!-- LINKS -->
  <NavUl class="order-1">
    <!-- Servicios dropdown -->
    <NavLi class="cursor-pointer text-base  hover:!text-emerald-600">
      Servicios <ChevronDownOutline
        class="inline h-6 w-6 text-secondary-800 dark:text-white"
      />
    </NavLi>
    <Dropdown simple class="w-44">
      <DropdownItem href="/">Consulta a domicilio</DropdownItem>
      <DropdownItem href="/docs/components/navbar">Vacunas</DropdownItem>
      <DropdownItem href="/">Analiticos y tests</DropdownItem>
      <DropdownItem href="/">Teleconsultas</DropdownItem>
      <DropdownItem href="/">Eutanacia</DropdownItem>
      <DropdownItem href="/">Certificados de exportacion</DropdownItem>
    </Dropdown>

    <NavLi class="text-base hover:!text-emerald-600" href="/about"
      >Nosotros</NavLi
    >

    <NavLi
      class="text-base hover:!text-emerald-600"
      href="/docs/components/navbar">Tienda</NavLi
    >

    <NavLi class="text-base hover:!text-emerald-600" href="/pricing"
      >Turnos</NavLi
    >

    <NavLi class="text-base hover:!text-emerald-600" href="/contact"
      >Preguntas frecuentes</NavLi
    >
  </NavUl>
</Navbar>
