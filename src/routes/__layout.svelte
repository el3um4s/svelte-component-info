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
	import '../app.css';
	import PageTransition from '../__tests__/components/PageTransition.svelte';
	import Header from '../__tests__/components/Header.svelte';

	export let key: string;

	let links = [
		{ href: '../', label: 'Home', visible: false },
		{ href: 'https://github.com/el3um4s/svelte-component-info', label: 'GitHub', visible: true },
		{
			href: 'https://www.npmjs.com/package/@el3um4s/svelte-component-info',
			label: 'NPM',
			visible: true
		}
	];

	$: if (key !== '/') {
		links[0].visible = true;
	} else {
		links[0].visible = false;
	}
</script>

<Header {links} />
<PageTransition refresh={key}>
	<slot />
</PageTransition>
