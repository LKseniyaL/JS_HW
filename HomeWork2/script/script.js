//Создайте массив с ссылками на картинки. На основе этого массива формируется множество
// маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок 
//забирается ссылка на эту картинку и в нижней
// части интерфейса отображается в большем размере.

const arr_picture = [
  'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://media.istockphoto.com/id/1349363968/photo/giraffe-riding-an-elephant-on-field-friendship-and-cooperation-concept.jpg?b=1&s=170667a&w=0&k=20&c=f5K4jUJ3fT55j7EV_wAcu3yjWHP3xPJ0gg9SPo9krEE=',
  'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',
  'https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'
 ];

 const div = document.createElement('div');
 const bootom_div_box = document.createElement('div');

 for(let i = 0; i < arr_picture.length; i++){
  const new_div = document.createElement('div');
  const new_img = document.createElement('img');

  new_img.classList.add('img');
  div.classList.add('div');
  new_img.setAttribute('src', arr_picture[i]);

  new_div.append(new_img);
  div.append(new_div);
  document.body.append(div);

  new_img.onclick = () => {
   const bootom_div1 = document.createElement('div');
   const img_bottom = document.createElement('img');
  
   img_bottom.setAttribute('src', arr_picture[i]);
   bootom_div_box.classList.add('bootom_div_box');
   img_bottom.classList.add('img_bottom');
    
    bootom_div1.append(img_bottom);
    bootom_div_box.append(bootom_div1);
    document.body.append(bootom_div_box);
  }
  }
 