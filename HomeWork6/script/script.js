//********************* index 3 */

const resultButton = document.querySelector('.resultButton');
const input = document.querySelector('.input');
const form = document.querySelector('form');

const opponent = document.querySelector('.opponent');

function start(){

    let compMove = Math.floor(Math.random() * 3);
    opponent.value = compMove;

    let userMove = parseInt(input.value);   

    const newDiv = document.createElement('div');
    newDiv.classList.add('newDivScript');
    
    const newP = document.createElement('h2');
    newP.classList.add('newP');


    if(isNaN(userMove) || userMove > 2 || userMove < 0){
         newP.innerText = 'Введите число от 0 - 2';
              
     }
    else if(compMove === 0 && userMove === 1){
        newP.innerText = 'Вы выиграли с помощью бумаги!';
    }
    else if(compMove === 0 && userMove === 2){
        newP.innerText = 'Противник выиграл вас с помощью камня!';
    }
    else if(compMove === 1 && userMove === 0){
        newP.innerText = 'Противник выиграл с помощью бумаги!';
    }
    else if(compMove === 1 && userMove === 2){
        newP.innerText = 'Вы выиграли с помощью ножниц!';
    }
    else if(compMove === 2 && userMove === 0){
        newP.innerText = 'Вы выиграли с помощью камня!';
    }
    else if(compMove === 2 && userMove === 1){
        newP.innerText = 'Противник выиграл с помощью ножниц!';
    }
    else{
        newP.innerText = 'У вас ничья!';
    }

    
    newDiv.append(newP);
    document.body.append(newDiv);
}


resultButton.onclick = () => start();

