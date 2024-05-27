import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://glassfish.maines.mx:8181",
        changeOrigin: true,
        secure: false, // Esto es necesario si el servidor utiliza un certificado autofirmado
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
