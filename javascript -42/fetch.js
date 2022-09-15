const sdt ={
    name :'Lemon roy',
    age : 23,
    hobe:['king master','bonar'],
}
const sdtJSON= JSON.stringify(sdt);
console.log(sdt);
console.log(sdtJSON);
const studentJsonObj = JSON.parse(sdtJSON);
console.log(studentJsonObj);