import adapter from '@sveltejs/adapter-auto';
import static_adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		//adapter: adapter()
		adapter: static_adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
