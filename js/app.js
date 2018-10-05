const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
 myHeading.style.color = myTextInput.value;
});

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
   myList[i].style.color = 'purple';
}


const error = document.getElementsByClassName('error');

for (let i = 0; i < error.length; i += 1) {
   error[i].style.color = 'red';
}



const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
p.textContent = input.value + ':';

												});
