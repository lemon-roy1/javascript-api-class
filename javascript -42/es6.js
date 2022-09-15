const numbers = [ 32, 45 , 56 , 53, 12 ];

const sdt ={
    name :'Lemon roy',
    age : 23,
    hobe:['king master','bonar'],

}
const about = `my name is ${sdt.name} age of ${sdt.age} has number ${numbers[4]} `;
console.log(about)

const getFilt = ()=>55 ;
const add = num =>num *3 ;
const isIven = x => x % 2 == 0;
const addTheird = ( x,y,z )=> x + y + z;

const doMath = (num2 ,num3 ) =>{
    const sun = num2 +num3 ;
    return sun;
}

const newNumber = [...numbers, 54];
console.log(newNumber)