<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

  let tip = '';
  onMount(()=>{
    if(!browser){return;}

    const lastErrorInfo = localStorage.getItem('app_last_error_info');
    const currentErrorInfo = `${window.location.href}::${$page.status}:${$page.error?.message}`;
    if(lastErrorInfo!==currentErrorInfo){
      tip = `我们注意到你是首次遇见该问题，请先尝试刷新重试`;
    } else {
      tip = `该问题似乎重复发生了，如果你认为这是个错误，请联系我们以反馈`;
    }
    localStorage.setItem('app_last_error_info', currentErrorInfo);
  });
</script>

<div class='relative pt-20 sm:pt-0 sm:top-48 left-0'>
  <div class="container mx-auto">
    <h1 class="text-3xl">{$page.status}: {$page.error?.message}</h1>
    {#if tip}
    <p class='text-sm opacity-80 mt-2'>{@html tip}</p>
    {/if}
  </div>
</div>