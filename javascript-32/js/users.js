function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function displayUsers(data){
    const usres =document.getElementById('users-btn')
    for( const user of data){
        const posdiv =document.createElement('div');
        posdiv.classList.add('posts')
        console.log(user)
        posdiv.innerHTML = `
        <h4>user-${user.name} </4>
        <h5> phon : ${user.phone} </h5>
        <p>email :${user.website} </p>
        `;
        usres.appendChild(posdiv);
    }
   
}
users()