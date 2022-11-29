//1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, 
//чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

const newParagraph = document.createElement('p');
const newButton = document.createElement('button');

newParagraph.innerText = 'Remove me!';
newButton.innerText = 'Remove me';

newParagraph.style.margin = '40px';
newParagraph.style.fontStyle = 'italic';
newParagraph.style.fontSize = '60px';
newParagraph.style.color = 'blue';
newButton.style.margin = '40px';
newButton.style.color = 'blue';
newButton.style.fontWeight = '600';
newButton.style.border = '2px solid #48dbfb'
newButton.style.width = '150px';
newButton.style.height = '30px';
newButton.style.borderRadius = '40px';
newButton.style.fontSize = '15px';

newButton.onclick = () => {
    if(newButton.textContent === 'Remove me'){
        newButton.innerText = 'Add me';
    }
    else{
        newButton.innerText = 'Remove me';
    }


    if(newParagraph.textContent === 'Remove me!'){
        newParagraph.innerText = '';
    }
    else{
        newParagraph.innerText = 'Remove me!';
    }
}
document.body.append(newParagraph, newButton);


//******************************************  2  **************************************************** */

// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. 
// При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.


const array_color = ['blue', 'red', 'green', 'orange', 'pink', 'silver'];

const list = document.createElement('ol');
for(let i = 0; i < array_color.length; i++){
    const li = document.createElement('li');
    li.innerText = array_color[i];
    list.append(li);
    document.body.append(list);

    li.onmouseover = () => {
    document.body.style.backgroundColor = array_color[i];
    }

    li.onmouseout = () => {
        document.body.style.backgroundColor = 'white';
        }
    }



//********************************************  3  **************************************************

//3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. 
//При клике на заголовок внизу появляется краткое описание данного фильма.

const arrayFilms = ['<< Alone at home! >>', '<< 365 days! >>', '<< Fast and furious! >>', '<< 50 shades of grey! >>', '<< Suits! >>'];

const obj = [
    {
    discription: 'The McCallister family is preparing to spend Christmas in Paris, gathering at Peter and Kates home in a Chicago suburb on the night before their departure. Peter and Kates youngest son, Kevin, is the subject of ridicule by his older siblings and cousins. Kevin inadvertently ruins the family dinner after a brief scuffle against his oldest brother Buzz, resulting in Kate sending him up to the attic. Kevin berates his mother for allowing the rest of the family to pick on him and wishes that his family would disappear. During the night, heavy winds create a power outage, disabling the alarm clocks and causing the family to oversleep. In the confusion and rush to get to the airport, Kevin is accidentally left behind'
    },

    {
    discription: 'At his villa, Massimo reveals to Laura that she was the woman at the beach five years ago and that when he was injured, all he could think about was her. After searching for years and finally spotting her, he kidnapped her, intending to keep her as a prisoner for 365 days in the hopes that she will fall in love with him. He also promises her that he will not touch her intimately without her consent while he is physically and sexually aggressive towards her'
    },

    {
     discription: 'Im Jahr 1989 arbeiten Dom und sein Bruder Jakob für ihren Vater Jack Toretto, der professionelle Autorennen fährt. Als Jacks Wagen eines Tages auf der Rennstrecke nach einem Unfall explodiert, machen die Söhne zunächst Jacks Konkurrenten Kenny Linder für die Tragödie verantwortlich. Dom erinnert sich jedoch daran, dass Jakob kurz vor dem Unglück am Wagen schraubte und gibt ihm die Schuld für das Geschehene. Jakob beteuert, dass alles mit seinem Vater abgesprochen war, doch Dom fordert ihn zu einem Straßenrennen auf, bei dem Jakob verliert und folglich für immer verschwinden muss. Jakob wird daraufhin von Jacks ehemaligem Techniker Buddy aufgenommen und entwickelt sich in den folgenden Jahrzehnten zu einem der weltbesten Meisterdiebe, Auftragsmörder und Hochleistungsfahrer – alles ohne die Aufmerksamkeit von Dom auf sich zu ziehen.'
    },

    {
    discription: '21-year-old Anastasia "Ana" Steele is an English literature major at Washington State Universitys satellite campus near Vancouver, Washington. When her roommate, Kate Kavanagh, becomes ill and is unable to interview Christian Grey, a 27-year-old billionaire entrepreneur, for the college newspaper, Ana agrees to take her place. At Christians Seattle headquarters she stumbles her way through the meeting. Christian, who is that years WSU commencement speaker, takes an interest in her; soon after, he visits the hardware store where Ana works, and offers to do a photo shoot to accompany the article she had interviewed him for.'
    },
    
    {
    discription: 'Michael „Mike“ Ross bezahlt für die Altenpflege seiner Großmutter. Als ihr Zustand sich verschlechtert, muss er 25.000 $ auftreiben, um ihr die bestmögliche Behandlung zukommen zu lassen. Deshalb will er über seinen Freund Trevor einmalig als Drogenhändler tätig werden. An dem Abgabeort im Hotel erkennt er, dass er in eine Falle tappt. Er flüchtet und platzt in ein Vorstellungsgespräch für eine Anwaltskanzlei. Harvey Specter, einer der angesehensten und verruchtesten Topanwälte von New York, erkennt Mikes Talent und ist beeindruckt von seinem photographischen Gedächtnis. Er stellt ihn als Anwalt ein, obwohl er keine Ausbildung hat. Im Laufe der Serie, in der sie beide und ihre Kollegen immer neue Fälle lösen, oft auch auf zwielichtige Weise, wird Mikes illegale Berufsausübung als Anwalt immer wieder zum Problem. Und auch die Verschleierungsversuche kommen immer wieder ans Licht.'
}
]

