

const body = document.querySelector('body');
const heading = document.createElement('heading');
heading.innerHTML = "Mr.David's FamilY Tree";
body.append(heading);
heading.style.color = "red";
heading.style.background = "lightgray";
heading.style.margin = "50px";
heading.style.fontSize = "20px"

const mrDavid = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerHTML = "Mr.David";
mrDavid.append(h1);
h1.style.color = "blue"

//creating arrays for childern//
const John_children =  [ "Ali", "Mohsin","Alex","Tajwar"];
const Alex_children = ["Ayaz","Faizan","Karem","Sajjad"];
const Cend_children = ["Michelle","Sarah","Shireen","Sajjad"];



//main//
const ul = document.createElement('ul')
body.append(ul)

//john//
const li = document.createElement('li')
ul.append(li)
li.innerHTML  = "John"
const ul2 = document.createElement('ul')
li.append(ul2)
//alex//
const li2 = document.createElement('li')
ul.append(li2)
li2.innerHTML = "Alex"
const ul3 = document.createElement('ul')
li2.append(ul3)
//cenderalla//
const li3 = document.createElement('li');
ul.append(li3)
li3.innerHTML = "Cendrella";
const ul4 = document.createElement('ul');
li3.append(ul4)

John_children.forEach(name => {
    ul2.innerHTML +=`<li>${name}</li>`
});

Alex_children.forEach(name => {
  ul3.innerHTML +=`<li>${name}</li>`
});

Cend_children.forEach(name => {
  ul4.innerHTML +=`<li>${name}</li>`
});


