function feetToMile(feet) {

    // Convert feet to mile
    var mile = feet / 5280; // 1 mile = 5280 feet

    // Validation for the negative value
    if (feet < 0) {
        console.log("Value can not be negative. Insert a value greater than or equal to 0");
    } else {

        return mile; // returns the converted 
    }
}

var result = feetToMile(10560);
console.log("Mile is : " + result);

function woodCalculator(chair, table, bed) {

    // Calculate total cft of wood required
    var totalWoodrequired = chair + (3 * table) + (5 * bed);

    // Validation for the negative value
    if (chair < 0 || table < 0 || bed < 0) {
        console.log("Value can not be negative. Insert a value greater than or equal to 0");
    } else {

        // returns total cft of wood required
        return totalWoodrequired;
    }
}

function brickCalculator() {

}

function tinyFriend() {

}