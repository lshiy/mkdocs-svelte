import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_object, h as escape_attribute_value, i as each, v as validate_component, b as subscribe, e as escape, a as add_attribute, m as missing_component } from "../../../../chunks/ssr.js";
import { i as is_void, B as Button, a as cn, c as config, n as nav, H as Header } from "../../../../chunks/button.js";
import "marked";
import { p as page } from "../../../../chunks/stores.js";
/**
 * @license lucide-svelte v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function findRelevantNode(tree, route) {
  for (const node of tree) {
    if (node.value && route.startsWith(node.value)) {
      return node;
    } else if (Array.isArray(node.children)) {
      if (node.children.some((item) => item.value && route.startsWith(item.value))) {
        return node;
      }
      for (const subNode of node.children) {
        if (typeof subNode === "object") {
          const found = findRelevantNode([subNode], route);
          if (found) return node;
        }
      }
    }
  }
  return null;
}
function getMarginPx(level = 0) {
  const px = (level - 1) * 20;
  return px < 0 ? "0px" : `${px}px`;
}
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { pageTree } = $$props;
  let { routeId } = $$props;
  let relevantNodes = null;
  if ($$props.pageTree === void 0 && $$bindings.pageTree && pageTree !== void 0) $$bindings.pageTree(pageTree);
  if ($$props.routeId === void 0 && $$bindings.routeId && routeId !== void 0) $$bindings.routeId(routeId);
  relevantNodes = routeId ? [findRelevantNode(pageTree, routeId)] : pageTree;
  $$unsubscribe_page();
  return `${relevantNodes ? `<div class="sticky top-6">${each(relevantNodes, (item) => {
    return `<div class="${[
      "flex items-center h-9 opacity-80 hover:opacity-100",
      (item.level > 1 ? "border-l-[1px]" : "") + " " + ("/" + item.value?.replace(/\.md$/, "") === $page.url.pathname.replace(/\.md$/, "") ? "border-primary" : "") + " " + ("/" + item.value?.replace(/\.md$/, "") === $page.url.pathname.replace(/\.md$/, "") ? "opacity-100" : "")
    ].join(" ").trim()}" style="${"padding-left: " + escape(getMarginPx(item.level), true) + ";"}"><a class="${"grow " + escape(item.value ? "" : "opacity-80", true) + " text-sm " + escape(item.type === "parent" ? "font-semibold" : "", true)}"${add_attribute(
      "href",
      item.value ? `/${item.value.replace(/^\//, "").replace(/.md$/, "")}` : null,
      0
    )}>${escape(item.key)}</a> ${item.type === "parent" && item.children && item.children.length > 0 && item.level > 0 ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "ghost",
        size: "icon",
        class: cn("size-7", item.unfold ? "rotate-180" : "")
      },
      {},
      {
        default: () => {
          return `${validate_component(Chevron_down, "ChevronDown").$$render($$result, { size: 18, strokeWidth: 1.3 }, {}, {})} `;
        }
      }
    )}` : ``}</div> ${item.children && (item.unfold || item.level === 0) ? `${validate_component(Sidebar, "svelte:self").$$render($$result, { pageTree: item.children }, {}, {})}` : ``}`;
  })}</div>` : ``}`;
});
function scrollTo(offset, callback) {
  const fixedOffset = offset.toFixed();
  const onScroll = function() {
    if (window.scrollY.toFixed() === fixedOffset) {
      window.removeEventListener("scroll", onScroll);
      callback();
    }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
  window.scrollTo({ top: offset, behavior: "smooth" });
}
const Sidenav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { routeId = "" } = $$props;
  let loaded = false;
  let nodes = void 0, nodeIndex = -1;
  function getNodes(root) {
    if (!root) {
      root = document.querySelector("#md-content");
    }
    nodes = [];
    root.querySelectorAll("h2,h3,h4,h5,h6").forEach((elem) => {
      const level = Number(elem.nodeName.replace(/[^\d]/g, ""));
      const title = elem.textContent;
      if (!title) {
        return;
      }
      elem.id = title;
      elem.innerHTML = `<a class='not-prose' href='#${title}'>${title}</a>`;
      nodes.push({ node: elem, level, title, status: -1 });
    });
    loaded = true;
  }
  let io;
  let _lastNodes = [];
  function nodeTo(item) {
    if (!isNaN(item)) {
      item = nodes[item];
    }
    if (!item) {
      return;
    }
    let top = item.node.offsetTop - 32;
    if (top < 0) {
      top = 0;
    }
    scrollTo(top, () => {
      nodeIndex = nodes.findIndex((n) => n === item);
    });
  }
  function nodeToTitle(title) {
    const node = nodes.find((n) => n.title === title);
    if (!node) {
      throw new Error(`没有找到对应标题的节点`);
    }
    nodeTo(node);
  }
  if ($$props.routeId === void 0 && $$bindings.routeId && routeId !== void 0) $$bindings.routeId(routeId);
  if ($$props.nodeTo === void 0 && $$bindings.nodeTo && nodeTo !== void 0) $$bindings.nodeTo(nodeTo);
  if ($$props.nodeToTitle === void 0 && $$bindings.nodeToTitle && nodeToTitle !== void 0) $$bindings.nodeToTitle(nodeToTitle);
  {
    if (routeId && loaded) {
      getNodes();
    }
  }
  {
    {
      _lastNodes.map((item) => {
        io.unobserve(item.node);
      });
      _lastNodes = nodes ? nodes.map((item) => {
        io.observe(item.node);
        return item;
      }) : [];
    }
  }
  return `<div class="sticky top-8"><div class="text-sm font-semibold" data-svelte-h="svelte-ipqzwy">On this page</div> ${!nodes ? `<div class="bg-secondary-foreground/5 p-3 rounded border text-sm mt-5" data-svelte-h="svelte-zews6v">loading...</div>` : `${nodes.length < 1 ? `<div class="bg-secondary-foreground/5 p-3 rounded border text-sm mt-5" data-svelte-h="svelte-v4u5bq">该页面暂无节点</div>` : `<div class="space-y-2 mt-5 pb-6 text-sm font-light max-h-[calc(100vh-4rem)] overflow-scroll">${each(nodes, (item, index) => {
    return `<a class="${[
      "block hover:opacity-100 cursor-pointer",
      index != nodeIndex ? "opacity-80" : ""
    ].join(" ").trim()}" style="${"padding-left: " + escape(item.level <= 2 ? 0 : item.level * 4, true) + "px;"}"${add_attribute("href", null, 0)}>${escape(item.title)}</a>`;
  })}</div> <hr>`}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-191tvvx_START --><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data?.meta?.title, 0)}>${data?.meta?.title ? `${$$result.title = `<title>${escape(data.meta.title)} - ${escape(config.site_name)}</title>`, ""}` : `${$$result.title = `<title>${escape(config.site_name)}</title>`, ""}`}<!-- HEAD_svelte-191tvvx_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex items-stretch justify-between w-full max-w-[1420px] mx-auto px-6"><aside class="shrink-0 w-full pr-6 max-w-[280px] pt-10">${validate_component(Sidebar, "Sidebar").$$render(
    $$result,
    {
      pageTree: nav,
      routeId: data.path + ".md"
    },
    {},
    {}
  )} </aside> <article id="md-content" class="prose dark:prose-invert w-full max-w-[860px] p-6 mt-12">   ${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </article> <aside class="max-xl:hidden w-full max-w-[280px] pt-10">${validate_component(Sidenav, "Sidenav").$$render($$result, { routeId: data.path + ".md" }, {}, {})}</aside></main>`;
});
export {
  Page as default
};
