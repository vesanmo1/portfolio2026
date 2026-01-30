import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite usa este archivo para configurar el proyecto.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": apunta a la carpeta src
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
