<script lang='ts'>
  import config, { nav } from '$lib/config';
	import { cn } from '$lib/utils';
  export let isHero = false;
  
  function getHref(item:PageTreeItem) {
    let href = item.value;
    
    if (!href && item.children && item.children.length > 0) {
      href = item.children[0].value;
    }
    
    if (href) {
      return `/${href.replace(/^\//, '').replace(/.md$/, '')}`;
    }
    
    return null;
  }
</script>



<header class={cn('', isHero ? 'absolute top-0 left-0 w-full z-[999]' : 'bg-secondary')}>
  <nav class='max-w-full lg:max-w-[1420px] overflow-hidden 
  mx-auto py-3 px-6'>
    <ul class='flex font-light gap-6 text-[0.92rem]'>
      {#each nav as item(item.key)}
      <li class='opacity-85 hover:opacity-100 transition-opacity'>
        <a href={getHref(item)}>{item.key}</a>
      </li>
      {/each}
    </ul>
  </nav>
</header>