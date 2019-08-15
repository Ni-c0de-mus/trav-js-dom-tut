// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.all[10].textContent = "Hello!"

//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

// GET ELEMENT BY ID //

//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText ='Goodbye';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h2>Hello</h2>';
//headerTitle.style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASS NAME //
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';


//items[2].textContent = 'Bing Bong';
//items[2].style.margin ='1rem 0';
//items[2].style.backgroundColor= 'red';
//[2].style.color = 'yellow';
//items[2].style.fontStyle = 'italic';
//items[2].style.letterSpacing = '0.2rem'

//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'hello 3';
//li[1].style.fontWeight = 'bold';
//li[1].style.border = '1px solid red';


//for(var i = 0; i < li.length; i++)         {
 //   li[i].style.backgroundColor ='blue';
 //   li[i].style.color = 'white';
 //   }


 // QUERY SELECTOR //

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px red';

var input = document.querySelector('input');
 input.value = 'hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value = "send";

var item = document.querySelector('.list-group-item:last-child');
item.style.color = 'blue';
item.style.backgroundColor = 'yellow';

var fourthItem = document.querySelector('.list-group-item:nth-child(4)');
fourthItem.style.color = 'pink';
fourthItem.style.backgroundColor = 'turquoise';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.fontStyle = 'italic';
thirdItem.style.backgroundColor = 'red';
thirdItem.style.color = 'yellow';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
secondItem.style.backgroundColor = 'beige';

// QUERY SELECTOR ALL //






