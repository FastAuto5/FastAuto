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

let buy=[];
let filtermodels=[];
let filterCar=[];
let filteryears=[];

function InputCar(model, year) {

  this.model = model;
  this.year = year;
  buy.push(this);
  filtermodels.push(this.model);
  filteryears.push(this.year);
  filterCar.push(this);

}

function carInstances(){
  
  new Car ('Porsche Cayman Navy Blue','2021', '59.901' ,"img/Porsche Cayman Navy Blue  2021.jpg");
  new Car ('Porsche Boxter White','2018', '59.001' ,"img/Porsche Boxter 718 White 2018.jpg");
  new Car ('Porsche Cayenne White','2018', '66.801' ,"img/Porsche Cayenne White 2018.jpg");
  new Car ('Porsche Macan Black','2021', '52.101' ,"img/Porsche Macan Black 2021.jpg");
  new Car ('Mitsubishi Xpander White','2021','1.000001',"img/Mitsubishi Xpander  White 2021.jpg");
  new Car ('Mitsubishi Pajero Montero Black',' 2021', '51.490' ,"img/Mitsubishi Pajero Montero Black 2021.jpg");
  new Car ('Mitsubishi Space star Gold',' 2020', '6.901' ,"img/Mitsubishi Space star Gold 2020.jpg");
  new Car ('Kia Ev6 Red','2021','58.295',"img/Kia Ev6 Red 2021.png");
  new Car ('Kia Soul Red','2021', '17,590' ,"img/Kia Soul Red 2021.jpg");
  new Car ('Kia Telluride Black','2020', '35,085' ,"img/Kia Telluride Black 2020.jpg");
  new Car ('Mercedes-AMG GT Orange','2021', '325,000' ,"img/Mercedes-AMG GT Orange 2021.jpg");
  new Car ('Ford GT Liquid Silver ','2019', '500,000' ,"img/Ford GT Liquid Silver  2017 3.jpg");
  new Car ('Ford Mustang blue ','2018', '25,585' ,"img/Ford Mustang blue 2015 4.jpg");
  new Car ('Ford Expedition White ','2021', '52,810' ,"img/Ford Expedition White 2021.jpg");
  new Car ('Ford Edge Red','2020', '31,100' ,"img/Ford Edge Red 2020.jpg");
  new Car ('Ford Fusion White','2019', '20,255' ,"img/Ford Fusion White 2019.jpg");
  new Car ('Audi A3 Blue','2020', '33,300' ,"img/Audi A3 2020 Blue.jpg");
  new Car ('Audi R8 Spyder Green','2020', '154,900' ,"img/Audi R8 Spyder Green 2020.jpg");
  new Car ('Audi Q7 Black','2018', '45,200' ,"img/Audi Q7 Black 2018.jpg");
  new Car ('Toyota Prius Red','2018', '23,900' ,"img/Toyota Prius Red 2018.jpg");
  new Car ('Toyota Avalon Hybrid Black','2019', '39,000' ,"img/Toyota Avalon Hybrid Black 2019.jpg");
  new Car ('Toyota Mirai Navy Blue','2021', '50,455' ,"img/Toyota Mirai Navy Blue 2021.jpg");
  new Car ('Toyota Camry Red','2018', '20,300' ,"img/Toyota Camry Red 2018.webp");
  new Car ('Xc90 Volvo Grey','2021', '49,695' ,"img/Xc90 Volvo Grey 2021.jpg");
  new Car ('S60 Volvo Sky Blue','2018', '35,000' ,"img/S60 Volvo Blue Sky 2018.jpg");
}
carInstances();




  let divShow;
  let imgages=[];
  let ulImg;
  let liImg;
  let liInfo;
  function render(){
  for (let i = 0; i < cars.length; i++) {
    // if the type Buy cars[i].type==rent
  
    divShow=document.getElementById('showall');
  
  
  ulImg=document.createElement('ul');
  
    divShow.appendChild(ulImg);
  
  liImg=document.createElement('li');
  liInfo=document.createElement('li');
  
  ulImg.appendChild(liImg);
  ulImg.appendChild(liInfo);
  
    imgages=document.createElement('img');
    liImg.appendChild(imgages);
    liInfo.textContent=` ${cars[i].model} ${cars[i].year} {${cars[i].price}}$`;
  
  
  
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

let showBuy=document.getElementById('showBuy');
showBuy.addEventListener('click',buttons);



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
      liElement.textContent=` ${cars[i].model} ${cars[i].year} {${cars[i].price}}$`;
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

  let stringArr = JSON.stringify(buy);
  // console.log(stringArr);

  localStorage.setItem('Buycar', stringArr);

}



function buttons(){


  let divbtn=document.getElementById('carss');
  let BuyBtn=document.createElement('button');
  divbtn.appendChild(BuyBtn);
  BuyBtn.textContent = 'Buy';
  BuyBtn.type = 'button';
  console.log(BuyBtn);
  BuyBtn.id='Buy';


  let ViewBtn=document.createElement('button');
  divbtn.appendChild(ViewBtn);
  ViewBtn.textContent = 'View';
  ViewBtn.type = 'button';
  console.log(ViewBtn);
  ViewBtn.id='view';
  BuyBtn.addEventListener('click', updateStorage);
  showBuy.removeEventListener('click',buttons);


}