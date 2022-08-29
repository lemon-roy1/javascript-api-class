const number = [ 2 , 3, 4, 5, 6, 7]

function getDobol(numbers){
    const output = [];
    for(const number of numbers){
        const doboult = dobolIt(number);
        output.push(doboult);
    }
    return output;
}
  const dobolIt = num => num *2
const result =getDobol(number);
console.log(result);
