<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	$: isCurrentPage = $page.url.pathname === href;
</script>

<li>
	<a
		{href}
		class="block rounded-sm px-4 py-2 text-gray-900 hover:bg-slate-300 active:scale-105 dark:text-gray-100 dark:hover:bg-slate-700 {isCurrentPage
			? '!bg-slate-400 dark:!bg-slate-600'
			: 'bg-slate-200 dark:bg-slate-800'}"
	>
		<slot />
	</a>
</li>
