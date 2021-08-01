'use strict';





let cars=[];
let newCar=[];
let models=[];
let modelyear=[];
// console.log("before",cars);


function Car(model, year,price,src) {

  this.model = model;
  this.year = year;
  this.price=price;
  this.src=src;
  cars.push(this);
  models.push(this.model);
  modelyear.push(this.year);

  // console.log("you",this.name);
}

let filtermodels=[];
let filterCar=[];
let filteryears=[];
function InputCar(model, year) {

    this.model = model;
    this.year = year;

    filtermodels.push(this.model);
    filteryears.push(this.year);
    filterCar.push(this);

}

new Car ('Bmw M34Oi XDrive Touring Black','2019', 80 ,"img/Bmw M34Oi XDrive Touring Black 2019 3.jpg");
new Car ('Bmw i3 red','2020', 80 ,"img/Bmw i3 2018 1.jpg");
new Car ('Bmw M55Oi XDrive Navy Blue','2018', 30 ,"img/Bmw M55Oi XDrive 2018  2.jpg");
new Car ('Bmw X5 White','2021', 90 ,"img/Bmw X5 2021  4.jpg");
new Car ('RangeRover Defender GondwanaStone ',' 2019', 95 ,"img/RangeRover Defender GondwanaStone 2019 5.jpg");
new Car ('RangeRover Evoque White ',' 2019', 70 ,"img/RangeRover Evoque White 2019 1.jpg");
new Car ('RangeRover Sport Red ',' 2020', 60,"img/RangeRover Sport Red 2020 4.jpg");
new Car ('MG Cyberster Red','2021', 2000 ,"img/MG Cyberster Red 2021.jpg");
new Car ('Toyota Supra Yellow','2020', 1500 ,"img/Toyota Supra Yellow 2020.webp");
new Car ('Chevy Corvette Green','2019', 3000 ,"img/Chevy Corvette Green 2019.jpg");
new Car ('Mercedes-AMG GT Orange','2021', 4000 ,"img/Mercedes-AMG GT Orange 2021.jpg");
new Car ('Ford GT Liquid Silver ','2019', 800 ,"img/Ford GT Liquid Silver  2017 3.jpg");
new Car ('Ford Mustang blue ','2018', 500 ,"img/Ford Mustang blue 2015 4.jpg");
new Car ('Ford Expedition White ','2021', 700 ,"img/Ford Expedition White 2021.jpg");
new Car ('Ford Edge Red','2020', 800 ,"img/Ford Edge Red 2020.jpg");
new Car ('Ford Fusion White','2019', 800 ,"img/Ford Fusion White 2019.jpg");
new Car ('Audi A3 Blue','2020', 300 ,"img/Audi A3 2020 Blue.jpg");
new Car ('Audi R8 Spyder Green','2020', 350 ,"img/Audi R8 Spyder Green 2020.jpg");
new Car ('Audi Q7 Black','2018', 300 ,"img/Audi Q7 Black 2018.jpg");
new Car ('Toyota Prius Red','2018', 300 ,"img/Toyota Prius Red 2018.jpg");
new Car ('Toyota Avalon Hybrid Black','2019', 300 ,"img/Toyota Avalon Hybrid Black 2019.jpg");
new Car ('Toyota Mirai Navy Blue','2021', 450 ,"img/Toyota Mirai Navy Blue 2021.jpg");
new Car ('Toyota Camry Red','2018', 450 ,"img/Toyota Camry Red 2018.webp");
new Car ('Xc90 Volvo Grey','2021', 450 ,"img/Xc90 Volvo Grey 2021.jpg");
new Car ('S60 Volvo Sky Blue','2018', 100 ,"img/S60 Volvo Sky Blue 2018.jpeg");

let x

let form=document.getElementById('form');
form.addEventListener('submit',search);


function search(event){
  event.preventDefault();

//   let cars=[];
filtermodels=[];
filteryears=[];
  let model=event.target.model.value;
  let year=parseInt(event.target.year.value);
 

 x= newCar=new InputCar(model, year);


  console.log('test0',filtermodels);
console.log('test',models);
console.log('test1',modelyear);
console.log('test2',filteryears);


let carsImg=document.getElementById('allCars');
carsImg.textContent=" ";

  let ulElemnt=document.getElementById('nms');
  ulElemnt.textContent=""
  for (let i = 0; i < cars.length; i++) {
    
    if (models[i].includes(filtermodels) && modelyear[i].includes(filteryears)){

        console.log('hi');
        
       
       console.log(cars[i].model); 
      let liElement=document.createElement('li');
      ulElemnt.appendChild(liElement);
      let imgElemnt=document.createElement('img');
      ulElemnt.appendChild(imgElemnt);
      imgElemnt.setAttribute('src', cars[i].src)  ;
      imgElemnt.setAttribute('width', '500');
      liElement.textContent=`${imgElemnt} ${cars[i].model} ${cars[i].year} {${cars[i].price}$} PerDay`;
        console.log("img",imgElemnt);
        console.log('test3',cars[i]);
    }
    // console.log(newCar);
    // console.log(event.target.model.value);
    // console.log(event.target.year.value);
    




    

    // console.log(event)

    

  }
  let divbtn=document.getElementById('cars');
  let RentBtn=document.createElement('button');
  divbtn.appendChild(RentBtn);
  RentBtn.textContent = "Rent";
  RentBtn.type = "button";
  console.log(RentBtn);
  RentBtn.id='rent';


  let ViewBtn=document.createElement('button');
  divbtn.appendChild(ViewBtn);
  ViewBtn.textContent = "View";
  ViewBtn.type = "button";
  console.log(ViewBtn);
  ViewBtn.id='view';
  RentBtn.addEventListener('click', updateStorage);




}


  function updateStorage() {

    // console.log(Coffee.drinks.toString());
    // console.log(Item.all);
  
    let stringArr = JSON.stringify(x);
    // console.log(stringArr);
  
    localStorage.setItem('rentcar', stringArr);
  
  }


  
