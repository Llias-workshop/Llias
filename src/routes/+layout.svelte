<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="app">
	<main class="">
		<Navbar />
		<slot></slot>
	</main>

	<Footer />
</div>
