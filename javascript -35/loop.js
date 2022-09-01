const numbers = [12, 34 , 45, 56, 7, 5];

// for(const number of numbers){
//     console.log(number);
// }


const bottol = { color :'yellow', price:50, isCleaned:true, capacirty :1 }; 
const keys= Object.keys(bottol)
for(const key of keys){
    /**
     * color yellow
        price 50
        isCleaned true
        capacirty 1
     * */ 
    // console.log(key, bottol[key])

}
for(const key in keys){
   const value= bottol[key]
    // console.log(keys,value)
         
}
const pair = Object.entries(bottol);
console.log(pair);
for(const [keys ,value] of Object.entries(bottol)){
    console.log(keys,value);
}