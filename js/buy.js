'use strict';

let soldArr = [];
let cars = [];
let buy = [];


function updateVotes() {

  let stringArr1 = JSON.stringify(cars);
  // console.log(stringArr);

  localStorage.setItem('array', stringArr1);


}

function updatesold() {

  let stringArr1 = JSON.stringify(soldArr);
  // console.log(stringArr);

  localStorage.setItem('soldArr', stringArr1);


}

function updateStorage() {

  let stringArr = JSON.stringify(buy);


  localStorage.setItem('rentcar', stringArr);

}



function getVotes(){

    let data1 = localStorage.getItem('array');
    let parsedArr1 = JSON.parse(data1);
    if (parsedArr1 !== null) {
      cars = parsedArr1;
      console.log("issa",parsedArr1);
      // console.log("soldArr",parsedArr1);
  
    }
  
  
    let data = localStorage.getItem('soldArr');
    let parsedArr = JSON.parse(data);
    if (parsedArr !== null) {
      soldArr = parsedArr;
  
      console.log('soldArr', parsedArr);
  
    }


}


function getStorage() {

  for (let i = 0; i < localStorage.length; i++) {
    let data = localStorage.getItem('rentcar');
    let parsedArr = JSON.parse(data);
    if (parsedArr !== null) {
      buy = parsedArr;


    }
  }
}
getStorage();
let divShow;


let imgages = [];
let ulImg;
let liImg;
let liInfo;
let models = [];
let modelyear = [];

function Car(model, year, price, src, text) {

  this.model = model;
  // this.type
  this.year = year;
  this.price = price;
  this.src = src;
  this.sold = 0;
  this.text = text;


  cars.push(this);
  models.push(this.model);
  modelyear.push(this.year);


}


let filtermodels = [];
let filterCar = [];
let filteryears = [];

function InputCar(model, year, price) {

  this.model = model;
  this.year = year;
  this.price = price;
  buy.push(this);
  filtermodels.push(this.model);
  filteryears.push(this.year);
  filterCar.push(this);

}


