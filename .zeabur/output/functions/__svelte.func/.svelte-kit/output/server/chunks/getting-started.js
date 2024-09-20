import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Getting started",
  "published": true,
  "date": "2024-09-20T12:48:00.000Z"
};
const Getting_started = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-vtmsdd">Getting started</h1> <p data-svelte-h="svelte-dc27cm">Material for MkDocs is a powerful documentation framework on top of <a href="https://www.mkdocs.org" rel="nofollow">MkDocs</a>,
a static site generator for project documentation.[^1] If you’re familiar with
Python, you can install Material for MkDocs with <a href="#with-pip"><code>pip</code></a>, the Python
package manager. If not, we recommend using <a href="#with-docker"><code>docker</code></a>.</p> <p data-svelte-h="svelte-1qbbmcm">[^1]:
In 2016, Material for MkDocs started out as a simple theme for MkDocs, but
over the course of several years, it’s now much more than that – with the
many built-in plugins, settings, and countless customization abilities,
Material for MkDocs is now one of the simplest and most powerful frameworks
for creating documentation for your project.</p> <h2 data-svelte-h="svelte-136tnhu">Installation</h2> <h3 data-svelte-h="svelte-27khwr">with pip <small>recommended</small></h3> <p data-svelte-h="svelte-1bk40o8">Material for MkDocs is published as a <a href="https://pypi.org/project/mkdocs-material/" rel="nofollow">Python package</a> and can be installed with
<code>pip</code>, ideally by using a <a href="https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment" rel="nofollow">virtual environment</a>. Open up a terminal and install
Material for MkDocs with:</p> <p data-svelte-h="svelte-z89ban">=== “Latest”</p> <pre class="language-sh"><!-- HTML_TAG_START -->${`<code class="language-sh">pip <span class="token function">install</span> mkdocs-material</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-174xu3h">=== “9.x”</p> <pre class="language-sh"><!-- HTML_TAG_START -->${`<code class="language-sh">pip <span class="token function">install</span> mkdocs-material<span class="token operator">==</span><span class="token string">"9.*"</span> <span class="token comment"># (1)!</span></code>`}<!-- HTML_TAG_END --></pre> <ol data-svelte-h="svelte-ofn34n"><li><p>Material for MkDocs uses [semantic versioning][^2], which is why it’s a
good idea to limit upgrades to the current major version.</p> <p>This will make sure that you don’t accidentally <a href="upgrade.md">upgrade to the next
major version</a>, which may include breaking changes that silently corrupt
your site. Additionally, you can use <code>pip freeze</code> to create a lockfile,
so builds are reproducible at all times:</p></li></ol> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pip freeze &gt; requirements.txt</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-9yy6t1">Now, the lockfile can be used for installation:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pip install -r requirements.txt</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-ec7yse">[^2]:
Note that improvements of existing features are sometimes released as
patch releases, like for example improved rendering of content tabs, as
they’re not considered to be new features.</p> <p data-svelte-h="svelte-uqwoaa">This will automatically install compatible versions of all dependencies:
<a href="https://www.mkdocs.org" rel="nofollow">MkDocs</a>, <a href="https://python-markdown.github.io/" rel="nofollow">Markdown</a>, <a href="https://pygments.org/" rel="nofollow">Pygments</a> and <a href="https://facelessuser.github.io/pymdown-extensions/" rel="nofollow">Python Markdown Extensions</a>. Material for
MkDocs always strives to support the latest versions, so there’s no need to
install those packages separately.</p> <hr> <p data-svelte-h="svelte-1fjyh1j">:fontawesome-brands-youtube:
<strong><a href="https://www.youtube.com/watch?v=Q-YA_dA8C20" rel="nofollow">How to set up Material for MkDocs</a></strong> by @james-willett – :octicons-clock-24:
15m – Learn how to create and host a documentation site using Material for
MkDocs on GitHub Pages in a step-by-step guide.</p> <hr> <p data-svelte-h="svelte-cm1q20">!!! tip</p> <p data-svelte-h="svelte-1qtqi4b">If you don’t have prior experience with Python, we recommend reading
<a href="https://realpython.com/what-is-pip/" rel="nofollow">Using Python’s pip to Manage Your Projects’ Dependencies</a>, which is a
really good introduction on the mechanics of Python package management and
helps you troubleshoot if you run into errors.</p> <h3 data-svelte-h="svelte-1fyi8ha">with docker</h3> <p data-svelte-h="svelte-1ptbb6o">The official <a href="https://hub.docker.com/r/squidfunk/mkdocs-material/" rel="nofollow">Docker image</a> is a great way to get up and running in a few
minutes, as it comes with all dependencies pre-installed. Open up a terminal
and pull the image with:</p> <p data-svelte-h="svelte-z89ban">=== “Latest”</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">docker pull squidfunk/mkdocs-material</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-174xu3h">=== “9.x”</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">docker pull squidfunk/mkdocs-material:9</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1swcgoa">The <code>mkdocs</code> executable is provided as an entry point and <code>serve</code> is the
default command. If you’re not familiar with Docker don’t worry, we have you
covered in the following sections.</p> <p data-svelte-h="svelte-c81q2c">The following plugins are bundled with the Docker image:</p> <ul data-svelte-h="svelte-9qpg5y"><li><p><a href="https://github.com/byrnereese/mkdocs-minify-plugin" rel="nofollow">mkdocs-minify-plugin</a></p></li> <li><p><a href="https://github.com/datarobot/mkdocs-redirects" rel="nofollow">mkdocs-redirects</a></p></li></ul> <p data-svelte-h="svelte-1096uke">??? question “How to add plugins to the Docker image?”</p> <p data-svelte-h="svelte-kj7837">Material for MkDocs only bundles selected plugins in order to keep the size
of the official image small. If the plugin you want to use is not included,
you can add them easily:</p> <p data-svelte-h="svelte-1dysdzx">=== “Material for MkDocs”</p> <p data-svelte-h="svelte-928oni">Create a <code>Dockerfile</code> and extend the official image:</p> <pre class="language-dockerfile"><!-- HTML_TAG_START -->${`<code class="language-dockerfile"><span class="token instruction"><span class="token keyword">FROM</span> squidfunk/mkdocs-material</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip install mkdocs-macros-plugin</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip install mkdocs-glightbox</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1x924sj">=== “Insiders”</p> <p data-svelte-h="svelte-shbeaa">Clone or fork the Insiders repository, and create a file called
<code>user-requirements.txt</code> in the root of the repository. Then, add the
plugins that should be installed to the file, e.g.:</p> <pre class="language-txt"><!-- HTML_TAG_START -->${`<code class="language-txt">mkdocs-macros-plugin
mkdocs-glightbox</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-118duyo">Next, build the image with the following command:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">docker build -t squidfunk/mkdocs-material .</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-si0lq3">The new image will have additional packages installed and can be used
exactly like the official image.</p> <h3 data-svelte-h="svelte-1ihkhc0">with git</h3> <p data-svelte-h="svelte-v01izy">Material for MkDocs can be directly used from <a href="https://github.com/squidfunk/mkdocs-material" rel="nofollow">GitHub</a> by cloning the
repository into a subfolder of your project root which might be useful if you
want to use the very latest version:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">git clone https://github.com/squidfunk/mkdocs-material.git</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-lqcpsk">Next, install the theme and its dependencies with:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pip install -e mkdocs-material</code>`}<!-- HTML_TAG_END --></pre>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Getting_started,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
