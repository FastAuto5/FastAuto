'use strict';

let Cart = function (items) {
    // this.items is an array of CartItem instances.
    this.items = items;
};



let table = document.getElementById('cart');
console.log(table);
let cart;

let data = localStorage.getItem('rentcar');
let globParArr = JSON.parse(data);
console.log(globParArr);

// let testArr = [1,2,3,4];
// localStorage.setItem('cart', JSON.stringify(testArr))

function loadCart() {
    let cartItems = localStorage.getItem('cart') || [];
    cart = new Cart(cartItems);
}

console.log(cart);

function renderCart() {
    loadCart();
    clearCart();
    showCart();
}
function clearCart() {
    tbody.textContent = "";
}

function showCart() {

    // TODO: Find the table body
    let tbody = document.getElementById('tbody');
    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    // let data = [];
    let data = localStorage.getItem('rentcar');
    let parsedArr = JSON.parse(data);
    console.log(parsedArr);
    for (let i = 0; i < parsedArr.length; i++) {
        let tRow = document.createElement('tr');
        tbody.appendChild(tRow);
        let tDataDelete = document.createElement('td');
        tRow.appendChild(tDataDelete);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.id = i;

        // tDataDelete.textContent = document.createElement('button')
        tDataDelete.appendChild(deleteButton);
        let tDataQuant = document.createElement('td');
        tRow.appendChild(tDataQuant);
        tDataQuant.textContent = parsedArr[i].model;
        let tDataItem = document.createElement('td');
        tRow.appendChild(tDataItem);
        tDataItem.textContent = parsedArr[i].year;

        deleteButton.addEventListener('click', removeItemFromCart);
    }
}

function removeItemFromCart(event) {
    // let data = [];
    let data = localStorage.getItem('rentcar');
    let parsedArr = JSON.parse(data);
    if (event.target.id !== null) {
        console.log(event.target.id);
        // let data = localStorage.getItem('cart');
        // let parsedArr = JSON.parse(data);
        console.log('before', globParArr.length);
        // console.log(cart.items[event.target.id]);
        globParArr.splice(event.target.id, 1);
        console.log('after', globParArr.length);
        console.log(parsedArr.length);
        localStorage.clear();
        let stringArr = JSON.stringify(globParArr);
        localStorage.setItem('rentcar', stringArr);
        renderCart();

    }
}

renderCart();


let submitButton = document.getElementById('submit');

let upperText = document.getElementById('col-1');
let textDiv = document.getElementById('thankTextDiv');
submitButton.addEventListener('submit', click);


function click(event) {
    event.preventDefault();
    // console.log(event.target.username.value);
    // thankText.textContent=""
    let nameInput = event.target.username.value;
    let locationInput = event.target.location.value;
    textDiv.textContent = "";

    if (nameInput !== '' && locationInput !== '') {
        table.textContent = "";
        tableText.textContent = "";
        upperText.textContent = "";

        for (let i = 0; i < globParArr.length; i++) {

            let secText = document.createElement('p');
            textDiv.appendChild(secText);
            secText.textContent = `Thanks ${nameInput}. Your ${globParArr[i].model} will be delvired at ${locationInput} after 3 days.`;

        }



    } else {
        let thankText = document.createElement('p');
        textDiv.appendChild(thankText);
        console.log('hi');
        thankText.textContent = "Please add your name and location";
    }



}

let clearButton = document.getElementById('clearall');
clearButton.addEventListener('click', clearFun);
let tableText = document.getElementById('copy');

function clearFun() {
    table.textContent = "";
    localStorage.clear();
    tableText.textContent = "";
    //  clearButton.textContent= "";

}