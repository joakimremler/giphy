/*
 * This file is part of Giphy.
 *
 * (c) Yrgo, högre yrkesutbildning Göteborg.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

//load Class App
import App from './App.js';
import Giphy from './utils/Giphy.js';


let LOADED = false;

/**
 * Bootstrap the application on load.
 *
 * @return {void}
 */
function bootstrap () {
  // We don't want to load our application twice.
  if (LOADED) {
    return;
  }

  LOADED = true;

  //start class App
  window.app = new App();

  window.giphy = new Giphy();
  // window.giphy.search("testing");
  console.log(window.giphy.search("testing"));




  console.log('The Giphy application has been loaded.');

  // When the application is loaded we remove the event listeners.
  document.removeEventListener('DOMContentLoaded', bootstrap);
  window.removeEventListener('load', bootstrap);
}

// We setup two listeners for better browser support.
document.addEventListener('DOMContentLoaded', bootstrap);
window.addEventListener('load', bootstrap);

//call application

// console.log( document.querySelector(".search"));

// document.addEventListener("click", function(){
//   console.log('test');
// });

// document.addEventListener("click" => console.log('test'));



// console.log(document);
// console.log(document.forms);
// console.log('test');
