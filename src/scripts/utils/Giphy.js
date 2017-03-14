import { GIPHY_API_KEY } from '../config';
import queryString from 'query-string';


export default class Giphy {
  // constructor() {
  //   console.log('test2');
  //   // const request = new Request('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC');
  // }

  // search(query) {
  //   // make a fetch AND return a JSON response as a Promise
  //
  //   // fetch the search url where actual search is after ?g to &api_*
  //   fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat+joakim&api_key=dc6zaTOxFJmzC')
  //   //convert API to json
  //   .then(response => response.json())
  //   //log json data
  //   .then(json => console.log(json));
  //
  //
  //
  //   // fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat+joakim&api_key=dc6zaTOxFJmzC')
  //
  //
  //
  // };

  search (query) {
    const url = this.buildApiUrl(query);

    return window.fetch(url)
      //convert API to json
      .then(response => response.json())
      //catch error if an error accurs
      .catch(error => console.error(error));
  }

  buildApiUrl (query) {
      // Build the search query string with the stringify method from the
      // query-string package.
      const search = queryString.stringify({
        q: query,
        api_key: GIPHY_API_KEY,
        rating: 'g'
      });

      return `https://api.giphy.com/v1/gifs/search?${search}`;
    }


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
