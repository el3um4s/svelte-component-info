import {
	mdsvex
} from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [
		preprocess({
			style: 'postcss',
			script: 'typescript',
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		target: '#svelte',
		package: {
			dir: 'package',
			emitTypes: true
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: '/svelte-component-info'
		}
	}
};

export default config;