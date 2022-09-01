const bottol = { color :'yellow', price:50,isCleaned:true, capacirty :1 };
const kesy = Object.keys(bottol);
console.log(kesy);
// ans:[ 'color', 'price', 'isCleaned', 'capacirty' ] 

const values = Object.values(bottol);
console.log(values);
// ans:[ 'yellow', 50, true, 1 ]


const pair = Object.entries(bottol);
console.log(pair)
// ans:[
//     [ 'color', 'yellow' ],
//     [ 'price', 50 ],
//     [ 'isCleaned', true ],
//     [ 'capacirty', 1 ]
//   ]

// freeze  function korla remove hoba na
Object.freeze(bottol);



// ans:dilat korta parba na seal
// Object.seal(bottol);

delete bottol.isCleaned;

// ans:{ color: 'yellow', price: 50, capacirty: 1 }

bottol.price = 1000 ;
bottol.height = 12;
console.log(bottol)
