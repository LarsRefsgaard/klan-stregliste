import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: { alias: { '@': '/src' } },
	plugins: [vue(), eslintPlugin()],
});
