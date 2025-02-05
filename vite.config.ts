import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import dtsPlugin from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  },
  build:{
    lib:{
      entry:path.resolve(__dirname, "./src/components/index.tsx"),
      name:"RimoUI",
      fileName:'rimo-ui'
    },
    rollupOptions:{
      external:['react', 'react-dom'],
      output:{
        globals:{
          react:"React",
          "react-dom":"ReactDOM"
        }
      }
    }
  },
  plugins: [react(), dtsPlugin({rollupTypes:true})],
})
