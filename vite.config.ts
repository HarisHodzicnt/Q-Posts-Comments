import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./src"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hoc": path.resolve(__dirname, "./src/hoc"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@endpoints": path.resolve(__dirname, "./src/endpoints"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
