import { GIPHY_API_KEY } from '../config';

export default class Giphy {
  constructor() {
    console.log('test2');
    // const request = new Request('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC');
  }

  search(query) {
    // make a fetch AND return a JSON response as a Promise

    // fetch the search url where actual search is after ?g to &api_*
    fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat+joakim&api_key=dc6zaTOxFJmzC')
    //convert API to json
    .then(response => response.json())
    //log json data
    .then(json => console.log(json));



    // fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat+joakim&api_key=dc6zaTOxFJmzC')



  };





}




  // fetch('flowers.jpg')
  // .then(function(response) {
  //   if(response.ok) {
  //     return response.blob();
  //   }
  //   throw new Error('Network response was not ok.');
  // })
  // .then(function(myBlob) {
  //   var objectURL = URL.createObjectURL(myBlob);
  //   myImage.src = objectURL;
  // })
  // .catch(function(error) {
  //   console.log('There has been a problem with your fetch operation: ' + error.message);
  // });
