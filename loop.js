// function sumOfMultiples(num){
//   var val = 1;
//   return val;
// }
function fizzbuzzLoop() {
  var fizzBuzzDiv = document.getElementById('fizzbuzz-div');

  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      addFizzbuzz("fizzbuzz", fizzBuzzDiv);
    }
    else if (i % 3 === 0) {
      addFizzbuzz("fizz", fizzBuzzDiv);
    }
    else if (i % 5 === 0) {
      addFizzbuzz("buzz", fizzBuzzDiv);
    }
    else addFizzbuzz(i, fizzBuzzDiv);
  }
}
function addFizzbuzz(text, list){
  var newDiv = document.createElement ('div');
  newDiv.innerText = text;
  newDiv.classList.add("textbox");
  list.appendChild(newDiv);
}

document.addEventListener("DOMContentLoaded",fizzbuzzLoop);


