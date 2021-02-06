const postmanRequest = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=1c3273dc5fad2bbf6fc8d8e2ca108152&query=New%20York'
postmanRequest(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
})