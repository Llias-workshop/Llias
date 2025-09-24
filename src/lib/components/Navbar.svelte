<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  let isOpen = false;
  let isDesktop = false;

  onMount(() => {
      isDesktop = window.innerWidth >= 768;
      window.addEventListener("resize", () => {
          isDesktop = window.innerWidth >= 768;
      });
  });
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="Logo.png" class="h-16" alt="Logo" />
  </a>

  <button 
      on:click={() => isOpen = !isOpen} 
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
      focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>

  <!-- منو -->
  <div 
      class={`w-full md:flex md:w-auto transition-all duration-500 ease-in-out ${isOpen || isDesktop ? "block" : "hidden"}`}
  >
    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
    md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li><a href="{base}/" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</a></li>
      <!-- <li><a href="{base}/schedule" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Schedule</a></li> -->
      <li><a href="{base}/keynotes" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Keynotes</a></li>
      <!-- <li><a href="{base}/speakers" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Speakers</a></li> -->
      <li><a href="{base}/papers" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Call for Papers</a></li>
      <li><a href="{base}/accepted-papers" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> Accepted Papers</a></li>
        <li><a href="{base}/camera-ready" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Camera Ready</a></li>
      <li><a href="{base}/program-committee" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Program Committee</a></li>
    </ul>
  </div>
</div>
</nav>
