<section class="flex w-full flex-1 flex-col gap-2 p-2">
	{#if $$slots.header}
		<header class="flex flex-row flex-wrap gap-2">
			<slot name="header" />
		</header>
	{/if}
	{#if $$slots.content}
		<article class="flex flex-col">
			<slot name="content" />
		</article>
	{:else}
		<slot />
	{/if}
	{#if $$slots.footer}
		<footer class="flex flex-row flex-wrap gap-2">
			<slot name="footer" />
		</footer>
	{/if}
</section>
