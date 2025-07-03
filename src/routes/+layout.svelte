<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { headerHeight } from '$lib/stores/headerHeight';
	import NavigationHeader from '$lib/components/NavigationHeader.svelte';

	let { children } = $props();

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', $theme === 'dark');
		}
	});
</script>

<div class="relative min-h-screen" style="padding-top: {$headerHeight}px;">
	<NavigationHeader />
	{@render children()}
</div>