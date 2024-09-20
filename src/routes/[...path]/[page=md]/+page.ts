import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let post:any;
  let originalPath = params.path ? (params.path+'/'+params.page) : params.page;
  let path = originalPath.replace(/.md$/, '');
  //console.log('path:', path);

	try {
    const resp = await getMarkdown(path);
    post = resp.post;
    path = resp.path;
	} catch (e) {
    console.error(e);
		error(404, `Could not find ${originalPath}`);
	}

  let data:any = {
    content: post.default,
    meta: post.metadata,
    path: path
  };
  if(!data.meta.published){
    error(404, `Could not find ${originalPath}`);
  }

  let relates:any[] = [];
  if(data.meta?.relates){
    for (let i = 0; i < data.meta.relates.length; i++) {
      const path = data.meta.relates[i];
      const {post} = await getMarkdown(path);
      relates.push({
        ...post.metadata,
        url: `${path}`
      });
    }
  }
  if(relates.length>0){
    data.relates = relates;
  }

  return data;
}


async function getMarkdown(path:string){
  let paths = path.split('/');
  //console.log(paths);

  let post:any;
  try {
    if(paths.length === 1){
      post = await import(`../../../docs/${paths[0]}.md`);
    } else if(paths.length === 2){
      post = await import(`../../../docs/${paths[0]}/${paths[1]}.md`);
    } else if(paths.length === 3){
      post = await import(`../../../docs/${paths[0]}/${paths[1]}/${paths[2]}.md`);
    } else {
      throw new Error('Invalid path');
    }
  } catch (e) {
    console.error('getMarkdown error', e);
    // If the file doesn't exist, try adding '/index'
    try {
      path += '/index';
      if(paths.length === 1){
        if(!paths[0]){
          path = '/';
          // @ts-ignore
          post = await import(`../../../docs/index.md`);
        } else {
          post = await import(`../../../docs/${paths[0]}/index.md`);
        }
      } else if(paths.length === 2){
        post = await import(`../../../docs/${paths[0]}/${paths[1]}/index.md`);
      } else if(paths.length === 3){
        post = await import(`../../../docs/${paths[0]}/${paths[1]}/${paths[2]}/index.md`);
      } else {
        throw new Error('Invalid path');
      }
    } catch (e) {
      // If both attempts fail, throw the error
      throw e;
    }
  }

  return {post, path};
}