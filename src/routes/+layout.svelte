<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', $theme === 'dark');
		}
	});
</script>

<div class="relative min-h-screen">
	<div class="absolute top-4 right-4 z-10">
		<ThemeToggle />
	</div>
	{@render children()}
</div>