# dd-path-and-tree-converter
Convert path to tree and tree to path.

### Installation
```shell
$ npm install dd-path-and-tree-converter
```

### Use
```javascript
// CommonJS
const { pathToTree, treeToPath } = require('dd-path-and-tree-converter');

// ES6
import { pathToTree, treeToPath } from 'dd-path-and-tree-converter';
```

```javascript
const paths = [
  'src/lib/git.js',
  'src/lib/server.js',
  'externs/jquery.js',
  'index.js'
];

const tree_1 = pathToTree(paths, { format: 'json' });
const tree_2 = pathToTree(paths);

console.log(tree_1);
// {
//   'index.js': 'file',
//   'src': {
//     'lib': {
//       'git.js': 'file',
//       'server.js': 'file'
//     },
//   },
//   'externs': {
//     'jquery.js': 'file'
//   }
// }

console.log(tree_2);
// [
//   {
//     name: 'src',
//     type: 'folder',
//     children: [
//       {
//         name: 'lib',
//         type: 'folder',
//         children: [
//           {
//             name: 'git.js',
//             type: 'file'
//           },
//           {
//             name: 'server.js',
//             type: 'file'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'externs',
//     type: 'folder',
//     children: [
//       {
//         name: 'jquery.js',
//         type: 'file'
//       }
//     ]
//   },
//   {
//     name: 'index.js',
//     type: 'file'
//   }
// ]
```

```javascript
const path = 'src/lib/server.js';

const tree_1 = pathToTree(path, { format: 'json' });
const tree_2 = pathToTree(path);

console.log(tree_1);
// {
//   src: {
//     lib: {
//       'server.js': 'file'
//     }
//   }
// }

console.log(tree_2);
// [
//   {
//     name: 'src',
//     type: 'folder',
//     children: [
//       {
//         name: 'lib',
//         type: 'folder',
//         children: [
//           {
//             name: 'server.js',
//             type: 'file'
//           }
//         ]
//       }
//     ]
//   }
// ]
```

```javascript
const tree = {
  'index.js': 'file',
  'src': {
    'lib': {
      'git.js': 'file',
      'server.js': 'file'
    },
  },
  'externs': {
    'jquery.js': 'file'
  }
};

// The treeToPath function always returns an array of paths.

const paths = treeToPath(tree);

console.log(paths);
// [
//   'index.js',
//   'src/lib/git.js',
//   'src/lib/server.js',
//   'externs/jquery.js'
// ]
```

```javascript
const tree = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'lib',
        type: 'folder',
        children: [
          {
            name: 'git.js',
            type: 'file'
          },
          {
            name: 'server.js',
            type: 'file'
          }
        ]
      }
    ]
  },
  {
    name: 'externs',
    type: 'folder',
    children: [
      {
        name: 'jquery.js',
        type: 'file'
      }
    ]
  },
  {
    name: 'index.js',
    type: 'file'
  }
];

// The treeToPath function always returns an array of paths.

const paths = treeToPath(tree);

console.log(paths);
// [
//   'index.js',
//   'src/lib/git.js',
//   'src/lib/server.js',
//   'externs/jquery.js'
// ]
```