process.stdout.write('prompt > ');

let {pwd} = require("./pwd")
let {ls} = require("./ls");
const { write } = require("fs");
const { cat } = require("./cat");
const { BADHINTS } = require("dns");
const {curl} = require("./curl")


process.stdin.on('data', function(input){
    input = input.toString().trim()
    if(input === 'pwd'){
        pwd(input)
    }
    else if (input === 'ls'){
        ls(input)
    }
    else if (input === 'cat'){
        cat(input)
    }
    else if (input === 'curl'){
        curl(input)
    }
    else {
        process.stdout.write(`You typed: ${input}`)
        process.stdout.write('\nprompt > ')
    }
})

