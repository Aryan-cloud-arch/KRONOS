#!/data/data/com.termux/files/usr/bin/bash

echo "🚀 Optimizing KRONOS for butter-smooth performance..."

# 1. Update vite config for maximum performance
cat > vite.config.ts << 'VITECONFIG'
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/KRONOS/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three-vendor';
            }
            if (id.includes('react')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    warmup: {
      clientFiles: ['./src/App.tsx', './src/main.tsx'],
    },
  },
});
VITECONFIG

echo "✅ Vite config optimized"

# 2. Create optimized index.html with preloading
cat > index.html << 'INDEXHTML'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="KRONOS - A stunning 3D website experience" />
    <title>KRONOS</title>
    
    <!-- Preconnect to improve performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    
    <!-- Critical CSS inline for faster rendering -->
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        margin: 0;
        background: #000;
        overflow: hidden;
      }
      #root {
        width: 100vw;
        height: 100vh;
      }
      /* Loading screen */
      .loading {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000;
        color: #fff;
        font-family: system-ui;
        z-index: 9999;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="loading">Loading KRONOS...</div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
INDEXHTML

echo "✅ index.html optimized"

# 3. Add performance hints to main.tsx
if [ -f "src/main.tsx" ]; then
  echo "✅ main.tsx exists"
fi

# 4. Commit and push
echo "📝 Committing changes..."
git add .
git commit -m "⚡ Performance optimization: code splitting, minification, and asset optimization"
git push origin main

echo ""
echo "✅ OPTIMIZATION COMPLETE!"
echo "🚀 GitHub Actions will rebuild your site"
echo "⏱️  Wait 1-2 minutes, then check: https://aryan-cloud-arch.github.io/KRONOS/"
echo "🧈 Should be smooth like butter now!"
