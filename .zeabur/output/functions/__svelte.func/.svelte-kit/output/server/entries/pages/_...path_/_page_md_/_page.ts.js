import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function load({ params }) {
  let post;
  let originalPath = params.path ? params.path + "/" + params.page : params.page;
  let path = originalPath.replace(/.md$/, "");
  try {
    const resp = await getMarkdown(path);
    post = resp.post;
    path = resp.path;
  } catch (e) {
    console.error(e);
    error(404, `Could not find ${originalPath}`);
  }
  let data = {
    content: post.default,
    meta: post.metadata,
    path
  };
  if (!data.meta.published) {
    error(404, `Could not find ${originalPath}`);
  }
  let relates = [];
  if (data.meta?.relates) {
    for (let i = 0; i < data.meta.relates.length; i++) {
      const path2 = data.meta.relates[i];
      const { post: post2 } = await getMarkdown(path2);
      relates.push({
        ...post2.metadata,
        url: `${path2}`
      });
    }
  }
  if (relates.length > 0) {
    data.relates = relates;
  }
  return data;
}
async function getMarkdown(path) {
  let paths = path.split("/");
  let post;
  try {
    if (paths.length === 1) {
      post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../docs/getting-started.md": () => import("../../../../chunks/getting-started.js").then((n) => n._), "../../../docs/index.md": () => import("../../../../chunks/index3.js").then((n) => n._) }), `../../../docs/${paths[0]}.md`, 5);
    } else if (paths.length === 2) {
      post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../../docs/${paths[0]}/${paths[1]}.md`, 6);
    } else if (paths.length === 3) {
      post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../../docs/${paths[0]}/${paths[1]}/${paths[2]}.md`, 7);
    } else {
      throw new Error("Invalid path");
    }
  } catch (e) {
    console.error("getMarkdown error", e);
    try {
      path += "/index";
      if (paths.length === 1) {
        if (!paths[0]) {
          path = "/";
          post = await import("../../../../chunks/index3.js").then((n) => n._);
        } else {
          post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../../docs/${paths[0]}/index.md`, 6);
        }
      } else if (paths.length === 2) {
        post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../../docs/${paths[0]}/${paths[1]}/index.md`, 7);
      } else if (paths.length === 3) {
        post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../../docs/${paths[0]}/${paths[1]}/${paths[2]}/index.md`, 8);
      } else {
        throw new Error("Invalid path");
      }
    } catch (e2) {
      throw e2;
    }
  }
  return { post, path };
}
export {
  load
};
