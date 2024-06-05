import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import AutoImport from 'unplugin-auto-import/vite'

export const r = (...args) => resolve(__dirname, '.', ...args)
export default defineConfig(()=>{
  const alias = {
    '~': `${resolve(__dirname, './')}`,
    '@/': `${resolve(__dirname, 'src')}/`
  }
  return {
    plugins: [
      react(),
      reactRefresh(),
      AutoImport({
        imports: ['react', 'react-router'],
        dts: r('src/auto-imports.d.ts'),
        eslintrc:{
          enabled:true,
          filepath:'./.eslintrc-auto-import.json'
        },
      }),
    ],
    resolve: {
      alias
    },
  }
})
