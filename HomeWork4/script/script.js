
//preventDefault позволяет отменить все действия которые были заданы 
//для браузера будут отменены

const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const sectionProductions = document.querySelector('#products');
const newButton = document.querySelector('.newButton');
const firstInputButton = document.querySelector('.firstInputButton');
const firstInput = document.querySelector('.firstInput');

titleInput.setAttribute('required', 'true');
priceInput.setAttribute('required', 'true');



let products = [];

form.onsubmit = (e) => {
    e.preventDefault();

    products.push({

        title: titleInput.value,
        price: priceInput.value,

        });

        newProducts();


    titleInput.value = '';
    priceInput.value = '';
};

function createNode(title, price){
    const div = document.createElement('div');
    div.classList.add('products');
    const titleP = document.createElement('p');
    const priceP = document.createElement('p');

    titleP.innerText = title;
    priceP.innerText = price;

    div.append(titleP, priceP);

    div.ondblclick = () =>{
        alert(title);
    }
    sectionProductions.append(div);
}

function newProducts(){
    sectionProductions.innerHTML = '';
    for(let i = 0; i < products.length; i++){
        createNode(products[i].title, products[i].price);
    }
}

    newButton.onclick = () => { 
    let summe = 0;
    for(let i = 0; i < products.length; i++){
        summe += +products[i].price;
    }
    alert(summe);
    }

    let array_password = [];
    array_password.push({
        password: firstInput.value
    })

    firstInputButton.onclick = () => {
        for(let i = 0; i < array_password.length; i++){ 
            if(firstInput.value){ 
            firstInput.value = firstInput.textContent + '';
            }
            else{
                firstInput.value = array_password[i].password;
                // Роза, не понимаю как вернуть назад значения, напишите пожалуйста ответ в комментарии. Спасибо
            }
    }
}