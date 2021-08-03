'use strict';

let myform = document.getElementById('myform');
myform.addEventListener('submit', formsubmit);

function Newcar(model, year, price, src, text) {

    this.model = model;
    this.year = year;
    this.price = price;
    this.src = src;
    this.text = text;
    this.isRent = false;
    this.isBuy = false;
    newcar.push(this);
}

let newcar = [];
let storeInfoRent = [];
let storeInfoBuy = [];

function formsubmit(event) {
    event.preventDefault();

    let model = event.target.model.value;
    let year = parseInt(event.target.year.value);
    let price = parseInt(event.target.price.value);
    let src = event.target.src.value;
    let text = event.target.text.value;


    let origin = event.target.typeofsell.value;

    if (origin === 'rent') {
        // console.log(storeInfoRent);
        let rentCar = new Newcar(model, year, price, src, text);
        rentCar.isRent = true;
        storeInfoRent.push(rentCar);
        localStorage.setItem('rentInput', JSON.stringify(storeInfoRent));

    }

    else if (origin === 'buy') {

        let buyCar = new Newcar(model, year, price, src, text);
        buyCar.isBuy = true;
        storeInfoBuy.push(buyCar);
        localStorage.setItem('buyInput', JSON.stringify(storeInfoBuy));


    }
}

let rentData = localStorage.getItem('rentInput');
let buyData = localStorage.getItem('buyInput');

if (rentData != null) {
    storeInfoRent = JSON.parse(rentData);

}
if (buyData) {
    storeInfoBuy = JSON.parse(buyData);
}



function printStoarge() {
    document.getElementById("print").innerHTML = localStorage.getItem("rentInput");
}