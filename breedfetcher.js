const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What cat would you like to search? ', (answer) => {
  const requestString = 'https://api.thecatapi.com/v1/breeds/search?q=' + answer;
  request(requestString, (error, response, body) => {
    if (error !== null) {
      console.log(error);
    } else if (body.length === 2) {
      console.log("Oops! We can't find that breed");
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });

  rl.close();
});
