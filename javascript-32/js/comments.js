function comments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(Data => DisplayComment(Data))

}
function DisplayComment(Data){
    const ul = document.getElementById('comments-btn');
    for(const comments of Data){
        
        const li = document.createElement('li');
        li.innerHTML =comments.name
        
        ul.appendChild(li);
        
    }

}