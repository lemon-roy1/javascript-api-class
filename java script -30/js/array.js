const add = (first , secned) => first * secned ;
// console.log(add (20, 10))

// more array

const subject  = ( a, b, c, d, e = 0 ) =>{
 const sum = a + b;
 const num = sum - c ;
 const number = num * d;
 const model = number / 2;
 return model;

}
console.log(subject ( 1, 4, 8, 6, 7 ));
