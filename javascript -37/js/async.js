function dosonString(){
console.log('third')
}
console.log('frist');
console.log('secent');
// setTimeout(()=>{ console.log('thirt')},5000) ;
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log('fore');
console.log('fifte')