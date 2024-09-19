<script lang="ts">
  import config, { nav } from '$lib/config';

	import type { PageData } from "../$types";
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { browser } from "$app/environment";
	import Markdown from "$lib/components/ui/Markdown.svelte";
	import type { PageItem } from "bits-ui";
	import { onMount } from "svelte";
	import Sidebar from "./(components)/Sidebar.svelte";
	import Sidenav from "./(components)/Sidenav.svelte";
	import Header from '$lib/components/app/Header.svelte';
	export let data:PageData;

  browser && console.log(nav);
  onMount(()=>{
    console.log('loaded');
  });
</script>


<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data?.meta?.title}" />

  {#if data?.meta?.title}
  <title>{data.meta.title} - {config.site_name}</title>
  {:else}
  <title>{config.site_name}</title>
  {/if}
</svelte:head>



<Header />

<main class='flex items-stretch justify-between w-full
max-w-[1420px] mx-auto px-6'>
  <aside class='shrink-0 w-full pr-6 max-w-[280px] pt-10'>
    <Sidebar pageTree={nav} routeId='{data.path}.md' />
    <!-- <ul class='text-sm'>
      <li class='leading-5'>
        <div class='flex items-center h-9 opacity-80 hover:opacity-100'>
          <a class='grow opacity-80 text-sm font-medium'
          href={null}>Test</a>
          <Button variant='ghost' size='icon' class='size-7'>
            <ChevronDown size={18} strokeWidth={1.3} />
          </Button>
        </div>
        
        <ul class='text-sm pl-4 border-l-[1px]'>
          <li class='leading-5 opacity-80 hover:opacity-100'>
            <div class='flex items-center h-7'>
              <a class='grow' href={null}>Get started</a>
            </div>
          </li>

          <li class='leading-5 opacity-80 hover:opacity-100'>
            <div class='flex items-center h-9'>
              <a class='grow opacity-80' href={null}>测试标题 2</a>
              <Button variant='ghost' size='icon' class='size-7'>
                <ChevronDown size={18} strokeWidth={1.3} />
              </Button>
            </div>
          </li>
        </ul>
      </li>
    </ul> -->
  </aside>

  <article id='md-content' class='prose dark:prose-invert 
  w-full max-w-[860px] p-6 mt-12'>
    <!-- Title -->
    <!-- <hgroup>
      <h1 class='!mb-6'>{data.meta.title}</h1>
      <div class='text-sm opacity-80 flex items-center'>
        <span>发布于 {moment(data.meta.date).format('LL')}</span>
        {#if data.meta.revised_at}
        <span class='mx-1'>·</span>
        <span>修订于 {moment(data.meta.revised_at).format('LL')}</span>
        {/if}
        {#if data.meta.column}
        <span class='mx-1'>·</span>
        <span>{data.meta.column}</span>
        {/if}
      </div>
    </hgroup> -->
  
    <!-- Post -->
    <svelte:component this={data.content} />
    <!-- <Markdown content={content} /> -->
  </article>

  <aside class='max-xl:hidden w-full max-w-[280px] pt-10'>
    <Sidenav routeId='{data.path}.md' />
  </aside>
</main>