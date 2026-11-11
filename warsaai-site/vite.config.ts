import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// The Supabase client is created at startup, so a build without these would ship a blank page.
const REQUIRED_ENV = ["VITE_SUPABASE_URL", "VITE_SUPABASE_PUBLISHABLE_KEY"];

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  if (command === "build") {
    const env = { ...process.env, ...loadEnv(mode, __dirname, "VITE_") };
    const missing = REQUIRED_ENV.filter((name) => !env[name]);
    if (missing.length) {
      throw new Error(
        `Missing environment variable(s): ${missing.join(", ")}. ` +
          "Add them to .env locally, or to the build environment of the host " +
          "(Netlify: Site configuration > Environment variables).",
      );
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Enable code splitting and chunk optimization
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks for better caching
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['framer-motion', 'lottie-react'],
            'radix-vendor': [
              '@radix-ui/react-accordion',
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-navigation-menu',
            ],
          },
        },
      },
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      // Enable source maps only in development
      sourcemap: mode === 'development',
    },
  };
});
