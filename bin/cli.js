#!/usr/bin/env node
import minimist from 'minimist';
import roll from "../lib/roll.js"
const args = minimist(process.argv.slice(2))

if (!args.sides || !args.dice ||!args.rolls){
    console.log('You entered the wrong information, try again.')
    process.exit(0)
}

const result = roll(args.sides, args.dice, args.rolls)
console.log(JSON.stringify(result));