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

 CREARE 1 DIV
 aggiungere classe row
 CREARE 1 DIV 
 aggiungere classe col-4 cover-opaca
 CREARE 6 DIV


 ciclo for 6 i < stampaLista.value
 aggiungere id="contenitoreInfo" class="text-center"


 CREARE 1 DIV
 aggiungere id="nome"
 CREARE 1 DIV
 aggiungere id="lavoro"

 APPENDERE
 const divRow = myContainer.append(divRow);
 divRow.append(divCol4)
 divCol4.appendChild(contenitoreInfo)
 contenitoreInfo.append(img)
 contenitoreInfo.append(divNome)
 contenitoreInfo.append(divLavoro)



*/

//PRENDO ELEMENTI DA HTML

const myContainer = document.getElementById('my-container');

// FUNZIONI

//funzione con ciclo for of con all'interno for in per stampare teamInfo in console
function stampaLista(nomeLista){
    for (let value of nomeLista){
        for (let key in value){
            console.log(key + ' : ' + value[key]);
        }
    }
}

//funzione per creare elementi in html

function creaElementi(){
    const divRow = document.createElement('div');
    divRow.className = 'row';
    //console.log(divRow);

    const divCol4 = document.createElement('div');
    divCol4.className = 'col-4 cover-opaca';
    //console.log(divCol4);

    myContainer.append(divRow);
    divRow.append(divCol4);


    //ciclo for of per creare div in base ai valori dell'array oggetto
   for (let value of teamInfo){
        const img = document.createElement('img');
        img.className = 'img';
        const divContenitoreInfo = document.createElement('div');
        divContenitoreInfo.className = 'contenitoreInfo text-center';
        const divNome = document.createElement('div');
        divNome.className = 'Nome';
        const divLavoro = document.createElement('div');
        divLavoro.className = 'lavoro';

        divCol4.append(img);
        divCol4.append(divContenitoreInfo);
        divCol4.append(divNome);
        divCol4.append(divLavoro);

        for(let i = 0; i < teamInfo.length; i++){
            for(let a = 0; a < teamInfo[i].image.length; a++){
                img.innerHTML = teamInfo[i].image[a];
            }    
            for(let a = 0; a < teamInfo[i].nome.length; a++){
                divNome.innerHTML = teamInfo[i].nome[a];
            } 
            for(let a = 0; a < teamInfo[i].role.length; a++){
                divLavoro.innerHTML = teamInfo[i].role[a];
            } 

           
        }
        console.log(img);
            console.log(divNome);
            console.log(divLavoro);
        
   } 
   console.log(myContainer);


   
}

// //funzione per pushare key dei valori dell'array oggetto in div creati con funzione creaElementi()
//     function inserisciValori(){
//      for (let value of teamInfo){
       
      
//    } 
// }

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

creaElementi();

// inserisciValori();