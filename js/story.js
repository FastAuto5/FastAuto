"use strict"
let inputstoryyelement = document.getElementById('inputstory');
let prevreviewselement = document.getElementById('prevreviews');
let localstoragedata;
let renderpar;
let renderimage;


function Review(name, sex, own, story, img, rate) {
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


Review.prototype.renderstories = function () {

    renderpar = document.createElement('p');
    renderimage = document.createElement('img');
    prevreviewselement.appendChild(renderimage);
    prevreviewselement.appendChild(renderpar);
    renderimage.className="imagesclass";
    renderpar.className="renderparclass";
    
    renderimage.src = this.img;
    renderpar.textContent =
        `Name : ${this.name}  
        Sex : ${this.sex} Ownership: ${this.own} 
        My thoughts about this Car : ${this.story} 
        how would you rate your experience with this car :  ${this.rate} `;

    console.log(renderpar);
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
let renderpar2;
let renderimage2;
function load() {
    localstoragedata = JSON.parse(localStorage.getItem('allreviewskey'));
    if (localstoragedata != null) {
        Review.prototype.allreviews = localstoragedata;

        for (let index = 0; index < Review.prototype.allreviews.length; index++) {
            renderpar2 = document.createElement('p');
            
            renderimage2 = document.createElement('img');
            prevreviewselement.appendChild(renderimage2);
            
            renderimage2.className="imagesclass";
            renderpar2.className="renderparclass";

            prevreviewselement.appendChild(renderpar2);

            renderimage2.src=Review.prototype.allreviews[index].img;
            renderpar2.textContent =
                `Name : ${Review.prototype.allreviews[index].name}  
        Sex : ${Review.prototype.allreviews[index].sex} Ownership: ${Review.prototype.allreviews[index].own} 
        My thoughts about this Car : ${Review.prototype.allreviews[index].story} 
        how would you rate your experience with this car :  ${Review.prototype.allreviews[index].rate} `;

        }
    }
}
load();
console.log(localstoragedata);
