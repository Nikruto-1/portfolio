import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Forward API calls to the ASP.NET Core backend during development.
      // Adjust the target to match your backend's launch profile port.
      "/api": {
        target: "https://localhost:5001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Emit to docs so GitHub Pages can serve it from the master branch.
    outDir: "../docs",
    emptyOutDir: true,
  },
});
