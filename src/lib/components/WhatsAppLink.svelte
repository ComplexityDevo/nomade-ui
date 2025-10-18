<script>
let {
  numero = "59892633838",
  mensaje = "Hola Nomade! Quisiera reservar una consulta",
  target = "_blank",
} = $props();

let enlace = $state()

// genera el enlace completo
$effect(() => {
  enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
});

// opcional: manejar click si querés abrir manualmente
function abrirWhatsApp() {
  window.open(enlace, target, "noopener,noreferrer");
}
</script>

<!-- Slot sin estilos: vos decidís qué mostrar -->
<span on:click={abrirWhatsApp} style="cursor:pointer;">
  <slot />
</span>
