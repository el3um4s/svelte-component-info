<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let text: string = 'Hello World!';
	export let counter: number = 0;

	export let label: string;

	const dispatch = createEventDispatcher();

	function calc(e: Event) {
		dispatch('calc', e);
	}
</script>

<div
	class="container"
	on:mouseenter={() => {
		dispatch('mouse-enter');
	}}
	on:mouseleave={() => dispatch('mouse-leave')}
>
	<h3>{text}</h3>

	<div>
		<span class="label">{label}: </span> <span class="counter">{counter}</span>
	</div>

	<button on:click={(e) => calc(e)}>Click to perform action</button>

	<div>
		<slot>Slot Default</slot>
		<slot name="description">Description</slot>
	</div>
</div>

<style>
	.container {
		background-color: var(--background-color, lightcoral);
		padding: 8px;
		border-radius: 4px;
	}

	.counter {
		background-color: beige;
		color: crimson;
		font-weight: bold;
		padding: 4px;
		margin: 8px;
	}

	button {
		background-color: lightcoral;
		border: 2px solid crimson;
		color: crimson;
		margin: 8px;
	}

	button:hover {
		background-color: lightyellow;
	}
</style>
