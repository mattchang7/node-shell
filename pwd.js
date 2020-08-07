
module.exports.pwd = function(data, done){
    const cmd = data.toString().trim()
    done(__dirname)
}
