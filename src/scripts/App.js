
export default class App {


  constructor() {
  this.form = document.forms[0];
  this.button = this.form.querySelector("button");
  this.input = this.form.querySelector("input");

  //add event when click on button and start onSubmit
  this.button.addEventListener("click", this.onSubmit.bind(this));

  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);

  }

}



  //listning on click event on search button
  // button.addEventListener("click" , function(){
  //   event.preventDefault();
  //   console.log(input.value);
  //
  // });
