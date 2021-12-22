<script lang="ts">
	export let code: string;
</script>

{#if code}
	<div>
		{code}
	</div>
{/if}

<style lang="postcss">
	div {
		@apply font-mono pl-2  mb-2 mt-2 flex flex-col border p-2 m-2;
		border-radius: 0 0.75rem 0 0.75rem;
		border-color: var(--code-bash-background-color, var(--text-color, theme('colors.gray.800')));
		color: var(--code-bash-text-color, var(--text-color, theme('colors.gray.800')));
		background-color: var(
			--code-bash-background-color,
			var(--background-color, theme('colors.gray.50'))
		);
	}
</style>
