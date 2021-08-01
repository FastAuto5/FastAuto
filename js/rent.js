'use strict';





let cars=[];
let newCar=[];
let models=[];
let modelyear=[];
// console.log("before",cars);


function Car(model, year,price,src) {

  this.model = model;
  // this.type
  this.year = year;
  this.price=price;
  this.src=src;
  cars.push(this);
  models.push(this.model);
  modelyear.push(this.year);

  // console.log("you",this.name);
}

let rent=[];
let filtermodels=[];
let filterCar=[];
let filteryears=[];

function InputCar(model, year) {

  this.model = model;
  this.year = year;
  rent.push(this);
  filtermodels.push(this.model);
  filteryears.push(this.year);
  filterCar.push(this);

}







function carInstances(){
  


carInstances();
let divShow;
let imgages=[];
let ulImg;
let liImg;
let liInfo;
function render(){
for (let i = 0; i < cars.length; i++) {
  // if the type rental cars[i].type==rent

  divShow=document.getElementById('showall');

  
ulImg=document.createElement('ul');

  divShow.appendChild(ulImg);

liImg=document.createElement('li');
liInfo=document.createElement('li');

ulImg.appendChild(liImg);
ulImg.appendChild(liInfo);

  imgages=document.createElement('img');
  liImg.appendChild(imgages);
  liInfo.textContent=` ${cars[i].model} ${cars[i].year} {${cars[i].price}$} PerDay`



  imgages.src=cars[i].src;
  imgages.className='styleimg';

  imgages.setAttribute('width',300);
  imgages.id='car'+ i;


  // else type is buy






  console.log('show',imgages);

}
}
render();








let form=document.getElementById('form');
form.addEventListener('submit',search);

let showRent=document.getElementById('showRent');
showRent.addEventListener('click',buttons);



function search(event){
  event.preventDefault();
  //   let cars=[];
  filtermodels=[];
  filteryears=[];
  let model=event.target.model.value;
  let year=parseInt(event.target.year.value);


  newCar=new InputCar(model, year);


  console.log('test0',filtermodels);
  console.log('test',models);
  console.log('test1',modelyear);
  console.log('test2',filteryears);


  let carsImg=document.getElementById('showall');
  carsImg.textContent=' ';

  let ulElemnt=document.getElementById('nms');
  ulElemnt.textContent='';
  for (let i = 0; i < cars.length; i++) {

    if (models[i].includes(filtermodels) && modelyear[i].includes(filteryears)){

      console.log('hi');


      console.log(cars[i].model);
      let liElement=document.createElement('li');
      ulElemnt.appendChild(liElement);
      let imgElemnt=document.createElement('img');
      ulElemnt.appendChild(imgElemnt);
      imgElemnt.setAttribute('src', cars[i].src) ;
      imgElemnt.setAttribute('width', '500');
      liElement.textContent=` ${cars[i].model} ${cars[i].year} {${cars[i].price}$} PerDay`;
      console.log('img',imgElemnt);
      console.log('test3',cars[i]);
    }
    // console.log(newCar);
    // console.log(event.target.model.value);
    // console.log(event.target.year.value);







    // console.log(event)



  }

}

function updateStorage() {

  // console.log(Coffee.drinks.toString());
  // console.log(Item.all);

  let stringArr = JSON.stringify(rent);
  // console.log(stringArr);

  localStorage.setItem('rentcar', stringArr);

}



function buttons(){


  let divbtn=document.getElementById('cars');
  let RentBtn=document.createElement('button');
  divbtn.appendChild(RentBtn);
  RentBtn.textContent = 'Rent';
  RentBtn.type = 'button';
  console.log(RentBtn);
  RentBtn.id='rent';


  let ViewBtn=document.createElement('button');
  divbtn.appendChild(ViewBtn);
  ViewBtn.textContent = 'View';
  ViewBtn.type = 'button';
  console.log(ViewBtn);
  ViewBtn.id='view';
  RentBtn.addEventListener('click', updateStorage);
  showRent.removeEventListener('click',buttons);


}
