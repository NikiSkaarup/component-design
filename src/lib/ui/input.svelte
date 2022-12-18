<script lang="ts">
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
	export let autocomplete: string = 'off';

	let classes = `block w-full rounded-sm py-1 px-2 ring ring-offset-slate-300 ring-0 ring-offset-1 dark:ring-offset-slate-800 dark:bg-slate-800 text-gray-900 dark:text-gray-200 focus:outline-none dark:focus:ring-offset-slate-700 focus:ring-offset-slate-400 bg-gray-100 invalid:!ring-offset-red-800`;
</script>

<div class="req" />

{#if type === 'text'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="text"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'email'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="email"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'tel'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="tel"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'number'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="number"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'textarea'}
	<textarea
		bind:value
		class="resize-y {classes}"
		{name}
		{id}
		{autocomplete}
		{rows}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'date'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="date"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'datetime'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="datetime"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'datetime-local'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="datetime-local"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'color'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="color"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'password'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="password"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'url'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="url"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else if type === 'search'}
	<input
		bind:value
		class={classes}
		{name}
		{id}
		type="search"
		{autocomplete}
		{placeholder}
		{required}
		{pattern}
		{minlength}
		{maxlength}
	/>
{:else}
	no such input
{/if}
