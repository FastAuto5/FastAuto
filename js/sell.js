'use strict';

let myform = document.getElementById('myform');
myform.addEventListener('submit', formsubmit);

function Newcar(name, Type, price, src, description) {

    this.name = name;
    this.Type = Type;
    this.price = price;
    this.src = src;
    this.description = description;
    this.isRent = false;
    this.isBuy = false;
    newcar.push(this);
}

let newcar = [];
let storeInfoRent = [];
let storeInfoBuy = [];

function formsubmit(event) {
    event.preventDefault();

    let name = event.target.namefiled.value;
    let Type = event.target.yearOfcar.value;
    let price = Number(event.target.rentofcar.value);
    let src = event.target.src.value;
    let description = event.target.description.value;


    let origin = event.target.typeofsell.value;

    if (origin === 'rent') {
        // console.log(storeInfoRent);
        let rentCar = new Newcar(name, Type, price, src, description);
        rentCar.isRent = true;
        storeInfoRent.push(rentCar);
        localStorage.setItem('rentInput', JSON.stringify(storeInfoRent));

    }

    else if (origin === 'buy') {

        let buyCar = new Newcar(name, Type, price, src, description);
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