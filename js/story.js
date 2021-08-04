"use strict"
let inputstoryyelement = document.getElementById('inputstory');
let prevreviewselement = document.getElementById('prevreviews');
let localstoragedata;
let renderpar1,renderpar2,renderpar3,renderpar4,renderpar5,renderpar6;
let renderimage;


function Review(name, sex, own, story, img, rate) {//construction fun for review objects
    this.name = name;
    this.sex = sex;
    this.own = own;
    this.story = story;
    this.img = img;
    this.rate = rate;

    Review.prototype.allreviews.push(this);
    updateStorage();
}
Review.prototype.allreviews = [];


Review.prototype.renderstories = function () {          //it creates the p m section element
    let rendersection=document.createElement('section');
    prevreviewselement.appendChild(rendersection);
    rendersection.className="rendersectionclass"

    renderpar1 = document.createElement('p');           
    rendersection.appendChild(renderpar1);
    renderpar2 = document.createElement('p');
    rendersection.appendChild(renderpar2);
    renderpar3 = document.createElement('p');
    rendersection.appendChild(renderpar3);
    renderpar4 = document.createElement('p');
    rendersection.appendChild(renderpar4);
    renderpar5 = document.createElement('p');
    rendersection.appendChild(renderpar5);
    // renderpar6 = document.createElement('p');
    // rendersection.appendChild(renderpar6);
    

    renderimage = document.createElement('img');
    rendersection.appendChild(renderimage);
    
    renderimage.className="imagesclass";
    renderpar1.className="renderparclass";
    renderpar2.className="renderparclass";
    renderpar3.className="renderparclass";
    renderpar4.className="renderparclass";
    renderpar5.className="renderparclass";
    // renderpar6.className="renderparclass";

    
    renderimage.src = this.img;

    renderpar1.textContent=` dfgioh ${this.name}`;
    renderpar2.textContent=this.own;
    renderpar3.textContent=this.sex;
    renderpar4.textContent=this.story;
    renderpar5.textContent=this.rate;


    // renderpar.textContent =
    //     `Name : ${this.name}  
    //     Sex : ${this.sex} Ownership: ${this.own} 
    //     My thoughts about this Car : ${this.story} 
    //     how would you rate your experience with this car :  ${this.rate} `;

    updateStorage();

}

inputstoryyelement.addEventListener('submit', submitter);



function updateStorage() {
    let stringArr = JSON.stringify(Review.prototype.allreviews);
    //  console.log(Review.prototype.allreviews);
    //  console.log(stringArr);
    localStorage.setItem('allreviewskey', stringArr);


    if (Review.prototype.allreviews.lemgth != null) {
        Review.prototype.allreviews = parsedArr
    }
    // renderpar;
}




function submitter(e) {
    e.preventDefault();

    let nameelement = e.target.nameinput.value;
    let sexelement = e.target.sexname.value;
    let ownelement = e.target.ownname.value;
    let storyelement = e.target.storyname.value;;
    let imgelement = e.target.imgname.value;
    let rateelement = e.target.ratename.value;



    let newreview = new Review(nameelement, sexelement, ownelement, storyelement, imgelement, rateelement);
    console.log(newreview);

    newreview.renderstories();


}
// let renderpar1;
let renderpar21,renderpar22,renderpar23,renderpar24,renderpar25,renderpar26;

let renderimage2;

function load() {
    localstoragedata = JSON.parse(localStorage.getItem('allreviewskey'));
    if (localstoragedata != null) {
        Review.prototype.allreviews = localstoragedata;
        
        let rendersection;
        for (let index = 0; index < Review.prototype.allreviews.length; index++) {
            // renderpar2main = document.createElement('p');
            rendersection=document.createElement('section');
            prevreviewselement.appendChild(rendersection);
            
            renderpar21 = document.createElement('p');           
            rendersection.appendChild(renderpar21);
            renderpar22 = document.createElement('p');
            rendersection.appendChild(renderpar22);
            renderpar23 = document.createElement('p');
            rendersection.appendChild(renderpar23);
            renderpar24 = document.createElement('p');
            rendersection.appendChild(renderpar24);
            renderpar25 = document.createElement('p');
            rendersection.appendChild(renderpar25);
            // renderpar26 = document.createElement('p');
            // rendersection.appendChild(renderpar26);

            renderimage2 = document.createElement('img');
            rendersection.appendChild(renderimage2);
            console.log(renderimage2);
            renderimage2.src=Review.prototype.allreviews[index].img;
            renderimage2.className="imagesclass";
            renderpar21.className="renderparclass";
            renderpar22.className="renderparclass";
            renderpar23.className="renderparclass";
            renderpar24.className="renderparclass";
            renderpar25.className="renderparclass";
            // renderpar26.className="renderparclass";
            // renderpar2.className="renderparclass";

            // rendersection.appendChild(renderpar2);


        
            renderpar21.textContent= Review.prototype.allreviews[index].name;
            renderpar22.textContent= Review.prototype.allreviews[index].own;
            renderpar23.textContent= Review.prototype.allreviews[index].sex;
            renderpar24.textContent= Review.prototype.allreviews[index].story;
            renderpar25.textContent= ` i would rate it as ${Review.prototype.allreviews[index].rate}/100`;

        //     renderpar2.textContent =
        //         `Name : ${Review.prototype.allreviews[index].name}  
        // Sex : ${Review.prototype.allreviews[index].sex} Ownership: ${Review.prototype.allreviews[index].own} 
        // My thoughts about this Car : ${Review.prototype.allreviews[index].story} 
        // how would you rate your experience with this car :  ${Review.prototype.allreviews[index].rate} `;

        }
    }
}
console.log(load());
load();

console.log(localstoragedata);