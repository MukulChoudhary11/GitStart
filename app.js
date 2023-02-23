var items =document.getElementsByClassName('list-group-item');
items.style.fontWeight='bold';
var items =document.getElementsByClassName('list-group-item');
items[1].style.fontWeight='bold';
'bold'
items[0].style.backgroundColor='green';
'green'

items[2].style.backgroundColor='grey';
'grey'
for(var i=0;i<=items.length;i++){
    items[i].style.fontWeight='bold';
}

//4th change
var li=document.getElementsByTagName('li');
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backdropColor='yellow';

for(var i=0;i<li.length;i++){
    items[i].style.backdropColor='#f4f4f4';
}
