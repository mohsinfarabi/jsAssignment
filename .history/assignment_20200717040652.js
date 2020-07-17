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
        console.log("Quantity can not be negative. Insert a value greater than or equal to 0");
    } else {

        // returns total cft of wood required
        return totalWoodrequired;
    }
}

var chair = 2;
var table = 2;
var bed = -2;
var result = woodCalculator(chair, table, bed);
console.log("Total Wood Required : " + result + "cft");

// Function to calculate total bricks required for the given number of floors
function brickCalculator(floors) {

}

function tinyFriend() {

}