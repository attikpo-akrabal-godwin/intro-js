let btnA = document.getElementById("btn-a")
let btnB = document.getElementById("btn-b")
let btnC = document.getElementById("btn-c")
let btnE = document.getElementById("btn-e")
let barSvg = document.getElementById("bar-svg")


let modaleContainer = document.getElementById("modale")
let SpamClose =  document.getElementById("close")
let SpamCloseSecond =  document.getElementById("close-second-header")
let modaleForm = document.getElementById("modale-form")
let secondHeader = document.getElementById("second-header")


btnA.addEventListener("click",function(){
    modaleContainer.style.visibility= 'visible'
});

btnE.addEventListener("click",function(){
    modaleContainer.style.visibility= 'visible'
});

SpamClose.addEventListener("click",()=>{
    modaleContainer.style.visibility= 'hidden'
    modaleForm.style.display= 'block'
})

btnC.addEventListener("click",()=>{
    modaleContainer.style.visibility= 'hidden'
    modaleForm.style.display= 'block'
})



barSvg.addEventListener("click",(e)=>{
    secondHeader.classList.toggle("second-header-collapse")
})

SpamCloseSecond.addEventListener("click",(e)=>{
    secondHeader.classList.toggle("second-header-collapse")
})


// gestion formulaire 
btnB.addEventListener("click",(e) =>{
    e.preventDefault()
    let prenom = modaleForm["prenom"]
    let nom = modaleForm["nom"]
    let email = modaleForm["email"]
    let naissance = modaleForm["naissance"]
    let nbr = modaleForm["nbr"]
    let tournois = document.getElementsByName("tournois")
    let lu = modaleForm["lu"]
    let prevenu = modaleForm["prevenu"]
    let isvalid = true

    if (prenom) {
        const rePren = new RegExp('[0-9]')
        let prenomError = document.getElementById("prenom-error")
        if ((prenom.value.length<3||(rePren.test(prenom.value)))) {

            prenomError.innerHTML="prénom doit avoir plus de 3 caractères et ne contenant pas de chiffre"
            prenomError.classList.add("red")
            prenom.style.borderColor = "red"
            isvalid = false

        }else{
            prenomError.classList.remove("red")
        }
    }

    if (nom) {
        const reNom = new RegExp('[0-9]')
        let nomError = document.getElementById("nom-error")
        if ((nom.value.length<3||(reNom.test(nom.value)))) {
            nomError.innerHTML="prénom doit avoir plus de 3 caractères et ne contenant pas de chiffre"
            nomError.classList.add("red")
            isvalid = false

        }else{
            nomError.classList.remove("red")
        }
    }

    if (email) {
        
        let emailError = document.getElementById("email-error")
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value)) {
            emailError.innerHTML="email non valide "
            emailError.classList.add("red")
            isvalid = false
        }else{
            emailError.classList.remove("red")
        }
    }
    if (naissance) {
        let naissanceError = document.getElementById("naissance-error")
        if (!naissance.value) {
            naissanceError.innerHTML= "veillez renseigner votre date de naissance "
            naissanceError.classList.add("red")
            isvalid = false
        }else{
            naissanceError.classList.remove('red')
        }
    }
    
    if (nbr) {
        let nbrError = document.getElementById("nbr-error")
        if (!nbr.value) {
            nbrError.innerHTML= "veillez renseigner votre nombre de participation"
            nbrError.classList.add("red")
            isvalid = false

        }else{
            nbrError.classList.remove('red')
        }
    }

    if(tournois){
        let ischecked = false
        let tournoisError = document.getElementById("tournois-error")
        tournois.forEach(element => {
            if (element.checked) {
                ischecked = true
            }
        });


        if (!ischecked) {
            tournoisError.innerHTML = "veillez choisir une ville "
            tournoisError.classList.add("red")
            isvalid = false
        }else{
            tournoisError.classList.remove('red')
        }
    }

    if (lu) {
        let luError = document.getElementById("lu-error")
        if (!lu.checked) {
            luError.innerHTML = "veillez aprouver "
            luError.classList.add("red")
            isvalid = false
        }else{
            luError.classList.remove("red")
        }   
    }
    
    if (isvalid) {
        alert("sucess")
        prenom.value = ""
        nom.value = ""
        email.value = ""
        naissance.value= ""
        nbr.value = ""
        lu.checked = false
        prevenu = false
        modaleForm.style.display= 'none'
    }
    
});

