import { get } from 'svelte/store';
import type { ServerInit } from '@sveltejs/kit';
import { deviceWidth, isPhone } from '$lib';

let resizeTimeout: number | undefined;

function check() {
  isPhone.set(window.innerWidth < 960);
  deviceWidth.set(window.innerWidth);
}

// Debounce wrapper
function debounceCheck() {
  // limpia el timeout anterior si existe
  if (resizeTimeout) clearTimeout(resizeTimeout);

  // espera 1.5 segundos antes de ejecutar check
  resizeTimeout = window.setTimeout(() => {
    check();
  }, 1500);
}

export const init: ServerInit = async () => {
  console.log('HOOKS')

  check(); // check inicial
  window.addEventListener('resize', debounceCheck); // ahora con debounce
};
