<script context="module">
	export const load = async ({ page }) => {
		return {
			props: {
				key: page.path
			}
		};
	};
</script>

<script lang="ts">
	import '../../app.css';
	import GoHome from '../../__tests__/components/GoHome.svelte';

	import PageTransition from '../../__tests__/components/PageTransition.svelte';

	export let key: string;
</script>

<GoHome />

<PageTransition refresh={key}>
	<slot />
</PageTransition>
