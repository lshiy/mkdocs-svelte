export function match(path: string) {
  //console.log('reg path:', path);
  //console.log('reg test:', /\.md$/.test(path) || !/[^\.]+$/.test(path));
  return /\.md$/.test(path) || !/\.\w+$/.test(path);
}