'use strict';

/*
MILESTONE 0:
 x Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
 x Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto
BONUS 3:
Aggiungere attraverso un form un membro al team


                            HTML DA CREARE

<div class="row">
     <div class="col-4 cover-opaca"> 
         <img src="./img/angela-caroll-chief-editor.jpg" alt="">
             <div id="contenitoreInfo" class="text-center">
                 <div id="nome">Mattia</div>
             <div id="lavoro">Developer</div>
     </div>
 </div>







*/

// FUNZIONI

// creo ciclo for of con all'interno for in per stampare teamInfo in console
function stampaLista(nomeLista){
    for (let value of nomeLista){
        for (let key in value){
            console.log(key + ' : ' + value[key]);
        }
    }
}

// creo array con info del team

const teamInfo = [
    {
        'nome': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg',
    },
    {
        'nome': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg',
    },
    {
        'nome': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg',
    },
    {
        'nome': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg',
    },
    {
        'nome': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg',
    },
    {
        'nome': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg',
    }
]


// RICHIAMO FUNZIONI

stampaLista(teamInfo);