function carInstances() {



  new Car('Ford GT Liquid Silver ', '2019', '35000', 'img/Ford GT Liquid Silver  2017 3.jpg', 'The Ford GT began life as a concept car designed in anticipation of the automaker\'s centennial year and as part of its drive to showcase and revive its  names such as Mustang and Thunderbird. At the 2002 North American International Auto Show,[3] Ford unveiled a new GT40 Concept car. Camilo Pardo, the then head of Ford\' studio, is credited as the chief designer of the GT and worked under the guidance of J Mays. Carroll Shelby, the original designer of the Shelby GT 500, was brought in by Ford to help develop the GT; which included performance testing of the prototype car. While under development, the project was called Petunia.This is what true innovation looks like. From its 3.5L EcoBoost  technology to its ultra-efficient aerodynamics, the Ford GT is the culmination of everything great we do at Ford. And it’s the same passion for innovation that can be seen throughout our entire vehicle lineup.');

  new Car('Ford Mustang blue ', '2018', '20000', 'img/Ford Mustang blue 2015 4.jpg', 'The world’s best-selling sports coupe is back and better than ever. Ford has unveiled the all-new 2018 Ford Mustang, which is the most advanced Mustang ever thanks to a comprehensive suite of advanced new technology, safety and convenience features. The 2018 Mustang also features improved performance over the 2017 Mustang thanks to powerful engine upgrades and the all-new available 10-speed automatic transmission. And you’ll be able to easily handle all that additional power with the available MagneRide suspension, which improves all aspects of the 2018 Mustang’s handling abilities. So let’s get right down to business and take a closer look at the all-new Mustang, including its release date.');
  new Car('Ford Expedition White ', '2021', '30000', 'img/Ford Expedition White 2021.jpg', 'Power, style and plenty of space for passengers and cargo give the 2021 Ford Expedition its swagger and imposing presence on the road. Equipped with the available Heavy-Duty Trailer Tow Package.* Add to that an available premium B&O Sound System by Bang and Olufsen, available heated and ventilated seating and plenty of tech to keep you confident and connected on the road. The 2021 Expedition also features the legendary King Ranch®️ trim, as well as the attention-grabbing Stealth Edition, Texas Edition and available FX4 Off-Road Package. It’s the one and only Ford Expedition and it’s Built Ford Proud.');
  new Car('Ford Edge Red', '2020', '50000', 'img/Ford Edge Red 2020.jpg', 'The Ford Edge was a mid-size crossover that offered seating for five. Easy to drive and easy to manoeuvre around town and also available with powerful engine, it was a great fit for families. An extensive list of the latest technologies was available depending on the trim level. The trim levels available with the 2018 Edge were the SE, the SEL, Titanium and Sport.');
  new Car('Ford Fusion White', '2019', '50000', 'img/Ford Fusion White 2019.jpg', 'he 2019 Ford Fusion finishes in the middle of our midsize car rankings. The Fusion has a comfortable interior and is more athletic than several class rivals, but it’s held back by an uninspiring base engine and a safety score that is lower than many of its competitors.                          updated exterior styling, dropped Platinum trim, Co-Pilot 360 suite of driver assistance features became standard, upgraded engine availability                  The Fusion has four engine options to choose from. The 175-horsepower base engine feels underpowered, so you\'ll likely be more satisfied with one of the three EcoBoost turbocharged options.');
  new Car('Audi A3 Blue', '2020', '30000', 'img/Audi A3 2020 Blue.jpg', 'Audi A3 Mirrors You With Its Dynamic Design And Increased Power. Add To It The Innovative Technology & You’ve Got Yourself A Premium Car Befitting You. Customised paint finishes. MMI Touch Display. Bang & Olufsen Speakers. German Engineering.It offers you a choice of petrol, diesel, mild-hybrid and plug-in hybrid versions, plus various diffebuy suspension setups and trims');
  new Car('Audi R8 Spyder Green', '2020', '20000', 'img/Audi R8 Spyder Green 2020.jpg', 'Strap yourself in for the breathtaking performance of the Audi R8 V10 Spyder. Its driver-focused interior and heightened aural experience truly come to life when the top is down for an even sportier driving experience. A Driver-Focused Top Down Sporty Driving Experience With Heartstopping Quattro Power. Strap Yourself In For The Breathtaking Performance Of The Audi R8 V10 Spyder. Audi Quattro AWD. 330 km/h Top Speed. V10 naturally Aspirated. Up to 620 horespower.');
  new Car('Audi Q7 Black', '2018', '30000', 'img/Audi Q7 Black 2018.jpg', 'The Audi Q7 masters a host of challenges while providing a dynamic driving experience. The series-standard quattro all-wheel drive ensures sporty handling. You can actively influence the vehicle\'s characteristics via the series-standard Audi drive select driving dynamics system, including the optional sport air suspension. The optional roll stabilization system reduces the lateral inclination and the optional all-wheel steering facilitates maneuvering and sporty driving. The Audi Q7 offers a powerful engine equipped with series-standard mild hybrid technology.                               The Audi Q7 masters a host of challenges while providing a dynamic driving experience. The series-standard quattro all-wheel drive ensures sporty handling. You can actively influence the vehicle\'s characteristics via the series-standard Audi drive select driving dynamics system, including the optional sport air suspension. The optional roll stabilization system reduces the lateral inclination and the optional all-wheel steering facilitates maneuvering and sporty driving. The Audi Q7 offers a powerful engine equipped with series-standard mild hybrid technology.');
  new Car('Toyota Prius Red', '2018', '30500', 'img/Toyota Prius Red 2018.jpg', 'There were no major design changes from the second to the third-generation Prius. However, the fourth-generation Prius, while inheriting the  design, now featured a more aggressive appearance with a lower center of gravity.The new model combined an outstanding fuel efficiency rating of 40.8 km/L in Japanese JC08 test cycle with superb performance in a dynamic redesign.');
  new Car('Toyota Avalon Hybrid Black', '2019', '50000', 'img/Toyota Avalon Hybrid Black 2019.jpg', 'The Toyota Avalon Hybrid marks its ninth year for 2021. The fifth-generation Avalon, but second with a hybrid variant, was introduced for 2019 and built around the advanced Toyota New Global Architecture (TNGA). The high-strength TNGA is the ideal foundation for an exceptionally athletic luxury-sport sedan and the four-cylinder Dynamic Force Engine is married to an all-new Toyota Hybrid System II powertrain that’s been engineered to inspire both spirited driving and fuel consciousness. All Avalon Hybrids now come standard with Android Auto compatibility, and some get new available exterior and interior colors.');
  new Car('Toyota Mirai Navy Blue', '2021', '14000', 'img/Toyota Mirai Navy Blue 2021.jpg', 'Toyota’s vision for a future sustainable hydrogen society recognises the value of hydrogen as a viable and plentiful resource for carrying and storing energy. It has the potential to deliver zero carbon mobility, not just in road vehicles but equally in trains, ships and planes, and to generate power for industry, businesses and homes. It’s also an efficient means of storing renewable energy and can be transported to where it’s needed.');
  new Car('Toyota Camry Red', '2018', '19000', 'img/Toyota Camry Red 2018.webp', 'The curbuy generation of the Toyota Camry offers two distinct trim levels, with a sporty SE and XSE trim aimed at wringing out more fun from the sedan, plus a hybrid variant and the standard L, LE and XLE trims.The standard engine for all levels is a 2.5-liter, four-cylinder with 203 horsepower that gets 34 mpg combined. For the upgraded engine, the higher trim levels come with the option of a 3.5-liter V6 with 301 horsepower, which is rated at 26 mpg combined. Instead of the previous model\'s six-speed automatic transmission, all trim levels on the gas engines are now equipped with an eight-speed automatic transmission. There\'s also the Camry Hybrid, available in LE, SE and XLE trims. It\'s powered by an electric motor paired with a four-cylinder engine for 208 total horsepower. It\'s paired with a CVT automatic transmission.  ');
  new Car('Xc90 Volvo Grey', '2021', '50100', 'img/Xc90 Volvo Grey 2021.jpg', 'A three-row SUV with a spacious interior and style to spare, the 2021 Volvo XC90 is well suited for luxurious family duty. It\'s Volvo\'s biggest vehicle and it gives you seven-passenger seating plus more available cargo space than its smaller XC60 sibling.  Every XC90 comes with a turbocharged four-cylinder engine. This might seem odd given that six-cylinder engines are the norm for this class, but Volvo has applied enough techno-wizardry to make it work. There are actually three engine versions, which Volvo calls the T5, T6 and Recharge (formerly called the T8). The Recharge is a plug-in hybrid with an impressive 400 horsepower plus 18 miles of electric range. Volvo made noticeable improvements to the suspension and brakes last year that significantly elevated the hybrid\'s standing in our eyes.');


  new Car('Bmw M34Oi XDrive Touring Black', '2019', '59901', 'img/Bmw M34Oi XDrive Touring Black 2019 3.jpg', 'The BMW M340i xDrive Touring represent a highly concentrated distillation of the sporting essence that enshrines the 3 Series as the definitive BMW and has set it apart from the competition for over 40 years. The original BMW 3 Series made its mark at launch in 1975 with its strikingly agile handling qualities. And the Touring model – which took to the stage for the first time with the arrival of the second-generation “3” – combined its trailblazing versatility with signature BMW dynamics. Powerful engines (most notably of the six-cylinder in-line variety), consistently upgraded chassis technology and the all-wheel-drive system first introduced on the 3 Series have been serving up a matchless driving experience ever since.');
  new Car('Bmw i3 red', '2020', '59001', 'img/Bmw i3 2018 1.jpg', 'The BMW i3 does not follow any trend; it\'s an expression of a self-conscious lifestyle. Designed in a progressive form language that communicates clarity and an interior lounge character. Equipped with an effortlessness that thrills you through sustainable materials and functional details. A vehicle that will set trends with its individuality.');
  new Car('Bmw M55Oi XDrive Navy Blue', '2018', '66801', 'img/Bmw M55Oi XDrive 2018  2.jpg', 'The M550i emits a muffled, yet pleasantly snarly growl from its 4.4-liter V-8 with any firm press of the go pedal, which is punctuated by a series of soft whomps as the eight-speed automatic rapidly swaps cogs. All 456 twin-turbocharged horses are available at 5,500 rpm, with peak torque of 480 lb-ft reached much earlier, at a mere 1,800 rpm.                  Despite the chassis trickery built-in to hide the M550i\'s weight and size, and the hobbling 18-inch Michelin winter tires instead of the stock 20-inchers, this big sedan changed direction pretty well. A little understeer may be felt on turn-in to mountain hairpins, but grip levels remain high and traction from mid-corner is exceptional. Despite carrying itself more like a traditional rear-drive BMW, the M550i felt composed and not heavily reliant on electronics. In fact, stability-control intervention was noticeable mostly by its absence.');
  new Car('Bmw X5 White', '2021', '52101', 'img/Bmw X5 2021  4.jpg', 'BMW X5 Sports Activity Vehicle (SAV) Has Been Redesigned And Rebuilt From The Wheels Up. The BMW X5 Design Makes A Powerful Statement With The Enlarged One-Piece Kidney Grille, Fast Lane Service. Warranty. Quality Services. BMW EfficientDynamics.     With standard Dynamic Damper Control and multiple suspension types, from Adaptive M Suspension to 2-axle air suspension, your BMW X5 is ready for the toughest challenges.');
  new Car('RangeRover Defender GondwanaStone ', ' 2019', '100000', 'img/RangeRover Defender GondwanaStone 2019 5.jpg', 'The original Evoque was a development of the Land Rover LRX concept vehicle, which was unveiled at the North American International Auto Show in January 2008. The first generation Evoque was produced from July 2011 until 2018 in three- and five-door versions, with both two-wheel and four-wheel drive.                           The original luxury city SUV has now evolved to reinforce its position as a design tour de force, whilst setting new standards in refinement, sustainability and capability.  The original luxury compact Range Rover sets new standards of refinement, capability and sustainability');
  new Car('RangeRover Evoque White ', ' 2019', '51490', 'img/RangeRover Evoque White 2019 1.jpg', 'The original Evoque was a development of the Land Rover LRX concept vehicle, which was unveiled at the North American International Auto Show in January 2008. The first generation Evoque was produced from July 2011 until 2018 in three- and five-door versions, with both two-wheel and four-wheel drive.                           The original luxury city SUV has now evolved to reinforce its position as a design tour de force, whilst setting new standards in refinement, sustainability and capability.The original luxury compact Range Rover sets new standards of refinement, capability and sustainability');
  new Car('RangeRover Sport Red ', ' 2020', '16901', 'img/RangeRover Sport Red 2015 4.jpg', 'A range of potent powertrains deliver breathtaking on-road performance. The 5.0 litre V8 Supercharged Petrol The Land Rover Range Rover Sport, generally known simply as the Range Rover Sport, is a mid-size luxury SUV produced under their Land Rover marque, from the British manufacturer Land Rover, and later Jaguar Land Rover. The first generation (codename: L320) started production in 2005, and was replaced by the second generation Sport (codename: L494) in 2013. Engine offers an improved output of 525PS and the combination of an advanced Ingenium petrol engine and electric motor delivers the remarkable performance of Range Rover Sport PHEV.                                          With sportier design cues and a powerful, muscular stance, Range Rover Sport is designed for impact. Cleaner, more dynamic, there’s a contemporary feel everywhere you look—from the Range Rover Sport grille, redesigned bonnet vents to the refined, yet sporty wheel options.');
  new Car('MG Cyberster Red', '2021', '58295', 'img/MG Cyberster Red 2021.jpg', 'The Cyberster - developed by the team at the MG Advanced Design Centre in London – is a two-door, two-seater sports car, drawing a number of styling cues from the classic MGB Roadster while also ushering in new high-tech features, including an interactive gaming cockpit and 5G connectivity. The Cyberster’s intelligent all-electric architecture will enable an approximate EV range of 800km (500 miles) and deliver a 0-100km/h time (0-62mph) of less than three seconds, while the body is designed to enhance aerodynamic performance. The classically shaped MG grille also serves as an air duct to ensure airflow over the car’s chassis.');
  new Car('Toyota Supra Yellow', '2020', '17590', 'img/Toyota Supra Yellow 2020.webp', 'The Toyota Supra (Japanese: トヨタ・スープラ, Toyota Sūpura) is a sports car and grand tourer manufactured by Toyota Motor Corporation beginning in 1978. The initial four generations of the Supra were produced from 1978 to 2002. ... The fifth generation has been produced since March 2019 and went on sale in May 2019.');
  new Car('Chevy Corvette Green', '2019', '35085', 'img/Chevy Corvette Green 2019.jpg', 'The Chevrolet Corvette is the eighth generation of the Corvette sports car manufactured by American automobile manufacturer Chevrolet. Following several experimental CERV prototype vehicles, it is the first mid-engine Corvette since the model\'s introduction in 1953 (as well as GM\'s first production mid-engine sports car since the Pontiac Fiero was discontinued in 1988), differing from the traditional front-engine design. It was announced in April 2019, and the coupe made its official debut on July 18, 2019 during a media event at the Kennedy Space Center (referencing its association with NASA) to coincide with the 50th anniversary of the Apollo 11 mission. The convertible made its debut in October 2019 alongside the racing version, the  Production officially began on February 3, 2020, delayed by the 2019 General Motors strike.');
  new Car('Mercedes-AMG GT Orange', '2021', '325000', 'img/Mercedes-AMG GT Orange 2021.jpg', 'The Mercedes-AMG GT model lineup is pretty straightforward, with the entry-level versions available in either Coupe or open-top Roadster forms. You can also upgrade to the Night Edition variants which offer plenty of moody black trim and various cosmetic tweaks.                                        All the AMG GT models share versions of the same 4.0-litre twin-turbo V8 that now appears elsewhere in the AMG line-up. The motor is mounted ahead of the driver, but set well-back, in what Mercedes describes as a front-mid engine configuration. Drive is directed to the rear wheels through a paddle-shifted seven-speed dual-clutch automated gearbox, and there’s no manually shifted option.');



}
carInstances();


