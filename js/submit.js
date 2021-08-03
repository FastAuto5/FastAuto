'use strict';

let Cart = function (items) {
    // this.items is an array of CartItem instances.
    this.items = items;
};

let tPrice=[];

let form = document.getElementById('submitForm');


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

let confirmButton;

let globTotalPric = [];
let carPrice = 0;
let temp = 0;
let tempArray = [];




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



        let tDay = document.createElement('td');
        tRow.appendChild(tDay);


        // let dayInput = document.createElement('form');
        // tDay.appendChild(dayInput);
        // let name = document.createElement('p');
        // name.textContent = `Rent days for car ${i+1}`;
        let dayField = document.createElement('input');
        dayField.setAttribute('type', 'number');
        dayField.setAttribute('name', `name${i}`);
        dayField.setAttribute('value', '1');
        dayField.id= `input${i}`;
        // dayField.className = "quantity";


        let quantityField = dayField.value;
        dayField.onchange = function () {
            quantityField = dayField.value;
            // console.log('hello');
            if (isNaN(dayField.value) || dayField.value <= 0) {
                dayField.value = 1;
                quantityField = 1;
            }
            let totalPrice = 0;
            carPrice = quantityField * globParArr[i].price;
            tPrice.textContent = carPrice;
            totalPrice = totalPrice + carPrice;
            // globTotalPric = totalPrice;
            // console.log(totalPrice);
            temp = dayField.value;
            // console.log(tPrice.id);
            globTotalPric.push(tPrice.textContent);
            // console.log(globTotalPric);
        };


        carPrice = quantityField * globParArr[i].price;
        tPrice = document.createElement('td');
        tRow.appendChild(tPrice);
        tPrice.textContent = carPrice;
        tPrice.id = i;
       
// console.log(tPrice);

        // dayField.setAttribute('onchange',"changable()");

        // form.appendChild(name);
        tDay.appendChild(dayField);


        // tDataDelete.textContent = document.createElement('button')
        tDataDelete.appendChild(deleteButton);


        deleteButton.addEventListener('click', removeItemFromCart);

        // let tConfrim = document.createElement('td');
        // tRow.appendChild(tConfrim);
        // confirmButton = document.createElement('button');
        // confirmButton.textContent = 'Confirm';
        // confirmButton.type = "submit";
        // form.appendChild(confirmButton);
        // form.addEventListener('submit', confirmClick);

    }

}



let daysArray = [];
function confirmClick(event) {
    event.preventDefault();
    console.log(event.target.name1.valueAsNumber);
    let data = localStorage.getItem('rentcar');
    let parsedArr = JSON.parse(data);
    for (let i = 0; i < parsedArr.length; i++) {
        let dayRent = eval(`event.target.name${i}.valueAsNumber`);
        console.log(dayRent);
        let days = dayRent;
        daysArray.push(days);
    }

    console.log(daysArray);
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
            secText.textContent = `Thanks ${nameInput}. Your ${globParArr[i].model} will be delvired at ${locationInput} after 3 days. The total cost will be ${globTotalPric} fot this car.`;

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

console.log(tPrice);