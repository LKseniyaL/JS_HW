

const images = [
    'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',
    'https://media.istockphoto.com/id/1349363968/photo/giraffe-riding-an-elephant-on-field-friendship-and-cooperation-concept.jpg?b=1&s=170667a&w=0&k=20&c=f5K4jUJ3fT55j7EV_wAcu3yjWHP3xPJ0gg9SPo9krEE=',
    'https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'
];
const indexImg = document.querySelector('.indexImg');

let imgSum = 0;
indexImg.onclick = (event) => { 
    event.target.src = images[++imgSum % images.length];
}