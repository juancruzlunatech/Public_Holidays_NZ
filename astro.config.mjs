import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://juancruzlunatech.github.io',
  base: '/Public_Holidays_NZ',
  vite: {
    plugins: [tailwindcss()]
  }
});