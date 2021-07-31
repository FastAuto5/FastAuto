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




// new Car ('Bmw M34Oi XDrive Touring Black','2019', 800 ,"img/fastauto.png");
// new Car ('Bmw i3 red','2017', 400 ,"img/fastauto.png");
// new Car ('Bmw M55Oi XDrive','2018', 300 ,"img/fastauto.png");
// new Car ('Bmw X5','2021', 900 ,"img/fastauto.png");
// new Car ('Ford Fusion White ','2019', 500 ,"img/fastauto.png");
// new Car ('Ford GT Liquid Silver ','2017', 1000 ,"img/fastauto.png");
// new Car ('Ford Mustang blue ',' 2015', 1050 ,"img/fastauto.png");
// new Car ('RangeRover Defender GondwanaStone ',' 2019', 950 ,"img/fastauto.png");
// new Car ('RangeRover Evoque White ',' 2019', 700 ,"img/fastauto.png");
// new Car ('RangeRover Sport Red ',' 2015', 600,"img/fastauto.png");
// new car ('Bmw M34Oi XDrive Touring Black,'2019', 800 ,"img/Bmw M34Oi XDrive Touring Black 2019 3.jpg");

new Car ('Bmw M34Oi XDrive Touring Black','2019', 80 ,"img/Bmw M34Oi XDrive Touring Black 2019 3.jpg");
new Car ('Bmw i3 red','2017', 80 ,"img/Bmw i3 2018 1.jpg");
new Car ('Bmw M55Oi XDrive','2018', 30 ,"img/Bmw M55Oi XDrive 2018  2.jpg");
new Car ('Bmw X5','2021', 90 ,"img/Bmw X5 2021  4.jpg");
new Car ('Ford Fusion White ','2019', 50 ,"img/Ford Fusion White 2019 1.jpg");
new Car ('Ford GT Liquid Silver ','2017', 100 ,"img/Ford GT Liquid Silver  2017 3.jpg");
new Car ('Ford Mustang blue ',' 2015', 105 ,"img/Ford Mustang blue 2015 4.jpg");
new Car ('RangeRover Defender GondwanaStone ',' 2019', 95 ,"img/RangeRover Defender GondwanaStone 2019 5.jpg");
new Car ('RangeRover Evoque White ',' 2019', 70 ,"img/RangeRover Evoque White 2019 1.jpg");
new Car ('RangeRover Sport Red ',' 2015', 60,"img/RangeRover Sport Red 2015 4.jpg");







// new Car('bmw1','2021',100,'img/Bmw M34Oi XDrive Touring Black 2019 3.jpg' );
// new Car('bmw1','2020',200,'fastauto.png' );
// new Car('bmw1','2019',500,'fastauto.png' );
// new Car('bmw1','2018',800,'fastauto.png' );
// new Car('bmw2','2021',700,'fastauto.png' );
// new Car('bmw2','2020',900,'fastauto.png' );
// new Car('bmw2','2019',300,'fastauto.png' );
// new Car('bmw2','2018',500,'fastauto.png' );





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


  
