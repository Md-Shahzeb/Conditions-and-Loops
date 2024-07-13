function generateNumbersBetween(num1 , num2){
        const numbers=[];
    if (num1 >= num2){
        console.log("Invalid range, Ensure num1 is less than num2 ");
        return;
    }    
    for (let i = num1 + 1; i <= num2; i++) {
        numbers.push(i);
    }
    return numbers;
}
const num1 =  10;
const num2 = 25;
const result = generateNumbersBetween(num1,num2);
console.log(result.join(" , "));