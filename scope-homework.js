var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// printName will print 'My name is Keith'.
// printName can 'see' name as it declared globally.

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// This code will print 3, as score is redefined within the scope of 'result'.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// This function will print a numbered list:
// 1: Ducks
// 2: Dogs
// 3: Lions
// ... because myAnimals is redefined within the scope of listAnimals

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// the allSuspects call will print
// 'Suspects include: Jay, Val, Harvey, Rick'
// the console log will print: 'Suspect three is Keith'
// suspectThree is redefined with allSuspects, meaning any references within the function will return the new value.
// However, outside allSuspects, the original value persists.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// the above code will print: Poirot
// ... as the printName call within detectiveInfo has been passed a detective object with a reassigned value"

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// the outerFunction call won't return anything
// the next line will return "the murderer is  rick"
// The 2 redefinitions of murderer only apply within the scope of their functions.

var x = 1;

var doChange = function(){

  x = 2;

  var more = function(multiple){
    return x = x * multiple;
  }

  more(x);

  console.log(x);

  more(x);

  console.log(x);

};

doChange();
console.log(x);

 // The changes to the var x persist throughout and beyond doChange, as x is simply redefined at the beginning of the function and within the inner more() function.

var y = 10

var dontChange = function(){

  var y = 20;

  var more = function(divisor){
    return y = y / divisor;
  }

  more(2);

  console.log(y);

  more(2);

  console.log(y);

}

dontChange();
console.log(y);

//  in this example, changes to y persist throughout the dontChange function, but not beyond, as y is declared as a new var within the dontChange function.
