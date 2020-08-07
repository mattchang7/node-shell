module.exports.curl = function (data, done){
    process.stdout.write('url > ');
    process.stdin.on('data', function(url){
    url = url.toString().trim()
    const request = require("request");
    request(url, function (error, response, body) {
        if (error){
            console.log(error)
            done('something went wrong')
        }
        else {
            done(body)
        }     
    })
})
}
