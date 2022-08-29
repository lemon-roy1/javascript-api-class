const obj = {
    id: 'IH Dhaka bazic',
    name: 'Additto Bormon',
    House:'It bare.com'
}
const strings = JSON.stringify(obj);
console.log(strings);
// {"id":"IH Dhaka bazic","name":"Additto Bormon","House":"It bare.com"}
const datas =JSON.parse(strings);
console.log(datas);
//{ id: 'IH Dhaka bazic', name: 'Additto Bormon', House: 'It bare.com' }

