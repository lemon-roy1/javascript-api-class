const num = [ 34 ,56];
// const [ x ,z]= [43 ,45]
// console.log(x, z)

const [x ,z]=num;

const sdt ={
    name :'Lemon roy',
    age : 23,
    hobe:['king master','bonar'],
}
const [num1 , num2] = sdt.hobe;



// object destructuring

const{name, age} ={ name: 'alu', age :34};

const amployer ={
    id : 'vs code',
    designalion: 'developer',
    machine:'mas',
    languages:['html','css' , 'js'],
    spacification:{
        height: 65,
        whight: 67,
        address: 'kummare',
        drink: 'water',
        watch:{
            color: 'black ',
            price :500 ,
            brent : 'garain'
        }
    }
}
const {machine, id , languages}= amployer;
const { height, drink}= amployer.spacification;
const {brent}=amployer.spacification.watch;
