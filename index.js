document.body.style.background='silver'
document.getElementById('title').style.color='green';
document.getElementById('fruits').style.textTransform = "uppercase"
document.getElementById('veges').style.textTransform = "uppercase"

let newfruit =document.createElement('li');
newfruit.innerHTML='oranges'
document.getElementById('fruList').appendChild(newfruit);

let newvege =document.createElement('li');
newvege.innerHTML='cabbage'
document.getElementById('vegList').appendChild(newvege);
document.getElementById('banana').style.maxWidth('200px')
document.getElementById('apple').style.maxWidth('200px')
