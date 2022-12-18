<script>
	import Button from '$lib/ui/button.svelte';
	import Card from '$lib/ui/card.svelte';
	import InputGroup from '$lib/ui/input-group.svelte';
	let color = '#000000';
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
			<svelte:fragment slot="header">title</svelte:fragment>
			<svelte:fragment slot="content">content</svelte:fragment>
			<svelte:fragment slot="footer">something something</svelte:fragment>
		</Card>
		<Card>
			<h3 class="text-lg" slot="header">Signup form</h3>
			<form slot="content" action="#" id="form1" class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<InputGroup name="name" label="Name" type="text" placeholder="name" required />
				<InputGroup name="email" label="Email" type="email" placeholder="email@example.com" />
				<InputGroup name="color" label="Color" type="color" bind:value={color} />
				<InputGroup name="color2" label="Color" type="text" bind:value={color} />
				<div
					class="flex h-full w-full items-center justify-center p-2"
					style="background-color: {color}"
				>
					{color}
				</div>
				<InputGroup name="password" label="Password" type="password" />
				<InputGroup name="date" label="Date" type="date" />
				<InputGroup name="datetime" label="Datetime" type="datetime-local" />
			</form>
			<svelte:fragment slot="footer">
				<Button form="form1" type="submit">Submit</Button>
				<Button form="form1" type="reset">Cancel</Button>
			</svelte:fragment>
		</Card>
	</div>
</div>
