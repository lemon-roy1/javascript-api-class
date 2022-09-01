const first = {a: 2 , b: 5, c: 6};
const second = {a: 2, b: 4, c: 9 };
// if(first === second){
// console.log('they are sona')
// }
// else{
//     console.log('different');
// }
 function compare (first,second){
    const firstkeys = Object.keys(first);
    const  secondkeys = Object.keys(second);
    if (firstkeys.length === secondkeys.length){
        for(const key of firstkeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
 }
 
