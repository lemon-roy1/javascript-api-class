const product  =[
    {name:'laptop' , parice : 65000 , color : 'silver'},
    {name:'pc' , parice : 45000 , color : 'red'},
    {name:'tv' , parice : 65000 , color : 'green'},
    {name:'wathc' , parice : 35000 , color : 'blue'},
    {name:'camara  ', parice : 25000 , color : 'gree'},
    {name:'dastop' , parice : 23000 , color :'purpe'},
    {name:'tj' , parice : 12000 , color : 'yollow'},
];
const output = product.map(products =>products.parice)
const  potocoll = product.map(tarmenal => tarmenal.name)
// console.log(potocoll);
 //product.forEach( products => console.log(products.color));


 product.forEach( product => {

 })

//  Filter
const cheap = product.filter(products=> products.parice >= 25000);//  =>, 
console.log(cheap);


const topik = product.find(p => p.name.includes('n'))
console.log(topik);