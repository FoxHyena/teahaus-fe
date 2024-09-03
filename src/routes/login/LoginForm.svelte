<script lang="ts">
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { loginFormSchema, type LoginFormSchema } from './loginFormSchema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Button, Control, Description, Field, FieldErrors, Label } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';

	export let data: SuperValidated<Infer<LoginFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginFormSchema)
	});

	const { form: formData, enhance, message } = form;
</script>

<div class="m-auto w-1/4">
	{#if $message}
		<div class:success={$message.status == 'success'} class:error={$message.status == 'error'}>
			{$message.text}
		</div>
	{/if}
	<form method="post" action="?/login" use:enhance>
		<Field {form} name="username">
			<Control let:attrs>
				<Label>Username</Label>
				<Input {...attrs} type="text" bind:value={$formData.username} />
			</Control>
			<!-- <Description>Your username</Description> -->
			<FieldErrors />
		</Field>
		<Field {form} name="password">
			<Control let:attrs>
				<Label>Password</Label>
				<Input {...attrs} type="password" />
			</Control>
			<FieldErrors />
		</Field>
		<Button>Log In</Button>
	</form>
	<p>
		No account yet? Come swim in the tea and <a href="/register">register here</a>.
	</p>
</div>
