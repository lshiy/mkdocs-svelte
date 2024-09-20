import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="relative pt-20 sm:pt-0 sm:top-48 left-0"><div class="container mx-auto"><h1 class="text-3xl">${escape($page.status)}: ${escape($page.error?.message)}</h1> ${``}</div></div>`;
});
export {
  Error as default
};
