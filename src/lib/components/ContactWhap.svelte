<script>
let {
  mensaje = "¡Hola! Quisiera más info sobre tus servicios, gracias!",
  title = "WhatsApp",
} = $props();
const numero = "59892633838";
const encodedMsg = encodeURIComponent(mensaje);
const enlaceWhatsApp = `https://wa.me/${numero}?text=${encodedMsg}`;
</script>

<a
  href={enlaceWhatsApp}
  target="_blank"
  rel="noopener noreferrer"
  class="inline-flex items-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-green-600"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="mr-2 h-5 w-5"
  >
    <path
      d="M20.52 3.48A11.79 11.79 0 0012.04 0a11.93 11.93 0 00-10.6 17.66L0 24l6.52-1.7A11.93 11.93 0 0012 24h.01A11.98 11.98 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12.01 22a9.89 9.89 0 01-5.06-1.38l-.36-.22-3.86 1.01 1.03-3.76-.25-.39A9.91 9.91 0 1112 22zm5.49-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07a8.12 8.12 0 01-2.39-1.47 8.9 8.9 0 01-1.64-2.05c-.17-.3 0-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.18-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.08-.8.37s-1.05 1.03-1.05 2.52 1.08 2.92 1.23 3.13c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.19-.57-.34z"
    />
  </svg>
  {title}
</a>
