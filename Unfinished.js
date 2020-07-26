/*var myName = "Bob";
document.write(myName);
myName = "John Doe";
document.write(myName);

var simpleAddition = 2 + 2;
document.write(simpleAddition);

var size = 100;
var doubleSize = size * 2;
var minSize = doubleSize * 2 - size / 2;
document.write(minSize);
*/

var food = "Burgers";
var age = "24";
document.write(
  "My all time food " + food + " cant be beat cause im " + age + "years old!"
);

//var boolean1 = true;
//var boolean2 = false;
//var notABoolean = "true"; // This is the string 'true' not the boolean

//console.log(notDefinedVariable); //Will output undefined

//var thisIsEmpty = null;
//var thisISUndefined = undefined;
//var thisISAlsoUndefined;

var annesAge = 27;
//Object is var anne and property is name
var anne = {
  name: "Anne",
  age: annesAge,
  child: {
    name: "Joe",
    age: 2,
  },
};
anne.age = 28;
//delete anne.age; Used to delete a property
document.write(
  //to find properties within the nest use dot notation (.)
  "Her name is " + anne.child.name + " and she is " + anne.age + " years old"
);
/*
var emptyObject = {}; variable with empty property
*/
var user = {};
user.email = "test@test.com";
user.age = "31";

console.log(user.email);

var currentUserName = "sam";
var userAges = {
  anne: 27,
  sam: 112,
  megan: 97,
};
userAges[currentUserName] = 113;
console.log(userAges[currentUserName]);

var differentArrays = [
  //string arrays
  ["pizza", "tuna", "apple"],
  //object arrays
  { type: "Bus", wheels: 4, color: "blue" },
  //array of arrays
  [1, 2, 3],
];
// mix of different arrays in one
var mixedArray = [1, "two", [1, 2, 3], { age: 4 }];

var numberArray = [1, 2, 3];
var mixedArray = [1, "two", numberArray, { age: 5 }];
//Array index starts at "0"! Not 1!
//calls first item in array 'numberArray'
console.log(numberArray[0]);
//calls 3rd item in variable and finds 2nd position which is number '2'
console.log(mixedArray[2][1]);
//changes the variable property from 'two' to '2'
mixedArray[1] = 2;
/*calls the variable mixedArray and finds the item in second position which
has now been changed*/
console.log(mixedArray[1]);
console.log(numberArray.length); //will output 3 defining how many elements are in array
//Primitve data types cant copy a newly assigned value to an existing variable
/*Complex data types can copy the newly assigned variable
Data cant be assighned a new value an without it changing the data unless you
change the refrenced code(primary code)
console.log(typeof variable); - Displays data type(string,number,ect.*/

//Basic if/else statements
var age = 30;
if (age === 20) {
  console.log("You are 20!");
} else if (age === 21) {
  console.log("I guess your 21!");
} else {
  console.log("You arent 20 or 21 are you?");
}

// If it ends in curly braces, no semicolon needed unless its an object 'var myObj = {age: 42};'

/*
console.log(1 === 2); // reads as "is 1 equal to 2?"
console.log(1 !== 2); // reads as "is 1 not equal to 2?"
console.log(1 < 2); // reads as "is 1 less than 2?"
console.log(1 > 2); // reads as "is 1 greater than 2?"
console.log(1 <= 2); // reads as "is 1 less than or equal to 2?"
console.log(1 >= 2); // reads as "is 1 greater than or equal to 2?"
*/

//To check if a user enters 0 to prompt a response
if (userInput !== "") {
  console.log("You may have entered 0 but i will still work");
}

//Double equal(converts different data types(string to number) but triple does not)
// Condition ? Then : Else  , Better to use standard if else for conditions based on something
var age = 20;
var result = age > 19 ? "Is not a teen" : "Is a Teen";
console.log(result);

var age = 20;
var result;
if (age > 19) {
  result = "Is not a teen";
} else {
  result = "Is a teen";
}
// Takes ages and subtracts 2 off of each while starting at the first point which is i='0'
var ages = [20, 30, 25, 22, 32];
for (var i = 0; i < ages.length; i++) {
  console.log(ages[i] - 2);
}

var pokemonList = [
  {
    name: "Bulbasur",
    height: 0.7,
    type: ["Grass", "Poison"],
    evolution: "Ivysaur",
  },
  {
    name: "Charmander",
    height: 0.6,
    type: ["Fire"],
    evolution: "Charmeleon",
  },
  {
    name: "Oshawott",
    height: 0.5,
    type: ["Water"],
    evolution: "Dewott",
  },
  {
    name: "Dratini",
    height: 1.8,
    type: ["Dragon"],
    evolution: "Dragonair",
  },
];

