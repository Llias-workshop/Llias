import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
  },
};

export default config;
