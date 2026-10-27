import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// './' = relative base: works on https://<user>.github.io/<repo>/ and on custom domains.
export default defineConfig({ base: './', plugins: [react()] })
