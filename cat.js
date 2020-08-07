const fs = require('fs')

module.exports.cat = function(data, done){
    process.stdout.write('filename > ');
    process.stdin.on('data', function(filename){
        filename = filename.toString().trim()
        fs.readFile(`./${filename}`, (err, fileContents) =>{
            if (err){
                done('something went wrong')
            }
            else {
                done(fileContents)
            }
        })
    })
}