import { load } from 'js-yaml';
import yamlConfig from '/mkdocs.yaml?raw';

const config = load(yamlConfig) as Record<string, any>;
const markdowns = import.meta.glob('/src/routes/**/*.md', { eager: true }) as any;

interface TreeNode {
  [key: string]: string | TreeNode | TreeNode[];
}

function processPageTree(tree: TreeNode[], level:number = 0): any[] {
  return tree.map((node, index) => {
    if (typeof node === 'string') {
      const metadata = markdowns[`/src/routes/${node}`]?.metadata;
      const filename = (node as string).split('/').pop()!.split('.').shift()!.split('') as string[];
      const alias = filename.shift()!.toLocaleUpperCase() + filename.join('');

      node = { [metadata?.title || alias]: node };
    }

    const [key, value] = Object.entries(node)[0];
    
    if (typeof value === 'string') {
      return { type: 'leaf', key, value, level };
    } else if (Array.isArray(value)) {
      if (typeof value[0] === 'string') {
        return {
          type: 'parent',
          key,
          value: value[0],
          level,
          children: processPageTree(value.slice(1) as TreeNode[], level + 1)
        };
      } else {
        return {
          type: 'parent',
          key,
          level,
          children: processPageTree(value as TreeNode[], level + 1)
        };
      }
    } else {
      return {
        type: 'parent',
        key,
        level,
        children: processPageTree([value] as TreeNode[], level + 1)
      };
    }
  });
}

//console.log(markdowns);
const nav = processPageTree(config.nav);

export default config;
export { nav };