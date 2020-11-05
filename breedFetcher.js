const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const requestString = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(requestString, (error, response, body) => {
    if (error !== null) {
      callback(error, null);
    } else if (body.length === 2) {
      callback("Breed does not exist", null);
    }  else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });

};



module.exports = fetchBreedDescription;