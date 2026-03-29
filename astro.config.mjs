import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://nzpublicholidays.com',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});