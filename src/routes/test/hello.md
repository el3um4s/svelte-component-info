<script lang="ts">
	import { SvelteInfo } from '../../lib/index';
	import infoSvelteComponents from './infoSvelteComponents.json';
</script>

<SvelteInfo
name="Hello"
description="A Simple Svelte component - without props, actions, styles and slots."
urlPackage="@test-no-exist/hello-svelte"
info={infoSvelteComponents['Hello.svelte']}
/>
