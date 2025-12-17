// Volvemos a la importación más segura para compatibilidad general de TS/Vite
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // --- CONFIGURACIÓN DE VITE ---
  plugins: [react(), tailwindcss()],

  // CONFIGURACIÓN DEL PROXY (CORS FIX)
  server: {
    proxy: {
      "/api/v1/blog": {
        target: "http://localhost:8080",
        rewrite: (path) => path.replace(/^\/api\/v1\/blog/, "/api/v1/blog"),
        changeOrigin: true,
        secure: false,
      },
    },
  },

  // --- CONFIGURACIÓN DE VITEST ---
  // Esta sección debería ser aceptada por 'vitest/config'
  test: {
    environment: "jsdom",
    globals: true,
  },
});
