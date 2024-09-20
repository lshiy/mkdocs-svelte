function match(path) {
  return /\.md$/.test(path) || !/\.\w+$/.test(path);
}
export {
  match
};