var pokemonList2 = [
  {
    name: "Seel",
    height: 3.7,
    type: ["Water"],
    evolution: "Dewgong",
  },
  {
    name: "Squirtle",
    height: 1.08,
    type: ["Water"],
    evolution: "Wartortle",
  },
  {
    name: "Charmeleon",
    height: 3.07,
    type: ["Fire"],
    evolution: "Charizard",
  },
];

// printArrayDetails function declaration with list as declared variable
//The below code will run the above code when printed out on the bottom with printArrayDetails
function printArrayDetails(list) {
  for (var i = 0; i < list.length; i++) {
    document.write(
      "<p>" +
        list[i].name +
        "<br>" +
        "Height: " +
        list[i].height +
        " - Type: " +
        list[i].type +
        " - Evolution: " +
        list[i].evolution
    );
    //Above code prints the name,height,type, and evo of each pokemon
  }
}

// Calling printArrayDetails function twice
//This tells the function to execute the values as inputs or arguments
printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);

//creates function that does math based on the values in the called varaible(console.log(divide()))
function divide(dividend, divisor) {
  if (divisor === 0) {
    return "You're trying to divide zero!";
  } else {
    //Does division on the two parameters
    var result = dividend / divisor;
    return result;
  }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));

var dog = {
  type: "pug",
  age: 3,
  name: "Margot",
  /*function placed inside variable that calls the sub-variable/function into action with
   'dog.speak();'*/
  speak: function () {
    console.log("Wooff! I am " + this.name);
  },
};

dog.speak();

/*
Doesn'e require a 'return' if code fits onto one line
var addTwo = number => number + 2;
See how much simpler this looks? The example above is the same as writing this:

var addTwo = function(number){ return number + 2 };
*/

/* Predifined functions that are a need to know - 
prompt - Will open up a pop-up and ask for user input
confirm - Will open a pop-up asking for a user to either confirm or cancel
alert - Opens pop-up with text/number alert for issue
setTimeout - Runs code in a delayed fashion, placed before calling variable/function
example - var name = prompt('Please enter your name!');
console.log(name);
*/

/*Adding to a predifined or undifined array(push)"adds to back of array"
unshift - Add to the start of the array
pop - Remove the Last item from the array
shift - Remove the First item from the array
reverse - Reveres the array
slice - 
var namesA = ['John', 'Anne', 'Carly'];
var namesB = namesA.slice(); // Now you can modify `namesA` without affecting `namesB`*/
var fruits = ["Bananna", "Orange", "Apple", "Mango"];
fruits.push("Grapes");

/* indexOf(); Called to find the item in an array and its position (0-10 example)
names.indexOf('parameter to look for');
also can us lastIndexOf(to find the last duplicate in an array); */

//Below uses a forEach loop to iterate over the userList array instead of just 'for' with var
var userList = [
  {
    name: "Liz",
    age: 20,
  },
  {
    name: "Michael",
    age: 30,
  },
  {
    name: "Miles",
    age: 24,
  },
];

userList.forEach(function (user) {
  console.log(user.name + " is " + user.age + " years old duh!");
});

//Can be written as -

function myLoop(user) {
  console.log(user.name + " is my name and " + user.age + " is my age.");
}
userList.forEach(myLoop);
//Pure function that doesn't change the function
var payment = {
  price: 120,
  discount: 20,
};

function getDiscount(price, discount) {
  return price - discount;
}

console.log("Price: ", payment.price);
console.log("Discount Price: ", getDiscount(payment.price, payment.discount));
//Pure function below
var age = 10;
function getNewAge(num1) {
  return num1 + 1;
}

console.log(getNewAge(age));

// Given the same inputs, a funtion should always have the same output

/*
var age = 10; // this is the global state
function getNewAge(oldAge) {
  return oldAge + 1; // oldAge is only the internal state
}
function updateAge(newAge) {
  age = newAge; // updates the global state
}
updateAge(getNewAge(age));
console.log(age);
*/

var anne = {
  name: "Anne Smith",
  age: 38,
  hasChildren: false,
};

function getAgeDescription(age) {
  return age + " years old";
}

function getChildren(hasChildren) {
  return hasChildren ? "has children" : "has no children";
}

function getPerson(person) {
  var ageDescription = getAgeDescription(person.age);
  var childrenDescription = getChildren(person.hasChildren);

  return person.name + ", " + ageDescription + ", " + childrenDescription;
}

