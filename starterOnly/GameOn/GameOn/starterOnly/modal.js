function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");
const formCloseBtn = document.getElementById("valideClose");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ligne suivante action fermeture pop up click X
modalBtnClose.addEventListener("click", closeModal);
formCloseBtn.addEventListener("click", closeModal)
// launch modal form
function launchModal() {
    // .bground{
    //  display: "block" ;
   // }
    modalbg.style.display = "block";
}

function closeModal() {

    modalbg.style.display = "none";

}



function validate() {

    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementsByName("location");
    const checkbox1 = document.getElementById("checkbox1").checked;
    const checkbox2 = document.getElementById("checkbox2").checked;


    let isFormValide = true;

    if (first.length < 2) {
        isFormValide = false
        
    }

    if (last.length < 2) {
        isFormValide = false
    }
    

    if (checkbox1 == false) {
        isFormValide = false
    }

    if (email.length == 0) {
        isFormValide = false;
        
    }


    if (typeof parseInt(quantity) !== "number") {
        isFormValide = false

    }


    let isChecked = false

    for (let i = 0; i < location.length; i++) {
        if (location[i].checked == true) {
            isChecked = true
        }
    }

    if (isChecked == false) {
        isFormValide = false
    }

    if (isFormValide == false) {
        return false;
    } else {

        let form = document.getElementById("formulaire")
        form.style.display = "none";

        let valMes = document.getElementById("valideContainer")
        valMes.style.display = "block"

        return false;
        // Formulaire false pour ne pas que la page se rafraichisse
    }


}

