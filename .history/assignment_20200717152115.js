/* 
    Problem 1
*/
// Function to convert feet to mile
function feetToMile(feet) {

    // Convert feet to mile
    var mile = feet / 5280; // 1 mile = 5280 feet


    if (feet < 0) {
        console.log("Distance can not be negative. Enter a value greater than or equal to 0"); // Validation for the negative value
    } else if (typeof feet == "string") {
        console.log("Distance can not be a string. Enter a value greater than or equal to 0"); //validation for string input
    } else {

        return mile; // returns the converted 
    }
}

var result = feetToMile(10.560);
console.log("Mile is : " + result);




/* 
    Problem 2
*/
// Function to count total cft of wood required
function woodCalculator(chair, table, bed) {

    /*
     Calculate total cft of wood required
    Chair requires 1 cft wood
    Table requires 3 cft wood
    Bed requires 5 cft wood
    */
    var totalWoodrequired = chair + (3 * table) + (5 * bed);


    if (chair < 0 || table < 0 || bed < 0) {
        console.log("Quantity can not be negative. Enter a value greater than or equal to 0"); // Validation for the negative value
    } else if (typeof chair == "string" || typeof table == "string" || typeof bed == "string") {
        console.log("Quantity can not be a string. Enter a value greater than or equal to 0"); //validation for string input
    } else if (!Number.isInteger(chair) || !Number.isInteger(table) || !Number.isInteger(bed)) {
        console.log("Quantity can not be Float type. Enter an Integer value"); // Validation for the float values
    } else {
        // returns total cft of wood required
        return totalWoodrequired;
    }
}

var chair = 1.0;
var table = 2.0;
var bed = 2.0;
var result = woodCalculator(chair, table, bed);
console.log("Total Wood Required : " + result + " cft");



/* 
    Problem 3
*/
// Function to calculate total bricks required for the given number of floors
function brickCalculator(floors) {

    /*
    Calculate total number of bricks required
    Each feet requires 1000 pcs of brick
    for floor 1-10 : per floor 15 feet
    for floor 11-20 : per floor 12 feet
    for floor 21 and above : per floor 10 feet
    */

    var bricks;


    if (floors < 0) {
        console.log("Floor number can not be negative. Enter a value greater than or equal to 0"); // Validation for the negative value
    } else if (typeof floors == "string") {
        console.log("Floor number can not be a string. Enter a value greater than or equal to 0"); //validation for string input
    } else if (!Number.isInteger(floors)) {
        console.log("Floor number can not be float type. Enter an Integer value"); // Validation for the float values
    } else if (floors >= 0 && floors <= 10) {
        bricks = floors * 15 * 1000;
    } else if (floors >= 11 && floors <= 20) {
        bricks = ((10 * 15) + ((floors - 10) * 12)) * 1000;
    } else {
        bricks = ((10 * 15) + (10 * 12) + ((floors - 20) * 10)) * 1000;
    }

    // returns total number of bricks required
    return bricks;
}

var floors = 21.0;
console.log("Bricks :" + brickCalculator(floors));


/* 
    Problem 4
*/
// Function to find out the shortest friends name
function tinyFriend(nameList) {
    var tinyName = nameList[0];
    for (var i = 0; i < nameList.length; i++) {
        var currentName = nameList[i];
        if ()
    }
}