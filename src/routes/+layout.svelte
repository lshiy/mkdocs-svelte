<script lang='ts'>
	import '../app.pcss';

	import { ModeWatcher } from "mode-watcher";
	import { uaparser, width } from '$lib/responsive';

	import type { PageData } from './$types';
	export let data:PageData;
	$uaparser = data.uaparser;
</script>

<svelte:window bind:innerWidth={$width} />


<ModeWatcher />
<slot />