process.stdout.write('prompt > ');

let {pwd} = require("./pwd")
let {ls} = require("./ls");
const { write } = require("fs");
const { cat } = require("./cat");
const { BADHINTS } = require("dns");
const {curl} = require("./curl")

const done = (output) => {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}

process.stdin.on('data', function(input){
    input = input.toString().trim()
    if (input === 'pwd'){
        pwd(input, done)
    }
    else if (input === 'ls'){
        ls(done)
    }
    else if (input === 'cat'){
        cat(input, done)
    }
    else if (input === 'curl'){
        curl(input, done)
    }
    else {
        process.stdout.write(`You typed: ${input}`)
        process.stdout.write('\nprompt > ')
    }
})



