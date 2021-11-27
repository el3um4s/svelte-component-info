<script lang="ts">
	import { SvelteInfo } from '../lib/index';
	import infoSvelteComponents from './infoSvelteComponents.json';
	import { base } from '$app/paths';
</script>

<SvelteInfo
name="SvelteInfo"
description="A Svelte Component to show info about Svelte Components"
urlPackage="@el3um4s/svelte-info"
info={infoSvelteComponents['SvelteInfo.svelte']}
/>

### Test

- [Hello.svelte]({base}/test/hello)
- [Text.svelte]({base}/test/text)
- [PageTransition.svelte]({base}/test/page-transition)
- [Header.svelte]({base}/test/header)
