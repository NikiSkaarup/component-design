<script lang="ts">
	import Input from './input.svelte';

	export let name: string;
	export let id: string = name;
	export let required: boolean | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let pattern: string | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let type:
		| 'text'
		| 'email'
		| 'tel'
		| 'textarea'
		| 'number'
		| 'date'
		| 'datetime'
		| 'datetime-local'
		| 'color'
		| 'password'
		| 'url'
		| 'search' = 'text';
	export let rows: number = 10;
	export let value = '';
	export let label: string;
</script>

<div class="w-full">
	<label for={id} class="text-gray-900 dark:text-gray-200">{label}</label>
	<Input
		bind:value
		{name}
		{id}
		{type}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
		{rows}
	/>
</div>
