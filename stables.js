// Welcome!
//
//                     H O R S E   G A M E
//
//                       DON'T LOOK AT
//                         THIS HORSE
//
//                                         /\  /\
//                                        /  \/  |
//                                       /       |
//                                      /  o     |
//                                     /         |
//                                    /    __    |
//                                   (___ /  |   |
//                                    `--'   |   |
//                 _________________________/    |
//              .-'                               \ 
//             /                                   |
//            /           GAME OVER                |
//           |                                     |
//           |       .-----------------.           /
//            \      |                  \         /
//             |     |                   |   |   |
//             |  |  |                   |   |   |
//             |  |  |                   |   |   |
//             |  |  |                   |   |   |
//             |  |  |                   |   |   |
//            /___|___\                 /____|___\

let stable = "Happy Barnhouse"
let welcome = "Welcome to the " + stable + "!";

let horse1 = {
    name: "Able",
    nickname: "A",
    snack: "grass",
    age: 7,
    height: 168,
    board: 200,
    isInside: true,
    isHappy: true,
}

let horse2 = {
    name: "Bean Jr.",
    nickname: "B",
    snack: "beans",
    age: 2,
    height: 145,
    board: 100,
    isInside: false,
    isHappy: true,
}

let horse3 = {
    name: "Candy",
    nickname: "C",
    snack: "sugar",
    age: 12,
    height: 175,
    board: 200,
    isInside: false,
    isHappy: true,
}

let horse4 = {
    name: "Deigo",
    nickname: "D",
    snack: "taco",
    age: 20,
    height: 162,
    board: 200,
    isInside: true,
    isHappy: true,
}


let horses = [horse1, horse2, horse3];
let stalls = 10;

function stallNum(numOfStalls, filledStalls) {
    console.log("There are " + (numOfStalls - filledStalls) + " spaces in the stables.");
}

function rentOverdue(horse) {
    console.log(horse.name + " will owe " + horse.board * 1.2 + " for renting the stables, including late fees.");
}

function getNickname(horse) {
    return horse.nickname;
}

horses.push(horse4);

stallNum(stalls, horses.length);

for (const horse of horses) {
    horse.isHungry = true;
}

rentOverdue(horse1);

let someNickname = getNickname(horse3);
console.log(someNickname);


//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.

//------------------------- First day (Assignment 2) -------------------------//

// Move the horses in your stables into objects, if they aren't already. Each horse should have its own object.
// (After you are done, your horse variables from Assignment 1 should be deleted)
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" array.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse is hungry or not. Use dot notation.

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out the return value outside of the function.

//------------------------- Day to day operations (Project) -------------------------//

// Add loop that checks to find out if a certain horse likes a particular treat. 
// If the horse does not like the treat, log out their disatisfaction and check the next horse. 
// Exit the loop when you find the horse that likes the treat.

// Create a function references one of your unique horse properties. 
// It should contain a conditional or a loop. 
// Invoke it for each horse.

// Morning! Create and invoke a function that moves any number horses of your choice outside.
// It should log out statement indicating the horses have been moved to spend time in the sun. 
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

// Food! Create and invoke a function that feeds your horses. 
// If the horse is outside, it should call them in, and then all horses should be fed a treat. 
// Log the activity of the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them in if it is getting dark. 
// Only the horses that moved should log out a message. 
// Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
// Initialize a method on your horses that moves them inside if they are outside, and vice versa.
