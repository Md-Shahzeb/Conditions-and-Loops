//Ascending order
function printNumbersAscending() {
    let current = 1;
    
    while (current <= 25) {
        console.log(current);
        current++;
    }
}

console.log("Ascending Order:");
printNumbersAscending();
// Output: 1, 2, 3, 4, ..., 24, 25

//Descending order
function printNumbersDescending() {
    let current = 25;
    
    while (current >= 1) {
        console.log(current);
        current--;
    }
}

console.log("Descending Order:");
printNumbersDescending();
// Output: 25, 24, 23, 22, ..., 2, 1
