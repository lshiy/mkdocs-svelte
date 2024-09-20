<script lang='ts'>
	import Footer from "$lib/components/app/Footer.svelte";
	import Header from "$lib/components/app/Header.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import config from "$lib/config";
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{config.site_name}" />

  <title>{config.site_name}</title>
</svelte:head>


<div class="parallax-container">
  <Header isHero={true} />

  <div class='parallax-group h-[140vh] xl:min-h-[1700px] contain-strict'>
    <div class="parallax-layer" style="--parallax-depth: 8;--image-position: 70%">
      <img class='max-sm:size-full object-cover' src='/assets/layers/1-landscape@2x.avif' alt='layers' />
    </div>
    
    <div class="parallax-layer" style="--parallax-depth: 5;--image-position: 25%">
      <img class='max-sm:size-full object-cover' src='/assets/layers/2-plateau@2x.avif' alt='layers' />
    </div>
    <div class="parallax-layer" style="--parallax-depth: 4;--image-position: 20%">
      <img class='max-sm:size-full object-cover' src='/assets/layers/3-astronaut-1@2x.avif' alt='layers' />
    </div>
    <div class="parallax-layer" style="--parallax-depth: 3;--image-position: 30%">
      <img class='max-sm:size-full object-cover' src='/assets/layers/4-astronaut-2@2x.avif' alt='layers' />
    </div>
    
    <div class="parallax-layer" style="--parallax-depth: 2;--image-position: 40%">
      <img class='max-sm:size-full object-cover' src='/assets/layers/5-plants-1@2x.avif' alt='layers' />
    </div>
    <div class="parallax-layer" style="--parallax-depth: 1;--image-position: 50%">
      <img class='max-sm:size-full object-cover' src='/assets/layers/6-plants-2@2x.avif' alt='layers' />
    </div>
    
    <div class='parallax-layer parallax-blend'></div>
    <div class="sticky-content">
      <div class='w-full container relative py-10 mx-auto'>
        <div class='w-full max-w-lg flex flex-col shadow-black text-white'>
          <h1 class='text-3xl xl:text-4xl font-bold'>{config.home_title}</h1>
          <p class='lg:text-lg opacity-90 my-4'>{@html config.home_description}</p>
          <div class='flex gap-4 mt-1'>
            <Button variant='default' size='lg' href='/getting-started'>立刻体验</Button>
            <Button variant='ghost' size='lg' href={config.repo_url} target='_blank'>GitHub</Button>
          </div>
        </div>

        <a href='https://ko-fi.com/bewilderedbird' target='_blank'
        class='absolute bottom-6 right-6 text-xs rounded 
        py-1 px-2 bg-black/40 backdrop-blur-sm
        hover:bg-primary hover:text-primary-foreground
        transition-all duration-300'>
          © BewilderedBird
        </a>
      </div>
    </div>
  </div>

  <div class='parallax-group bg-background'>
    <div class='container p-8 pb-20 sm:pb-40'>
      <h2 class='text-3xl xl:text-4xl font-bold mb-12 opacity-90'>你所期望的一切</h2>
      <div class='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div class='border p-6 rounded-lg'>
          <h3 class='text-xl font-bold mb-2'>只有 Markdown</h3>
          <p>专注于文档的内容，几分钟内即可创建专业的静态网站。无需了解 HTML、CSS 或 JavaScript —— 让 {config.site_name} 为你完成繁重的工作。</p>
        </div>
        <div class='border p-6 rounded-lg'>
          <h3 class='text-xl font-bold mb-2'>适用于所有设备</h3>
          <p>自信地提供你的文档 —— {config.site_name} 会自动适应以完美匹配可用的屏幕空间，无论是何种类型或大小的查看设备。台式机、平板、手机，都能完美呈现。</p>
        </div>
        <div class='border p-6 rounded-lg'>
          <h3 class='text-xl font-bold mb-2'>快速且轻量</h3>
          <p>不要让用户等待 —— 使用一个占用空间小但性能卓越的主题，获得令人难以置信的价值，产生优秀的搜索引擎排名，让用户满意并愿意再次访问。</p>
        </div>
        <div class='border p-6 rounded-lg'>
          <h3 class='text-xl font-bold mb-2'>保持所有权</h3>
          <p>拥有文档的完整源代码和输出，保证完整性和安全性 —— 无需将产品知识的核心托付给第三方平台。保持完全控制。</p>
        </div>
        <div class='border p-6 rounded-lg sm:col-span-2'>
          <h3 class='text-xl font-bold mb-2'>开源</h3>
          <p>你处于良好的环境中 —— 选择一个成熟且积极维护的解决方案，它使用最先进的开源技术构建，受到个人和组织的信赖。基于 MIT 许可。</p>
        </div>
      </div>
    </div>
  </div>


  <div class='parallax-group bg-background border-t'>
    <Footer />
  </div>
</div>