/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Apercu derriere un proxy (bac a sable, tunnel) : on autorise les
  // hotes externes. Sans cela, Vite renvoie 403 sur l'hote du proxy.
  server: { host: true, allowedHosts: true },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
  },
});
