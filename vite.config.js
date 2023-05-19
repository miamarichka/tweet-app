import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// export default defineConfig({
//   plugins: [react(), pluginRewriteAll()],
//   base: '/tweet-app/',
  
//   // resolve: {
//   //   alias: {
//   //     'react-dom': '@hot-loader/react-dom',
//   //   },
//   // },
// })
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), pluginRewriteAll()],
    base: '/tweet-app/',
  }

  if (command !== 'serve') {
    config.base = '/react-vite-gh-pages/'
  }

  return config
})
