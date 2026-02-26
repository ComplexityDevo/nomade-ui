import flowbite from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggleX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        wiggleX: 'wiggleX 2.5s ease-in-out infinite',
      },
      
    },
  },
  plugins: [
    flowbite,
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
