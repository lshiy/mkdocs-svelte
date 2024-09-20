import { json } from '@sveltejs/kit'

async function getList() {
	let posts: Docs.Model[] = [];

	const paths = import.meta.glob('/src/docs/**/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
    const relativePath = path.replace(/^\/src\/docs\//, '').replace(/\.md$/, '');
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Docs.Model, 'slug'>;
			const post = { ...metadata, slug, path:relativePath } satisfies Docs.Model;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getList();
	return json(posts);
}
