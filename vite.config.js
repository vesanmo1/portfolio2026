import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite usa este archivo para configurar el proyecto.
export default defineConfig({
  // En GitHub Pages, el sitio vive bajo `/<repo>/` (no en `/`).
  // Si se construye en GitHub Actions, inferimos automáticamente el repo
  // (owner/repo) para evitar 404 de assets.
  //
  // Puedes forzar el base path con `VITE_BASE` (útil con dominio propio).
  base:
    process.env.VITE_BASE ??
    (process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
      : "/"),
  plugins: [react()],
  resolve: {
    alias: {
      // "@": apunta a la carpeta src
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