for(let i = 0; i < arrayFilms.length; i++){
    const newDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.classList.add('h2');
    h2.innerText = arrayFilms[i];

    newDiv.append(h2);
    document.body.append(newDiv);

    h2.onclick = () => {
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('p');
        newParagraph.innerText = obj[i].discription;
        newDiv.append(newParagraph);

        h2.onclick = () => {
            if(newParagraph.textContent === obj[i].discription)
            { 
            newParagraph.textContent = '';
        }
        else{
            newParagraph.innerText = obj[i].discription;
        }
        }
    }
}



//******************************************* 4 ** 5 ***************************************************
// //4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).
//5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.

const arrayButton = ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ü'];
const arrayButton2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä'];
const arrayButton3 = ['y', 'x', 'c', 'v', 'b', 'n', 'm'];

const section = document.createElement('section');
section.classList.add('section');

const new_div1 = document.createElement('div');
new_div1.classList.add('new_div1');

for(let i = 0; i < arrayButton.length; i++){
    const newButton1 = document.createElement('button');
    newButton1.classList.add('newButton1');
    newButton1.innerText = arrayButton[i];
    new_div1.append(newButton1);

    addEventListener('keydown', (event) => {
       if(event.key === arrayButton[i]){
        newButton1.style.color = '#2e86de';
       }
       else{
        newButton1.style.color = 'white';
       }
    })
}

const new_div2 = document.createElement('div');
new_div2.classList.add('new_div2');

for(let i = 0; i < arrayButton2.length; i++){
    const newButton2 = document.createElement('button');
    newButton2.classList.add('newButton2');
    newButton2.innerText = arrayButton2[i];
    new_div2.append(newButton2);

    addEventListener('keydown', (event) => {
        if(event.key === arrayButton2[i]){
         newButton2.style.color = '#2e86de';
        }
        else{
         newButton2.style.color = 'white';
        }
     })
}

const new_div3 = document.createElement('div');
new_div3.classList.add('new_div3');

for(let i = 0; i < arrayButton3.length; i++){
    const newButton3 = document.createElement('button');
    newButton3.classList.add('newButton3');
    newButton3.innerText = arrayButton3[i];
    new_div3.append(newButton3);

    addEventListener('keydown', (event) => {
        if(event.key === arrayButton3[i]){
         newButton3.style.color = '#2e86de';
        }
        else{
         newButton3.style.color = 'white';
        }
     })
}
section.append(new_div1, new_div2, new_div3);
    document.body.append(section);


  


