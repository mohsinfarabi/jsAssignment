// Function to convert feet to mile
function feetToMile(feet) {

    // Convert feet to mile
    var mile = feet / 5280; // 1 mile = 5280 feet

    // Validation for the negative value
    if (feet < 0) {
        console.log("Distance can not be negative. Insert a value greater than or equal to 0");
    } else {

        return mile; // returns the converted 
    }
}

var result = feetToMile(10560);
console.log("Mile is : " + result);

// Function to count total cft of wood required
function woodCalculator(chair, table, bed) {

    /*
     Calculate total cft of wood required
    Chair requires 1 cft wood
    Table requires 3 cft wood
    Bed requires 5 cft wood
    */
    var totalWoodrequired = chair + (3 * table) + (5 * bed);

    // Validation for the negative value
    if (chair < 0 || table < 0 || bed < 0) {
        return console.log("Quantity can not be negative. Insert a value greater than or equal to 0");
    } else {

        // returns total cft of wood required
        return totalWoodrequired;
    }
}

var chair = 2;
var table = 2;
var bed = -2;
//var result = woodCalculator(chair, table, bed);
console.log("Total Wood Required : " + woodCalculator(chair, table, bed) + " cft");

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
        console.log("Floor number can not be negative. Insert a value greater than or equal to 0");
    } else if (floors >= 0 && floors <= 10) {
        bricks = floors * 15 * 1000;
    } else if (floors >= 11 && floors <= 20) {
        bricks = ((10 * 15) + ((floors - 10) * 12)) * 1000;
    } else {
        bricks = ((10 * 15) + ((floors - 10) * 12) + ((floors - 20) * 10)) * 1000;
    }

    // returns total number of bricks required
    return bricks;
}

var floors = 30;
console.log("Bricks :" + brickCalculator(floors));

function tinyFriend() {

}