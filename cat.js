const fs = require('fs')

module.exports.cat = function(data){
    process.stdout.write('filename > ');
    process.stdin.on('data', function(filename){
        filename = filename.toString().trim()
        fs.readFile(`./${filename}`, (err, fileContents) =>{
            if (err){
              return err
            }
            else {process.stdout.write(fileContents);
                  process.stdout.write('\nprompt > ')}
          })
    })
}