"use strict";

const form = document.querySelector('.todo-form');
const ul = document.querySelector('.todos');
const btn = document.querySelector('.btn');
const input = document.querySelector('#item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    liMaker(input.value);
    input.value = '';
    console.log(localStorage)
});

data.forEach(item => {
    liMaker(item);
});

btn.addEventListener('click', function() {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    itemsArray = [];
})