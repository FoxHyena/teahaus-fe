<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let { user } = data;
</script>

<h1>Awoo uwu</h1>
<h2>Hello {JSON.stringify(user)}</h2>
