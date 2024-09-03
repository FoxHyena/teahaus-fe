<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from './LoginForm.svelte';

	export let data: PageData;
</script>

<h1>Welcome! Please log in</h1>

<LoginForm data={data.form} />
