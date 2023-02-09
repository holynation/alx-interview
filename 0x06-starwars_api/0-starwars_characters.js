#!/usr/bin/node
/**
 * This is a script that prints all characters
 * of a Star Wars movie:
 */
const request = require('request');
const film_id = process.argv[2];
if (!film_id  || isNaN(film_id)) {
  process.exit(1);
}
const url = `https://swapi-api.alx-tools.com/api/films/${film_id}`;

request(url, (error, res, body) => {
  if (error) {
    console.log(error);
    return;
  }
  // create empty array list to hold the characters
  const characterList = [];

  const json = JSON.parse(body);
  const characters = json.characters; // get the character param

  characters.forEach((character) => {
    const url = character;
    const promise = new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) {
          reject(error); // reject promise
          return;
        }
        const json = JSON.parse(body);
        resolve(json.name); // resolve promise
      });
    });
    characterList.push(promise);
  });

  Promise.all(characterList).then((values) => {
    values.forEach((value) => {
      console.log(value);
    });
  }).catch((error) => {
    console.log(error);
  });
});
