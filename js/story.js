"use strict"
let prevreviewselement=document.getElementById('prevreviews');

let nameelement=document.getElementById('nameid');
let sexelement=document.getElementById('sexid');
let ownelement=document.getElementById('ownid');
let storyelement=document.getElementById('storyid');
let imgelement=document.getElementById('imgid');
let rateelement=document.getElementById('rateid');


function Review(name,sex,own,story,img,rate) {
    this.name=name;
    this.sex=sex;
    this.own=own;
    this.story=story;
    this.img=img;
    this.rate=rate;

    this.prototype.allreviews.push(this);
    // updateStorage();
}
Review.prototype.allreviews=[];


function renderstories() {
    for (let index = 0; index < Review.prototype.allreviews.length; index++) {
        let renderpar=document.createElement('p');
        prevreviewselement.appendChild('renderpar');
        renderpar.textContent=`
        name: ${Review.prototype.allreviews[index].name}`
        
    }
}
renderstories();