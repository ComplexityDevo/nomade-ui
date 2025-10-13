import flowbite from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    flowbite,
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
