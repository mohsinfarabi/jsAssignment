function feetToMile(feet) {

    // Convert feet to mile
    var mile = feet / 5280; // 1 mile = 5280 feet

    if (feet < 0 || typeof feet == String) {
        console.log("Value can not be negative. Insert a value greater than or equal to 0");
    } else {

        return mile;
    }
}

var result = feetToMile("GHJ");
console.log(result);

function woodCalculator() {

}

function brickCalculator() {

}

function tinyFriend() {

}