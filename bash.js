process.stdout.write('prompt > ');

let {proces} = require("./pwd")
let {ls} = require("./ls")


process.stdin.on('data', function(input){
    input = input.toString().trim()
    if(input === 'pwd'){
        proces(input)
    }
    else if (input === 'ls'){
        ls(input)
    }
})




