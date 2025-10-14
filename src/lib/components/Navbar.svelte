<script lang="ts">
  import { 
    Navbar, 
    NavBrand,
    NavLi, 
    NavUl, 
    NavHamburger, 
    Button, 
    Dropdown, 
    DropdownItem
 } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Navbar class="border-b border-neutral-200">
<!-- BRAND -->
  <NavBrand  href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NOMADE</span>
  </NavBrand>

<!-- Botones -->
  <div class="flex md:order-2">
    <Button size="sm" class="bg-emerald-500 rounded-full mr-2 hover:bg-emerald-600 cursor-pointer focus:outline-none focus:ring-0 focus:shadow-none active:shadow-none" > Contacto </Button>
    <Button size="sm" class="rounded-full cursor-pointer">Emergencias</Button>
    <NavHamburger />
  </div>

  <!-- LINKS -->
  <NavUl class="order-1">

    <!-- Servicios dropdown -->
    <NavLi class="cursor-pointer text-base  hover:!text-emerald-600">
      Servicios <ChevronDownOutline class="text-secondary-800 inline h-6 w-6 dark:text-white" />
    </NavLi>
    <Dropdown simple class="w-44">
      <DropdownItem href="/">Consulta a domicilio</DropdownItem>
      <DropdownItem href="/docs/components/navbar">Vacunas</DropdownItem>
      <DropdownItem href="/">Analiticos y tests</DropdownItem>
      <DropdownItem href="/">Teleconsultas</DropdownItem>
      <DropdownItem href="/">Eutanacia</DropdownItem>
      <DropdownItem href="/">Certificados de exportacion</DropdownItem>
    </Dropdown>

    <NavLi class="text-base hover:!text-emerald-600" href="/about">Nosotros</NavLi>

    <NavLi class="text-base hover:!text-emerald-600" href="/docs/components/navbar">Tienda</NavLi>

    <NavLi class="text-base hover:!text-emerald-600" href="/pricing">Turnos</NavLi>

    <NavLi class="text-base hover:!text-emerald-600" href="/contact">Preguntas frecuentes</NavLi>

  </NavUl>
</Navbar>