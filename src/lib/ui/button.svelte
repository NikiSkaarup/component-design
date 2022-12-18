<script lang="ts">
	export let form: string | undefined = undefined;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let value: 'string' | undefined = undefined;
	export let disabled: boolean | undefined = undefined;
	export let name: string | undefined = undefined;
	export let formaction: string | undefined = undefined;
</script>

<button
	{name}
	{form}
	{type}
	{value}
	{disabled}
	{formaction}
	class="block transform rounded-sm bg-slate-200 px-2 py-1 text-gray-900 transition-transform duration-100 hover:bg-slate-300 focus:outline-none focus:ring-2
		focus:ring-slate-300 active:scale-105 active:ring dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700 dark:focus:ring-slate-700"
>
	<slot />
</button>
