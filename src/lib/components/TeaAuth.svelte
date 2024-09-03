<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import PocketBase from 'pocketbase';

	const pb = new PocketBase('http://127.0.0.1:8090');
</script>

{#if pb.authStore.isValid}
	<slot></slot>
{:else}
	redirect(307, '/login')
{/if}
