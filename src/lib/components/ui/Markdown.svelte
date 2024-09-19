<script lang="ts">
	import { marked } from 'marked';

	const renderer = new marked.Renderer();
	// link 重写
	const linkRenderer = renderer.link;
	renderer.link = (href, title, text) => {
		const html = linkRenderer.call(renderer, href, title, text);
		return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
	};

	let html = '';
	export let content: string;
	$: if(content){
		html = marked.parse(content, { renderer });
	}
</script>

{#if content}
{@html html}
{:else}
<div class="flex flex-col gap-4 w-full">
  <div class="skeleton h-4 w-1/3"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
{/if}