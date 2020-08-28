const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);

  if (response.statusCode === 200) {
    if (data.length === 0) {
      console.log("Requsted breed not found");
    } else {
      console.log(data[0].description);
    }
  } else {
    console.log("request failed, please check if url is correct");
  }

});




