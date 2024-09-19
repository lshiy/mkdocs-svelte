<script lang="ts">
	import { page } from "$app/stores";
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";
  import ChevronDown from 'lucide-svelte/icons/chevron-down';

  import { onMount } from "svelte";

  export let pageTree: any[];
  export let routeId: string;

  function findRelevantNode(tree: PageTreeItem[], route: string): PageTreeItem | null {
    for (const node of tree) {
      const {key, value} = node;
      // console.log('node', node);
      // console.log(`key: ${key}, `, 'value: ', value);

      if (node.value && route.startsWith(node.value)) {
        return node;
      } else if (Array.isArray(node.children)) {
        if (node.children.some((item) => item.value && route.startsWith(item.value))) {
          return node;
        }
        for (const subNode of node.children) {
          if (typeof subNode === 'object') {
            const found = findRelevantNode([subNode], route);
            if (found) return node;
          }
        }
      }
    }
    return null;
  }

  let relevantNodes: null | PageTreeItem[] = null;
  $: relevantNodes = routeId ? [findRelevantNode(pageTree, routeId)] : pageTree;
  // $: console.log('routeId', routeId)
  // $: console.log('relevantNodes', relevantNodes)

  function getMarginPx(level: number = 0) {
    const px = (level - 1) * 20;
    return px < 0 ? '0px' : `${px}px`;
  }
</script>



{#if relevantNodes}
<div class='sticky top-6'>
  {#each relevantNodes as item}
    <div class="flex items-center h-9 opacity-80 hover:opacity-100"
    style="padding-left: {getMarginPx(item.level)};"
    class:border-l-[1px]={item.level>1}
    class:border-primary={'/'+item.value?.replace(/\.md$/, '')===$page.url.pathname.replace(/\.md$/, '')}
    class:opacity-100={'/'+item.value?.replace(/\.md$/, '')===$page.url.pathname.replace(/\.md$/, '')}
    >
      <a class="grow {item.value ? '' : 'opacity-80'} 
      text-sm {item.type === 'parent' ? 'font-semibold' : ''}"
         href={item.value ? `/${item.value.replace(/^\//, '').replace(/.md$/, '')}` : null}>
        {item.key}
      </a>
      {#if item.type === 'parent' && item.children && item.children.length>0 && item.level>0}
        <Button variant="ghost" size="icon" class={cn('size-7', item.unfold ? 'rotate-180' : '')} 
        on:click={()=>item.unfold=!item.unfold}>
          <ChevronDown size={18} strokeWidth={1.3} />
        </Button>
      {/if}
    </div>
    {#if item.children && (item.unfold || item.level===0)}
      <svelte:self pageTree={item.children} />
    {/if}
  {/each}
</div>
{/if}