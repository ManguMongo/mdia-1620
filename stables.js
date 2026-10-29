// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.
let stable = "Happy Barnhouse"
let welcome = "Wecome to the " + stable + "!";

let horse1 = {
    name: "Able",
    nickname: "A",
    snack: "grass",
    age: 7,
    height: 168,
    board: 200,
    inside: true,
    happy: true,
    hungry: true,
}

let horse2 = {
    name: "Bean Jr.",
    nickname: "B",
    snack: "beans",
    age: 2,
    height: 145,
    board: 100,
    inside: false,
    happy: true,
    hungry: false,
}

let horse3 = {
    name: "Candy",
    nickname: "C",
    snack: "sugar",
    age: 12,
    height: 175,
    board: 200,
    inside: false,
    happy: true,
    hungry: true,
}

let horse4 = {
    name: "Deigo",
    nickname: "D",
    snack: "taco",
    age: 20,
    height: 162,
    board: 200,
    inside: true,
    happy: true,
    hungry: false,
}

let horses = [horse1, horse2, horse3, horse4];
let stalls = 10;

function stallNum(num, fill) {
    console.log("There are " + num - fill + " spaces in the stables.");
}

function rentOverdue(horse) {
    console.log(horse.name + " will owe " + horse.board * 1.2 + " for renting the stables, including late fees.");
}

function getNickname(horse) {
    return horse.nickname;
}

rentOverdue(horse1);
let someNickname = getNickname(horse3);
console.log(someNickname);



//------------------------- Seting up shop (Assignment 1) -------------------------//

// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// (Your own comments, where necessary, are acceptable.)

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