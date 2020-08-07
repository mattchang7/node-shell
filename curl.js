module.exports.curl = function (data){
  process.stdout.write('url > ');
    process.stdin.on('data', function(url){
        url = url.toString().trim()
        const request = require("request");
        request(url, function (error, response, body) {
  if(error){
    return console.error('error:', error)
  };
  // Print the error if one occurred
  process.stdout.write('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  process.stdout.write('body:', body); // Print the HTML for the Google homepage.
});
})
}
