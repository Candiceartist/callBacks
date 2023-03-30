//  ❓ In your own words describe what the term "implicit return" means.
a function that is outside of curly braces so it can be accessed globally 

// ❓ Describe what a callback function is in your own words.
renders your function either synchronously which is order or asynchrounsly which is catered 
to your request own its own. synchronouslyrelies on itself for example i need a sandwich
give me bread then meat then ChannelSplitterNode. asynchrounslyis custom. give a hamburger hold the fires and FontFaceSetLoadEventthe server would be the entire 
menue which i donb't want because that woudld slow down my loading time.  too large of a payload






// call back examples


COMPUTE FUNCTION

// // function add(a, b) {
// //     return a + b;
// //   }
  
// //   function subtract(a, b) {
// //     return a - b;
// //   }
  
// //   function compute(a, b, op) {
// //     return op(a, b);
// //   }
  
// //   let result1 = compute(10, 5, add);
// //   let result2 = compute(10, 5, subtract);



❓ When the add and subtract functions are passed as arguments to the compute function - they are callback functions.


// time out function 
TIME OUT FUNCTION

// console.log('Code before the asynchronous function call');

// setTimeout(function() {
//   console.log('setTimeout code')
// });

// console.log('Code after the asynchronous function call');



// sync call back
// // // // // // const colors = ['red', 'green', 'blue'];

// // // // // // colors.forEach(function(color, idx) {
// // // // // //   console.log(`${idx + 1} - ${color}`);
// // // // // // });





// // // // // // asycnh callback 

// // // // // function add(a, b) {
// // // // //     return a + b;
// // // // //   }
  
// // // // //   function subtract(a, b) {
// // // // //     return a - b;
// // // // //   }
  
// // // // //   function compute(a, b, op) {
// // // // //     return op(a, b);
// // // // //   }
  
// // // // //   let result1 = compute(10, 5, add);
// // // // //   let result2 = compute(10, 5, subtract);



// // // // // // synchronous code 

// // // // // const colors = ['red', 'green', 'blue'];

// // // // // console.log('BEFORE the forEach...');

// // // // // colors.forEach(function(color, idx) {
// // // // //     console.log(`${idx + 1} - ${color}`);
// // // // // });

// // // // // console.log('AFTER the forEach...');

'


// // // // // // asynchronous code

// // // // // // console.log('Code before the asynchronous function call');

// // // // // // setTimeout(function() {
// // // // // //   console.log('setTimeout code')
// // // // // // });

// // // // // // console.log('Code after the asynchronous function call');
// // // // console.log('Code before the asynchronous function call');





// // // // setTimeout(function() {
// // // //   console.log('setTimeout code')
// // // // });

// // // // console.log('Code after the asynchronous function call');
// // // // Synchronous function
// // // function getFriends() {
// // //     return ['Fred', 'Barney'];
// // //   }
  




// // //   // Get the friends
// // //   let friends = getFriends();
  
// // //   // The friends array is ready to work with because getFriends
// // //   // is synchronous and returned the array of friends we wanted
// // //   friends.forEach(function(friend) {
// // //     console.log(friend);
// // //   });
// // // asynchronous function
// // function getFriendsAsync() {
// //     // Using setTimeout to make getFriendsAsync
// //       return ['Fred', 'Barney'];

// //   }
  




// //   // Will friends have an array after this line of code runs?
// //   let friends = getFriendsAsync();
  
// //   // The following will cause an error because
// //   // friends is not an array yet
// //   friends.forEach(function(friend) {
// //     console.log(friend);
// //   })
// // Refactor to accept a callback function
REFRACTOR CALL BACK 
// // to be called when the data is ready
// function getFriendsAsync(cb) {
//     setTimeout(function() {
//       // pass the results to the provided callback
//       cb(['Fred', 'Barney']);
//     }, 0);
//   }



// /❓ What's a programmer to do? remove the time out function


  
//   // Execute and provide it with an anonymous callback function
//   // to be called by the getFriendsAsync function
//   getFriendsAsync(function(friends) {
//     friends.forEach(function(friend) {
//       console.log(friend);
//     });
//   });

// ARROW FUCNTION
MAP FUNCTION 
// regular function
let squares = [1, 2, 3].map(function (x) { return x * x });
// arrow function
let squares = [1, 2, 3].map(x => x * x);

// //  single expresion
// const add = (x, y) => { return x + y };

// block function
BLOCK FUNCTION
// const getGrade = score => {
//     if (score === 100) return 'A+';
//     score = Math.floor(score / 10);
// //     return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
//   };
//  implicit fucntion

SINGLE FUCNTION IMPLICIT 
const add = (x, y) => x + y;
return [4,3][add]; 
