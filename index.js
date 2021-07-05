#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPwd = require('./utils/createPwd')
const savePwd = require('./utils/savePwd')

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'Password length', '8')
    .option('-s, --save', 'Save password to pwds.txt')
    .option('-nn, --no-numbers', 'Remove numbers from password')
    .option('-ns, --no-symbols', 'Remove symbols from password')
    .parse()

const {length, save, numbers, symbols} = program.opts()

// Get generate pwd
const generatedPwd = createPwd(length, numbers, symbols)

//Save to file
if(save) {
    savePwd(generatedPwd)
}

//copy to clipboard
clipboardy.writeSync(generatedPwd)

// Output generated pwd
log(chalk.redBright('Generated Password: ') + chalk.bold(generatedPwd))
log(chalk.blueBright('Password copied to clipbaord!'))

