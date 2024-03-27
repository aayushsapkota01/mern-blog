import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import flowbitePlugin from "flowbite/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), flowbitePlugin()],
});
