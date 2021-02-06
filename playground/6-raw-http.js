const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=1c3273dc5fad2bbf6fc8d8e2ca108152&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();
