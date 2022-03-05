#!/usr/bin/env node

const path = require('path');
const child_process = require('child_process');

const root = path.resolve(__dirname, '..');
const options = {
  cwd: root,
  stdio: 'inherit',
};

child_process.spawnSync('yarn', ['husky', 'install'], options);
child_process.spawnSync(
  'yarn',
  ['husky', 'add', '.husky/commit-msg', 'yarn commitlint --edit $1'],
  options
);
child_process.spawnSync(
  'yarn',
  ['husky', 'add', '.husky/pre-commit', 'yarn lint && yarn typescript'],
  options
);
