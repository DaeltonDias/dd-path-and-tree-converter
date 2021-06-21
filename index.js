// throw new Error('Expected an Array of file paths, but saw ' + paths);

const tree1 = (paths) => {
  if (paths.constructor === String) paths = [paths];
  if (paths.constructor !== Array) throw new Error('Invalid param!');
  const mergePathsIntoFileTree = (prevDir, currDir, i, filePath) => {
    if (i === filePath.length - 1) {
      prevDir[currDir] = 'file';
    }
    if (!prevDir.hasOwnProperty(currDir)) {
      prevDir[currDir] = {};
    }
    return prevDir[currDir];
  };
  const parseFilePath = (filePath) => {
    var fileLocation = filePath.split(/[\\]|[\/]/);
    // If file is in root directory, eg 'index.js'
    if (fileLocation.length === 1) {
      return (tree[fileLocation[0]] = 'file');
    }
    fileLocation.reduce(mergePathsIntoFileTree, tree);
  }; const tree = {}; paths.forEach(parseFilePath);
  return tree;
};

const tree2 = (paths) => {
  if (paths.constructor === String) paths = [paths];
  if (paths.constructor !== Array) throw new Error('Invalid param!');
  const tree = [], level = {tree}; paths.forEach(path => {
    path.split(/[\\]|[\/]/).filter(i => i).reduce((r, name, i, filePath) => {
      if (!r[name]) {
        let item = { name }; r[name] = {tree: []};
        item.type = i === filePath.length - 1 ? 'file' : 'folder';
        if (item.type === 'folder') item.children = r[name].tree;
        if (item.type === 'file') item.path = path;
        r.tree.push(item);
      }
      return r[name];
    }, level);
  });
  return tree;
};

const list1 = (data) => {
  const arrMount = ([ key, value ]) => ({ [key]: value });
  const arr = Object.entries(data).map(arrMount);
  const paths = [], fn = (i, path) =>
  Object.entries(i).map(([ name, value ]) => {
    if (value === 'file') paths.push(path + name);
    else { path += name + '/'; fn(value, path); }
  }); arr.map(i => fn(i, '')); return paths;
};

const list2 = (data) => {
  const paths = [], fn = (i, path = '') => {
    if (i.type === 'folder') path += i.name + '/';
    if (i.type === 'file') paths.push(path + i.name);
    if (i.children) i.children.map(i => fn(i, path));
  }; data.map(i => fn(i)); return paths;
};

const pathToTree = (path, options = {}) => {
  const i = options.format === 'json';
  return i ? tree1(path) : tree2(path);
};

const treeToPath = (tree) => {
  const i = tree.constructor === Object;
  return i ? list1(tree) : list2(tree);
};

module.exports = { pathToTree, treeToPath };