<script>
	import '$lib/assets/app.css';
	import Header from '$lib/ui/header.svelte';
</script>

<div
	class="min-h-screen min-w-[100vw] bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-slate-100"
>
	<div class="flex min-h-screen flex-col items-center gap-4 px-4">
		<Header />
		<main class="flex w-full max-w-5xl flex-1 flex-col">
			<slot />
		</main>
	</div>
</div>
