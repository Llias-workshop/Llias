import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/Llias',  // به جای Llias، اسم ریپوزیتوری شما
    },
  },
  preprocess: sveltePreprocess(),
};

export default config;
