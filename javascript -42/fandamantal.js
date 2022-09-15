const fatherName = 'arnold';
let seaso = 'rainy';
seaso ='winter'
// < ,> ,=== , !== ,<= , >=
// and $$, ||
if( fatherName === 'arnold' || seaso !== 'rainy'){
    console.log('right');
}

else if(  fatherName !== 'arnold' && seaso !== 'winters'){
    console.log('today')
}
else{
    console.log('not rigth')
}

for( let i = 0 ;Number.length; i ++ ){
    const numbers = Number[i]
    console.log (numbers)
}

function multiplt( x ,y){
    const result = x*y;
    return result; 
}
const output = multiplt (35 ,56)
console.log(output)


const student = {
    name : 'lemon roy',
    age :32,
    faburite :'tomato'
}
const myHode = 'age';

console.log(student[myHode]);

console.log(student.name);// direct
console.log(student['age']);  //bast 