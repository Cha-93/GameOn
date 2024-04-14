// Fonction qui gère le responsive
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements récupère les balises html
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");
const formCloseBtn = document.getElementById("valideClose");
const errorPrenom = document.getElementById("msgErrorPrenom");
const errorNom = document.getElementById("msgErrorNom");
const errorEmail = document.getElementById("msgErrorEmail");
const errorConditions = document.getElementById("msgErrorConditions");
const errorParticiper = document.getElementById("msgErrorParticiper");
const errorTournois = document.getElementById("msgErrorTournois");
const errorDate = document.getElementById("msgErrorDate");

// launch modal event ( événement qui lance la pop up )
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// ligne suivante action fermeture pop up click X
modalBtnClose.addEventListener("click", closeModal);
formCloseBtn.addEventListener("click", closeModal)

// launch modal form ( fonction qui lance la pop up )
function launchModal() {
    // .bground{
    //  display: "block" ;
   // }
    modalbg.style.display = "block";
}

// Fonction qui ferme la pop up x
function closeModal() {

    modalbg.style.display = "none";

}


// Fonction qui est appellé à la validation du formulaire ( submit )
function validate() {

    // Récupération des valeurs des champs de texte (imput)
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementsByName("location");
    const checkbox1 = document.getElementById("checkbox1").checked;
    const checkbox2 = document.getElementById("checkbox2").checked;

    
// Réinitialisation des messages d'erreur

        errorPrenom.innerHTML=""
        errorNom.innerHTML=""
        errorEmail.innerHTML=""
        errorConditions.innerHTML=""
        errorParticiper.innerHTML=""
        errorTournois.innerHTML=""
        errorDate.innerHTML=""
    
// Déclaration de la variable qui sert à déterminer si le formulaire est valide ou non
    let isFormValide = true;


    // Conditions de validation du champ prénom
    if (first.length < 2) {
        isFormValide = false
        errorPrenom.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom."
        errorPrenom.style.display="block"
        
    }

    // Conditions de validation du champ Nom
    if (last.length < 2) {
        isFormValide = false
        errorNom.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom."
        errorNom.style.display="block"
    }
    

    // Conditions de validation de la case des conditions
    if (checkbox1 == false) {
        isFormValide = false
        errorConditions.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions."
        errorConditions.style.display="block"

    }

    

    //  Déclaration de variable avec clé
    const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;



    // Conditions de validation du champ Email
    if (regex.test(email) == false) {
    isFormValide = false;
    errorEmail.innerHTML="Veuillez entrer une adresse mail."
    errorEmail.style.display="block"

   
    

    }
    // Conditions de validation du champ Email
    if (email.length == 0) {
    isFormValide = false;
    errorEmail.innerHTML="Veuillez entrer une adresse mail."
    errorEmail.style.display="block"

   
    

    }



    // Conditions de validation du champ nombre de tournois
    if (quantity.length > 0){
        
        if (typeof parseInt(quantity) !== "number") {
            isFormValide = false
            errorTournois.innerHTML="Vous devez indiquer un nombre."
            errorTournois.style.display="block"
        }
    }else {
        isFormValide = false
        errorTournois.innerHTML="Vous devez indiquer un nombre."
        errorTournois.style.display="block"
    }


    // Conditions de validation du champ Date de naissance
    if(birthdate.length ==  ""){
        isFormValide = false
        errorDate.innerHTML="Vous devez indiquer une date."
        errorDate.style.display="block"


    }

    // Déclaration de la variable qui sert à déterminer si une des options des villes est coché
    let isChecked = false

    // Boucle for qui parcourt tout les champ radio (rond) dans la variable location

    for (let i = 0; i < location.length; i++) {
        if (location[i].checked == true) {
            isChecked = true
        }
    }

    // Conditions de validation des cases pour choisir une ville
    if (isChecked == false) {
        isFormValide = false
        errorParticiper.innerHTML="Vous devez choisir une option."
        errorParticiper.style.display="block"
    }

    // Condition final qui indique que si au moins 1 champ n'est pas valide alors il retourne false
    if (isFormValide == false) {
        return false;
    } else {

        // disparition du formulair une fois validé
        let form = document.getElementById("formulaire")
        form.style.display = "none";

        // Apparition de la pop up final ( où il faut cliquer sur fermer )
        let valMes = document.getElementById("valideContainer")
        valMes.style.display = "block"


        // False pour ne pas que la page se rafraichisse
        return false;
       
    }


}

