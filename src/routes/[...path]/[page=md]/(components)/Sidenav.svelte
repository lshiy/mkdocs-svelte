<script lang='ts'>
	import { browser } from "$app/environment";
	import { onMount } from "svelte";


  export let routeId = '';
  let loaded = false;
  let nodes:NodeItem[]|undefined = undefined, nodeIndex = -1;

  onMount(()=>{
    if(browser){getNodes();}
  });
  $: if(routeId && loaded){
    getNodes();
  }


  function getNodes(root?:Element){
    if(!root){root = document.querySelector('#md-content')!;}
    nodes = [];

    root.querySelectorAll('h2,h3,h4,h5,h6').forEach((elem)=>{
      const level = Number(elem.nodeName.replace(/[^\d]/g,''));
      const title = elem.textContent;
      if(!title){return;}

      elem.id = title;
      elem.innerHTML = `<a class='not-prose' href='#${title}'>${title}</a>`;
      nodes!.push({
        node: elem,
        level, title,
        status: -1
      });
    });

    loaded = true;
  }


  let io:IntersectionObserver, isListShow:boolean = false;
  if(browser){
    io = new IntersectionObserver(entries => {
      let irFlag = false;

      entries.forEach(entry => {
        if(!nodes){return;}

        let node = entry.target;
        let index = nodes.findIndex(n=>n.node===node);
        let _node = nodes[index], 
        _prev = nodes[index-1], _next = nodes[index+1];
        if(!_node){return;}
        _node.status = entry.intersectionRatio > 0 ? 1 : 0;
        //console.log(_node, entry.intersectionRatio, `index: ${nodeIndex}`);

        // 进入视窗
        if(entry.intersectionRatio > 0){
          _node.viewed = true;

          if(_prev && _prev.status>0){return;}
          if(irFlag){return;}
          irFlag = true;

          nodeIndex = index;
          return;
        }
        
        // 移出视窗
        if(_next && _next.status > 0){
          nodeIndex = index+1;
        }
        // 如果是最后一个元素移出视野
        const total = nodes.length;
        const lastNode = nodes[total-1].node as HTMLElement;
        if(node===lastNode && nodeIndex===total-1){
          nodeIndex = window.scrollY>=lastNode.offsetTop ? total : total-1;
        }
      });
    });

    // 移除观察元素
    // io.unobserve(node);
  }


  let _lastNodes:NodeItem[] = [];
  $: {
    //console.log(`移出`, _lastNodes);
    _lastNodes.map(item=>{
      io.unobserve(item.node);
    });

    //console.log(`移入`, nodes);
    _lastNodes = nodes ? nodes.map(item=>{
      io.observe(item.node);
      return item;
    }) : [];
  }
  
  /**
   * Native scrollTo with callback
   * @param offset - offset to scroll to
   * @param callback - callback function
   */
  function scrollTo(offset:number, callback:Function) {
    const fixedOffset = offset.toFixed();
    const onScroll = function () {
      if (window.scrollY.toFixed() === fixedOffset) {
        window.removeEventListener('scroll', onScroll);
        callback();
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

  export function nodeTo(item:any){
    if(!isNaN(item)){
      item = nodes![item];
    }
    if(!item){return;}
    let top = item.node.offsetTop - 32;
    if(top<0){top = 0;}

    scrollTo(top, ()=>{
      // 滚动结束后更新 index
      nodeIndex = nodes!.findIndex(n=>n===item);
    });
  }

  export function nodeToTitle(title:string){
    const node = nodes!.find(n=>n.title===title);
    if(!node){
      throw new Error(`没有找到对应标题的节点`);
    }
    nodeTo(node);
  }
</script>



<div class='sticky top-8'>
  <div class='text-sm font-semibold'>On this page</div>

  {#if !nodes}
  <div class='bg-secondary-foreground/5 p-3 rounded border text-sm mt-5'>
    loading...
  </div>
  {:else if nodes.length<1}
  <div class='bg-secondary-foreground/5 p-3 rounded border text-sm mt-5'>
    该页面暂无节点
  </div>
  {:else}
  <div class='space-y-2 mt-5 pb-6 text-sm font-light
  max-h-[calc(100vh-4rem)] overflow-scroll'>
    {#each nodes as item, index}
    <a class='block hover:opacity-100 cursor-pointer'
    style='padding-left: {item.level<=2 ? 0 : item.level*4}px;'
    class:opacity-80={index!=nodeIndex}
    href={null}
    on:click={()=>{nodeTo(item);}}>{item.title}</a>
    {/each}
  </div>
  <hr />
  {/if}
</div>