function userClick(event) {
  event.preventDefault();


  getVotes();

  let i = event.target.id;
  // if (event.target.id === i) {

  console.log('i', i);
  cars[i].sold++;

  soldArr[i] = cars[i].sold;
  console.log('yesss', soldArr);

  updatesold();
  updateVotes();

  // for (let i = 0; i < cars.length; i++) {

  // console.log("hi,",soldArr);
  divShow = document.getElementById('showall');
  divShow.textContent = ' ';


  divShow = document.getElementById('showall');
  // divShow.addEventListener('click', userClick);

  ulImg = document.createElement('ul');

  divShow.appendChild(ulImg);

  liImg = document.createElement('li');
  liInfo = document.createElement('li');

  ulImg.appendChild(liImg);
  ulImg.appendChild(liInfo);
  // updateVotes();
  imgages = document.createElement('img');
  liImg.appendChild(imgages);

  liInfo.textContent = ` ${cars[i].model} ${cars[i].year} {${cars[i].price}$} `;
  buy.push(cars[i]);
  imgages.src = cars[i].src;
  imgages.className = 'styleimg';
  let divtext = document.createElement('div');
  divShow.appendChild(divtext);
  let describtion = document.createElement('p');
  divtext.appendChild(describtion);

  // eslint-disable-next-line no-inner-declarations
  // function viewMore(){

  //   let divshow=document.getElementById('showall');





  //   let imgages2=document.createElement('img');
  //   divshow.appendChild(imgages2);
  //   let imgages3=document.createElement('img');
  //   divshow.appendChild(imgages3);


  //   imgages2.setAttribute('width',300);
  //   imgages3.setAttribute('width',300);

  //   imgages2.src=cars[i].src2;
  //   imgages3.src=cars[i].src3;

  //   imgages.className='styleimg';



  // }




  describtion.textContent = ` ${cars[i].text}`;

  imgages.setAttribute('width', 300);
  imgages.id = 'car' + i;
  let divbtn = document.getElementById('showall');
  let buyBtn = document.createElement('button');
  divbtn.appendChild(buyBtn);
  buyBtn.textContent = 'buy';
  buyBtn.type = 'button';
  // console.log(buyBtn);
  buyBtn.id = 'buy';


  // let ViewBtn=document.createElement('button');
  // divbtn.appendChild(ViewBtn);
  // ViewBtn.textContent = 'View More photos';
  // ViewBtn.type = 'button';
  // // console.log(ViewBtn);
  // ViewBtn.id='view';

  // ViewBtn.addEventListener('click', viewMore);
  // ViewBtn.removeEventListener('click',buttons);

  buyBtn.addEventListener('click', updateStorage);


  buyBtn.removeEventListener('click', buttons);
  // divShow.innerHTML="<p>hiiiiiiiiii</p>"

  console.log(cars[i]);
  console.log(buy);


  // }



}
console.log('want', soldArr);



