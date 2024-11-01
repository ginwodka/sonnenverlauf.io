import { defineConfig } from 'vite'

export default defineConfig({
  base: '/sonnenverlauf.io/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'three-examples': [
            'three/examples/jsm/controls/OrbitControls', 
            'three/examples/jsm/loaders/GLTFLoader',
            'three/examples/jsm/loaders/DRACOLoader',
            'three/examples/jsm/objects/Sky'
          ]
        }
      }
    }
  },
  publicDir: 'public'
})