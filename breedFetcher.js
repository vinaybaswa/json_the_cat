const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breds/search?q=' + breedName;
   request(url, (error, response, body) => {
  //   console.log('error:', error);
  //   console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    
    if (response.statusCode === 200) {
      if (data.length !== 0) {
      callback(null, data[0].description)
      } else {
      callback(null,"Breed not found" )
      }
    } else {
     callback(error, null)
    }
    
  });
  
};

module.exports = { fetchBreedDescription };







