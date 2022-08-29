document.getElementById('add-btn').addEventListener('click',function(){
    const contin = document.getElementById('friends');
    const friend =document.createElement ('div');
    friend.innerHTML=`
    <h3> i mise you </h3>
    <p> i am paroud of my sou</p>
    `
    contin.appendChild(friend)

})