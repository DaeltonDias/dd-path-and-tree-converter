
const { pathToTree, treeToPath } = require('./index');


console.log('\n', '--------------------------- pathToTreeTest ---------------------------');

const pathToTreeTest = () => {

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

  const path = 'src/lib/server.js';

  const tree_3 = pathToTree(path, { format: 'json' });
  const tree_4 = pathToTree(path);

  console.log(tree_3);
  // {
  //   src: {
  //     lib: {
  //       'server.js': 'file'
  //     }
  //   }
  // }

  console.log(tree_4);
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

};

pathToTreeTest();

console.log('\n', '--------------------------- treeToPathTest ---------------------------');

const treeToPathTest = () => {

  const tree_1 = {
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
  
  const tree_2 = [
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
  
  const paths_1 = treeToPath(tree_1);
  const paths_2 = treeToPath(tree_2);
  
  console.log({ paths_1, paths_2 });
  // {
  //   paths_1: [
  //     'index.js',
  //     'src/lib/git.js',
  //     'src/lib/server.js',
  //     'externs/jquery.js'
  //   ],
  //   paths_2: [
  //     'src/lib/git.js',
  //     'src/lib/server.js',
  //     'externs/jquery.js',
  //     'index.js'
  //   ]
  // }

};

treeToPathTest();