console.log(getPerson(anne));
//Below adds Pikachu object to names within the pokemonList array
var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: "Bulbasur",
      height: 0.7,
      type: ["Grass", "Poison"],
      evolution: "Ivysaur",
    },
    {
      name: "Charmander",
      height: 0.6,
      type: ["Fire"],
      evolution: "Charmeleon",
    },
    {
      name: "Oshawott",
      height: 0.5,
      type: ["Water"],
      evolution: "Dewott",
    },
    {
      name: "Dratini",
      height: 1.8,
      type: ["Dragon"],
      evolution: "Dragonair",
    },
  ]; // empty array

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
  };
})();

pokemonRepository.add({ name: "Pikachu" });
console.log(pokemonRepository.getAll());
//Below is how to filter through an array
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);

//Below will change the text within the selected HTML element
var change = document.querySelector("p");
change.innerText = "Ya this will Work!";
console.log(change.innertext);
/*HTML 
<p></p> - Will show - Ya this will Work!
*/

//Below finds class container as well as h2 and adds elements through Javascript
var container = document.querySelector(".container");
container.innerHTML = "<button>Click You?</button>";
console.log(container.innerHTML);

var heading = document.querySelector("h2");
heading.innerHTML = "Im a cool heading";
console.log(heading.innerHTML);

//Below is how to use appendChild to move text to container2 instead of 1
//HTML -
<div id="container1" class='container'>
  <p>This is a paragraph</p>
</div>

<div id="container2" class='container'></div>
//JS - 
var paragraph = document.querySelector('p');
var container2 = document.querySelector('#container2');

 container2.appendChild(paragraph);

 //below would remove the first paragraph but not second if the was one
 var elementToRemove = document.querySelector('p')
elementToRemove.parentElement.removeChild(elementToRemove);


document.write(
  "<br>" +
    "Pokemon: " +
    poke.name +
    " Height: (" +
    poke.height +
    ")" +
    "<br> Type: " +
    poke.type +
    "<br> Evolution: " +
    poke.evolution +
    "<br>" +
    size +
    "<br>"
);

pokemonRepository.add({
  name: "Pikachu",
  height: 1.04,
  type: ["Electric"],
  evolution: "Raichu",
});
console.log(pokemonRepository.getAll());

//Selecting element by value
//HTML -
<select>
  <option value='1'>First option</option>
  <option value='2'>Second option</option>
</select>
//JS - 
var element = document.querySelector('select');
element.value; // returns '1' as that’s currently selected
element.value = '2'; // returns second option changed to select second option

//For end-user to know which radio station is selected
/*HTML - 
<input type='radio' name='age-group' value='child'>
<input type='radio' name='age-group' value='adult'>
<input type='radio' name='age-group' value='elder'>
*/
//CSS - to select checked value
input:checked {
  border: lightcoral; 
  background-color: lightcoral;
}
//JS - 
var ageGroupElement = document.querySelector('input[name="age-group"]:checked');
var value = ageGroupElement ? ageGroupElement.value : null;

// Use .appendChild to add to last element in a node and .insertBefore() for start element

//Below shows asynchronous code in action with a delayed function (examplePromise)
function examplePromise(){
  var promiseToReturn = new Promise(function(resolve, reject){
    var sum;
    setTimeout(function(){
      sum = 5 + 6;
      if(sum > 10) {
      resolve(sum);
    }else{
      reject('The promise has been rejected');
    }
  }, 2000);
});
return promiseToReturn;
}

console.log('Some piece of code');
examplePromise().then(function(result){
  console.log(result);
}).catch(function(error){
  console.log(error);
});
console.log("another piece of code");

//Below is how to use stringify to send to a JSON server and parse get data from the server
var list = [1, 2, 3];
console.log(JSON.stringify(list)); // '[1,2,3]'
var otherList = JSON.parse('[3,4,5]');                                        
console.log(otherList);
/*implementing CRUD” for something, it means enabling the user to create/read/update/
delete a given resource
When talking about HTTP requests, developers will often talk about “posting to the server” 
or “patching a resource.” These types of phrases are shorthand for “making a request with the 
method POST/PATCH to the server.”*/
//Below is how to get/fetch data from an API
//Fetch is desighned to return a Promise which can chain together .then() and .catch()
fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (pokemonList) {
  console.log(pokemonList); // The actual JSON response
}).catch(function () {
  // Error
});

//Below is how to post to an API using the Post method
fetch('https://my-backend.com', {
  method: 'POST',
  data: JSON.stringify(data),
  contentType: 'application/json'
})
/*More code means higher load times, if function using polyfill only used once or twice throughout
code then may not be useful to add polyfill script*/

// Can use indexOf for strings to find input

