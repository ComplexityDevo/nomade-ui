import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import vercel from '@sveltejs/adapter-vercel';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: vercel(),
    alias: {
      $components: './src/lib/components',
      $lib: './src/lib'
    }
  }
};

export default config;