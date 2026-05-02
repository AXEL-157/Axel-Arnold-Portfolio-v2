import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mon-portfolio/", // 🔥 ton repo GitHub EXACT
  plugins: [react()],
});
