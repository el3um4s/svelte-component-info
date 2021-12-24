<script lang="ts">
	import { SvelteInfo } from '../lib/index';
	import infoSvelteComponents from './infoSvelteComponents.json';
	import { base } from '$app/paths';
</script>

<SvelteInfo
name="SvelteInfo"
description="A Svelte Component to show info about Svelte Components"
urlPackage="@el3um4s/svelte-component-info"
info={infoSvelteComponents['SvelteInfo.svelte']}>

<span slot="about">

Show information about the properties of a Svelte component. Designed to simplify the creation of documentation - WIP

NPM link: [@el3um4s/svelte-component-info](https://www.npmjs.com/package/@el3um4s/svelte-component-info)

I recommend using it with [el3um4s/svelte-get-component-info](https://github.com/el3um4s/svelte-get-component-info)

</span>

<span slot="test">

- [Hello.svelte]({base}/test/hello)
- [Text.svelte]({base}/test/text)
- [PageTransition.svelte]({base}/test/page-transition)
- [Header.svelte]({base}/test/header)
- [Accordion.svelte]({base}/test/accordion)

</span>

</SvelteInfo>
