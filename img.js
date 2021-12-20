const imgList = [
    "img/0.jpg",
    "img/1.jpg",
];

const img = document.querySelector("#backgroundImg");
const getImgNumber = Math.floor(Math.random()*imgList.length);

document.body.style.backgroundImage = `url(${imgList[getImgNumber]})`;  