//Below is how to create a for for the end-user to enter email and password
//JS -
(function() {
  var form = document.querySelector('#register-form');
  var emailInput = document.querySelector('#email');
  var passwordInput = document.querySelector('#password');
  
  function validateEmail() {
    var value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field!');
      return false;
    }
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address!');
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }
  
  function validatePassword() {
    var value = passwordInput.value;
    if (!value) {
      showErrorMessage(passwordInput, 'Password is a required field!');
      return false
    }
    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 charachetrs long.');
      return false
    }
    showErrorMessage(passwordInput, null);
    return true;
  }
  
  function showErrorMessage(input, message) {
    var container = input.parentElement;
    var error = container.querySelector('.error-message');
    if (error) {
    container.removeChild(error)
    }
    if (message) {
      var error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  
  
  // Used to validate both forms at the same time
  function validateForm() {
    var isValidEmail = validateEmail();
    var isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListner('input', validatePassword);
})();
//HTML -
{/* <form id='register-form'>
  
  <div class='input-wrapper'>
    <label for='email'>E-mail</label>
    <input id='email'>
  </div>
  
  <div class='input-wrapper'>
    <label for='password'>Password</label>
    <input id='password' type='password'>
  </div>
  
  
  <button>Register</button>
  
</form> */}

//Below is CSS for aligning and centering a modal on a page
html, 
body {
  font-family: Arial, sans-serif;
}

#modal-container {
  position: fixed;
  padding: 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  
  /* to show it above other content */
  z-index: 999; 
  
  /* to allow scrolling if the screen is not high enough*/
  overflow: auto; 
  
  /* this is used to center the modal */
  display: grid;
  text-align: center;
}

.modal {
  margin: auto;
  display: inline-block;
  box-sizing: border-box;
  background: #fff;
  padding: 15px;
  width: 100%;
  max-width: 700px;
  text-align: left;
}

.modal-close {
  float: right;
  -webkit-appearance: none;
  border: 0;
  background: none;
  color: #777;
  text-decoration: underline;
}

.modal h1 {
  margin-top: 0;
}

.modal p {
  margin-bottom: 0;
}
// Below is creating and removing modals and dialogs
(function() {
  var modalContainer = document.querySelector('#modal-container');
  var dialogPromiseReject; // This can be set later, by showDialog
  
  function showModal(title, text) {
    // Clear all existing modal content
    modalContainer.innerHTML = '';
    
    var modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Add the new modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    var titleElement = document.createElement('h1');
    titleElement.innerText = title;
    
    var contentElement = document.createElement('p');
    contentElement.innerText = text;
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add('is-visible');
  }
  
  function hideModal() {
    modalContainer.classList.remove('is-visible');
    
    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseRejct = null;
    }
  }
  
  function showDialog(title, text) {
    showModal(title, text);
    
    // We want to add a confirm and cancel button to the modal
    var modal = modalContainer.querySelector('.modal');
    
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('modal-confirm');
    confirmButton.innerText = 'Confirm';
    
    var cancelButton = document.createElement('button');
    cancelButton.classList.add('modal-cancel');
    cancelButton.innerText = 'Cancel';
    
    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);
    
    // We want to focus the confirmButton so that the user can simply press Enter
    confirmButton.focus();
    
    // Return a promise that resolves when confirmed, else rejects
    return new Promise((resolve, reject) => {
      cancelButton.addEventListener('click', hideModal);
      confirmButton.addEventListener('click', () => {
        dialogPromiseReject = null; // Reset this
        hideModal();
        resolve();
      });
      // This can be used to reject from other functions
      dialogPromiseReject = reject;
    });
  }

  
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });
  
  document.querySelector('#show-dialog').addEventListener('click', () => {
    showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
      alert('confirmed!');
    }, () => {
      alert('not confirmed');
    });
  });


  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    var target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  
})();

// Below is how to add a canvas for touch interactions
(function() {
  var canvas = document.querySelector('#canvas');
  var isDrawing = false;
  var previousX = null;
  var previousY = null;
  
  function handleStart(e) {
    isDrawing = true;
    // Initiate previousX/previousY
    var x = e.pageX;
    var y = e.pageY;
    previousX = x;
    previousY = y;
  }

  function handleEnd() {
    isDrawing = false;
  }

  function handleMove(e) {
    // To prevent drawing on hover
    if (!isDrawing) {
      return;
    }
    var x = e.pageX; //X coordinate of click/touch
    var y = e.pageY;//Y coordinate of click/touch
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(previousX, previousY);
    ctx.lineTo(x, y);
    
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
    
    previousX= x;
    previousY = y;
  }

  canvas.addEventListener("pointerdown", handleStart);
  canvas.addEventListener("pointerup", handleEnd);
  canvas.addEventListener("pointercancel", handleEnd);
  canvas.addEventListener("pointermove", handleMove);
})();

