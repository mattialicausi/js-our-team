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



 // CARD CANDIDATURA 
 
            <div class="col-3 cover-candidatura"> 
                <div class="card-opaca">
                     <img class = "imgInfo foto-utente" src="./img/user-img.png" alt="">
                        <div class="contenitoreInfo" class="text-center">
                            <div class="nome text-center"><input type="text" name="" placeholder = "Inserisci il tuo nome"id=""></div>
                            <div class="lavoro text-center"><input type="text" name=""placeholder = "Inserisci il tuo ruolo"id=""></div>
                            <div class="contenitore-icona">
                                <i class="fa-solid fa-plus"></i>
                                <span>Effettua la tua candidatura</span>
                            </div>
                        </div>
                </div>
            </div>

*/

//PRENDO ELEMENTI DA HTML

const myContainer = document.getElementById('my-container');

// FUNZIONI

//funzione con ciclo for of con all'interno for in per stampare teamInfo in console
function stampaLista(nomeLista){
    for (let value of nomeLista){
        for (let key in value){
            //console.log(key + ' : ' + value[key]);
        }
    }
}

//funzione per creare elementi in html

function creaElementi(){
    const divRow = document.createElement('div');
    divRow.className = 'row';
    //console.log(divRow);


    //ciclo for of per creare div in base ai valori dell'array oggetto
   for (let value of teamInfo){
         const divCol4 = document.createElement('div');
         divCol4.className = 'col-3 cover-opaca';

        const img = document.createElement('img');
        img.className = 'imgInfo';

        const divContenitoreInfo = document.createElement('div');
        divContenitoreInfo.className = 'contenitoreInfo text-center';

        const divNome = document.createElement('div');
        divNome.className = 'Nome text-center';

        const divLavoro = document.createElement('div');
        divLavoro.className = 'lavoro text-center';

        myContainer.append(divRow);
        divRow.append(divCol4);
        divCol4.append(img);
        divCol4.append(divContenitoreInfo);
        divCol4.append(divNome);
        divCol4.append(divLavoro);

        img.src = `./img/${value.image}`;
        //console.log(value.image);
        
        divNome.innerHTML += value.nome;
        //console.log(value.nome);
        
        divLavoro.innerHTML += value.role;
        //console.log(value.role);

   } 
   console.log(myContainer);

   candidati()


//funzione per creare candidatura utente

function candidati(){
    const divUtente = document.createElement('div');
    divUtente.className = 'col-3 cover-candidatura';

    const divEffettoCard = document.createElement('div');
   divEffettoCard.className = 'card-opaca';

   const imgUtente = document.createElement('img');
   imgUtente.className = 'imgInfo foto-utente';

   imgUtente.src = `./img/user-img.png`;

   const divContenitoreInfo = document.createElement('div');
   divContenitoreInfo.className = ' contenitoreInfo text-center';

   const divNomeUtente = document.createElement('div');
   divNomeUtente.className = 'nome text-center';

   const divLavoroUtente = document.createElement('div');
   divLavoroUtente.className = 'lavoro text-center';

   const inputNome = document.createElement('input');
    inputNome.setAttribute("type", "text");
   

    const inputLavoro = document.createElement('input');
    inputLavoro.setAttribute("type", "text");

    const divContenitoreicona = document.createElement('div');
   divContenitoreicona.className = 'contenitore-icona';
   divContenitoreicona.innerHTML = ' <i class="fa-solid fa-plus"></i>';
   divContenitoreicona.innerHTML = 'Effettua la tua candidatura';

    
   divRow.append(divUtente);
   divUtente.append(divEffettoCard);
   divEffettoCard.append(imgUtente);
   divEffettoCard.append(divContenitoreInfo);
   divContenitoreInfo.append(divNomeUtente);
   divNomeUtente.append(inputNome);
   divContenitoreInfo.append(divLavoroUtente);
   divLavoroUtente.append(inputLavoro);
   divContenitoreInfo.append(divContenitoreicona);


   
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

creaElementi();

