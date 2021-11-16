<script>
	import '../../app.css';
</script>

[home](../)

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply overflow-auto;
		@apply w-screen h-screen flex-1 flex flex-col p-1 box-border;
	}
</style>
