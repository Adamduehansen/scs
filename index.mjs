#! /usr/bin/env node
import { generateTemplateFiles } from 'generate-template-files';

generateTemplateFiles([
  {
    option: 'test',
    defaultCase: '(pascalCase)',
    stringReplacers: [
      {
        question: 'Insert greeting name',
        slot: '__name__',
      },
    ],
    entry: {
      folderPath: './templates/',
    },
    output: {
      path: './build',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
  },
]);
