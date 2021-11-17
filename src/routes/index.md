<script lang="ts">
	import { SvelteInfo } from '../lib/index';
	import infoSvelteComponents from './infoSvelteComponents.json';

	import Text from "../__tests__/components/Text.svelte";

	const addTwo = () => counter = counter +2;
	let counter = 10;
	let text = "Ciao!";

	function changeText() {
		text = "hover";
	}

	function resetText() {
		text = "Ciao!"
	}
</script>

<SvelteInfo
name="SvelteInfo"
description="A Svelte Component to show info about Svelte Components"
urlPackage="@el3um4s/svelte-info"
info={infoSvelteComponents['SvelteInfo.svelte']}
/>

<Text label="Prova" {text} {counter} --background-color="lightgreen" on:calc={addTwo} on:mouse-enter={changeText} on:mouse-leave={resetText}>

<p>I'm a slot!</p>
<div slot="description">
	<p>I'm a slot too!</p>
	<p>Hello from a slot</p>
	</div>
</Text>

### Test

- [Hello.svelte](./test/hello)
- [Text.svelte](./test/text)
