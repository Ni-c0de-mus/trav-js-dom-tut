// EXAMINE THE DOCUMENT OBJECT //

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);

// document.title = 123

//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);

//console.log(document.all[10] = 'hello');

//console.log(document.forms);
//console.log(document.links);
//console.log(images);


// GET ELEMENT BY ID //

//console.log(document.getElementById('header-title'));

//var headerTitle = document.getElementById('header-title');
//var header =document.getElementById('main-header');
//var main = document.getElementById('main');

//console.log(headerTitle);


//headerTitle.textContent = 'hello';


//headerTitle.innerText = 'Goodbye';

//console.log(headerTitle.innerText);

//headerTitle.innerHTML = '<h2>hello</h2>';

//header.style.borderBottom = 'solid 3px #000';

//main.style.backgroundColor = 'yellow';
//main.style.border ='3px solid red';


// GET ELEMENTS BY CLASS NAME //

var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Jello 2';
//items[1].style.
//items[2].style.backgroundColor = 'green';
//items[3].style.backgroundColor = 'brown';
//items[3].style.textDecoration ='underline';
//items[4].style.backgroundColor = 'indigo'
//items[4].style.color = 'white';
//items[4].style.border = '6px solid pink';
//items[5].style.color = 'red';
//items[5].style.fontStyle = 'italic';

/* for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'yellow';
    items[i].style.color = 'red';
    items[i].style.fontStyle = 'italic';
    items[i].style.fontVariant = 'small-caps';
} */


// GET ELEMENTS BY TAG NAME //

/*var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1])

li[1].textContent = 'hello 2';
li[1].style.fontweight = 'bold';
li[2].style.backgroundColor = 'yellow';

for(var i = 0; i < li.length; i++) {
    items[i].style.backgroundColor = 'indigo';
    items[i].style.color = 'white';
    items[i].style.fontStyle ='italic';
    items[i].style.fontVariant = 'small-caps';
} */

// QUERY SELECTOR //

/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px red';
header.style.borderTop = '3px solid indigo';

var input = document.querySelector('input');
input.value = 'Jello Furld';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

var item = document.querySelector('.list-group-item');
item.style.fontColor = '#000';
item.style.fontStyle = 'italic';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'violet';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

secondItem.style.fontStyle = 'italic';

var fourthItem = document.querySelector('.list-group-item:nth-child(4)');

fourthItem.style.color = 'green';
fourthItem.style.fontVariant ='small-caps';
fourthItem.style.fontStyle = 'italic';
fourthItem.style.textShadow =' 2px 2px gold'

var fifthItem = document.querySelector('.list-group-item:nth-child(5)');

fifthItem.style.color = 'blue';
fifthItem.style.textShadow = '2px 2px gold' */

// QUERY SELECTOR ALL //

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'hello';
/* titles[0].style.color = 'gold';
titles[0].styles.textShadow = '2px 2px black';
titles[0].styles.fontWeight = 'bold';

titles[1].textContent = 'Bingy Bong';
titles[1].style.color = 'violet';
*/

/* var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even');

for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'gold';
}


for(var i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = 'red';
}
*/

// TRAVERSING THE DOM //

var x = 2;
var y = 3;
var z = x * y;
console.log(z);