function render() {
  getInfo();
  for (let i = 0; i < cars.length; i++) {
    // if the type buyal cars[i].type==buy

    divShow = document.getElementById('showall');
    divShow.addEventListener('click', userClick);

    ulImg = document.createElement('ul');

    divShow.appendChild(ulImg);

    liImg = document.createElement('li');
    liInfo = document.createElement('li');

    ulImg.appendChild(liImg);
    ulImg.appendChild(liInfo);

    imgages = document.createElement('img');
    liImg.appendChild(imgages);
    liInfo.textContent = ` ${cars[i].model} ${cars[i].year} {${cars[i].price}$} `;



    imgages.src = cars[i].src;
    imgages.className = 'styleimg';

    imgages.setAttribute('width', 300);
    imgages.id = i;


  


  

  }
}
render();


let form = document.getElementById('form');
form.addEventListener('submit', search);

let showbuy = document.getElementById('showbuy');
showbuy.addEventListener('click', buttons);



function search(event) {



  event.preventDefault();
  //   let cars=[];
  filtermodels = [];
  filteryears = [];

  let model;
  let year;
  let price;

  for (let i = 0; i < cars.length; i++) {



    if (models[i].includes(event.target.model.value) && modelyear[i].includes(parseInt(event.target.year.value))) {
      model = event.target.model.value;
      year = parseInt(event.target.year.value);
      price = cars[i].price;



      for (let y = 0; y < buy.length; y++) {
        if (typeof buy[y].model === 'undefined') {
          console.log(buy);
          buy.splice(y, 1);

        }


      }
    }
  }

  new InputCar(model, year, price);




  console.log('death', {});




  console.log('test0', filtermodels);
  console.log('test', models);
  console.log('test1', modelyear);
  console.log('test2', filteryears);


  divShow = document.getElementById('showall');
  divShow.textContent = ' ';

  let ulElemnt = document.createElement('ul');
  divShow.appendChild(ulElemnt);
  // ulElemnt.textContent='';



  let flag = true;
  for (let i = 0; i < cars.length; i++) {

    if (models[i].includes(model) && modelyear[i].includes(year)) {

      // console.log('hi');
      // document.getElementById('view').disabled = false;
      document.getElementById('buy').disabled = false;
      // console.log(cars[i].model);

      let liElement = document.createElement('li');
      ulElemnt.appendChild(liElement);
      let imgElemnt = document.createElement('img');
      ulElemnt.appendChild(imgElemnt);
      imgElemnt.setAttribute('src', cars[i].src);
      imgElemnt.setAttribute('width', '500');
      liElement.textContent = ` ${cars[i].model} ${cars[i].year} {${cars[i].price}$} PerDay`;
      // console.log('img',imgElemnt);
      // console.log('test3',cars[i]);
      divShow = document.getElementById('showall');
      let divtext = document.createElement('div');
      divShow.appendChild(divtext);
      let describtion = document.createElement('p');
      divtext.appendChild(describtion);


      describtion.textContent = ` ${cars[i].text}`;
      flag = false;

    }



  }
  console.log(flag);
  if (flag) {
    // document.getElementById('view').disabled = true;
    document.getElementById('buy').disabled = true;

    let liElement = document.createElement('li');
    ulElemnt.appendChild(liElement);
    let imgElemnt = document.createElement('img');
    ulElemnt.appendChild(imgElemnt);
    imgElemnt.setAttribute('src', 'img/opsss.png');
    imgElemnt.setAttribute('width', '500');

    console.log(imgElemnt);
  }
}


