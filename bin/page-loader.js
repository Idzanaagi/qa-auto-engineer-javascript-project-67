#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.1.0');

program.command('split')
  .description('dowload html')
  .argument('<string>', 'path to the dir')
  .argument('<string>', 'address')
  .option('--output', 'non-default path for save')
  .action(() => {
    console.log('uyuiiii');
  });

program.parse();
