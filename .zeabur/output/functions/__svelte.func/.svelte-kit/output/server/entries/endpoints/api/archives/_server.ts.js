import { _ as __vite_glob_0_0 } from "../../../../chunks/getting-started.js";
import { _ as __vite_glob_0_1 } from "../../../../chunks/index3.js";
import { j as json } from "../../../../chunks/index.js";
async function getList() {
  let posts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/docs/getting-started.md": __vite_glob_0_0, "/src/docs/index.md": __vite_glob_0_1 });
  for (const path in paths) {
    const file = paths[path];
    const relativePath = path.replace(/^\/src\/docs\//, "").replace(/\.md$/, "");
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata;
      const post = { ...metadata, slug, path: relativePath };
      post.published && posts.push(post);
    }
  }
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  return posts;
}
async function GET() {
  const posts = await getList();
  return json(posts);
}
export {
  GET
};