function buttons() {


  let divbtn = document.getElementById('cars');
  let buyBtn = document.createElement('button');
  divbtn.appendChild(buyBtn);
  buyBtn.textContent = 'buy';
  buyBtn.type = 'button';
  // console.log(buyBtn);
  buyBtn.id = 'buy';



  // let ViewBtn=document.createElement('button');
  // divbtn.appendChild(ViewBtn);
  // ViewBtn.textContent = 'View';
  // ViewBtn.type = 'button';
  // // console.log(ViewBtn);
  // ViewBtn.id='view';
  buyBtn.addEventListener('click', updateStorage);
  showbuy.removeEventListener('click', buttons);



}


let reset = document.getElementById('reset');
reset.addEventListener('click', resetAll);

function resetAll() {


  location.reload();

  // let divshow=document.getElementById('showall');
  // divshow.textContent='';
  // // let ulElemnt=document.getElementById('nms');
  // // ulElemnt.textContent='';
  // // document.getElementById('view').disabled = true;
  // // document.getElementById('buy').disabled = true;
  // let removechart=document.getElementById('removechart');
  // removechart.textContent="";


  // render();

}

let clearcart = document.getElementById('clearCart');
clearcart.addEventListener('click', clearCart);
// clearcart.removeEventListener('click', clearCart);
function clearCart() {

  localStorage.clear();
  location.reload();


}


console.log('models', models);
console.log('soldArr', soldArr);

function showChart() {

  const data = {
    labels: models,
    datasets: [{
      label: 'Most Seen Cars This Day',
      data: soldArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(201, 203, 207, 0.7)',

      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',

      ],
      borderWidth: 4
    },


    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  let myChart = new Chart(
    document.getElementById('chart'),
    config
  );

}


let viewchart = document.getElementById('Chart');
viewchart.addEventListener('click', viewChart);

function viewChart() {
  showChart();


  viewchart.removeEventListener('click', viewChart);

}


function getInfo(){

  let x=localStorage.getItem('buyInput');


  let parsedArr = JSON.parse(x);
  if (parsedArr !== null) {
    // cars = parsedArr;

   
    for (let i = 0; i < parsedArr.length; i++) {
      // cars.push(  (parsedArr[i]));
      new Car(parsedArr[i].model,parsedArr[i].year,parsedArr[i].price,parsedArr[i].src,parsedArr[i].text);

     
    }


   
    // new Car(parsedArr);
    console.log('yousef',parsedArr);
    console.log('issa',cars);

  }}



