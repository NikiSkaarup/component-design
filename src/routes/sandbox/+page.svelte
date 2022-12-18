<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/ui/button.svelte';
	import Card from '$lib/ui/card.svelte';
	import InputGroup from '$lib/ui/input-group.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let form: any;

	let name: string = form?.name ?? '';
	let email: string = form?.email ?? '';
	let color: string = form?.color ?? '#000000';
	let date: string = form?.date ?? '';
	let datetime: string = form?.datetime ?? '';

	$: {
		if (!form && data?.formData) {
			name = data.formData.name;
			email = data.formData.email;
			color = data.formData.color;
			date = data.formData.date;
			datetime = data.formData.datetime;
		}
	}
</script>

<svelte:head>
	<title>Sandbox</title>
</svelte:head>

<div>
	<h2 class="text-xl">Sandbox</h2>
	<p>This is a sandbox for testing out components and other things.</p>
</div>

<div class="flex flex-1 flex-col items-center justify-center gap-4">
	component goes here
	<div class="flex w-full flex-col gap-4">
		<Card>
			<h3 class="text-lg" slot="header">Signup form</h3>
			<form
				slot="content"
				action="?/testForm"
				method="post"
				id="form1"
				class="grid grid-cols-1 gap-4 lg:grid-cols-2"
				use:enhance
			>
				<InputGroup
					name="name"
					label="Name"
					type="text"
					placeholder="name"
					required
					bind:value={name}
				/>
				<InputGroup
					name="email"
					label="Email"
					type="email"
					placeholder="email@example.com"
					bind:value={email}
				/>
				<InputGroup name="color" label="Color" type="color" bind:value={color} />
				<div
					class="flex h-full w-full items-center justify-center p-2"
					style="background-color: {color}"
				>
					{color}
				</div>
				<InputGroup name="password" label="Password" type="password" />
				<InputGroup name="date" label="Date" type="date" bind:value={date} />
				<InputGroup name="datetime" label="Datetime" type="datetime-local" bind:value={datetime} />
			</form>
			<svelte:fragment slot="footer">
				<Button form="form1" type="submit">Submit</Button>
				<Button form="form1" type="reset">Cancel</Button>

				{#if form?.success}
					<p>form successfully submitted</p>
					<p class="text-indigo-500">✔</p>
				{/if}
				{#if form?.missing}
					<p>form is missing fields</p>
					<p>{form?.message}</p>
				{/if}
			</svelte:fragment>
		</Card>
		<div>
			<pre>{JSON.stringify(form, null, 2)}</pre>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	</div>
</div>
