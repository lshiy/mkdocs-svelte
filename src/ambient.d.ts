namespace Docs {
  interface Model {
    title: string;
    path?: string;
    slug?: string;
    cover?: string;
    description: string;
    date: string;
    tags?: string[];
    published: boolean;
  }
}


interface PageTreeItem {
  type: 'leaf' | 'parent';
  key: string;
  value?: string;
  level: number;
  children?: PageTreeItem[];
  unfold?: boolean;
}


interface NodeItem {
  node: Element;
  level: number;
  title: string;
  status: number;
  viewed?: boolean
}