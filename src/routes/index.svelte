<script lang="ts">
	import { SvelteInfo } from '../lib/index';
	import infoSvelteComponents from './infoSvelteComponents.json';
</script>

<main>
	<SvelteInfo
		name="SvelteInfo"
		description="A Svelte Component to show info about Svelte Components"
		urlPackage="@el3um4s/svelte-info"
		info={infoSvelteComponents['SvelteInfo.svelte']}
	/>
</main>
