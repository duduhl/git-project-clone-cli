#!/usr/bin/env node --harmony
'use strict'

process.env.NODE_PATH = __dirname + '/../node_modules/';

const program = require('commander');

program
    .version(require('../package').version)

program
    .usage('<command>');


program
    .command('init')
    .description('项目初始化')
    .alias('i')
    .action(() => {
        require('../command/init')()
    })

program.parse(process.argv);

// help
if (!program.args.length) {
    program.help()
}