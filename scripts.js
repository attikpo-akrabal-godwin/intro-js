let btnA = document.getElementById("btn-a")
let btnB = document.getElementById("btn-b")
let btnC = document.getElementById("btn-c")

let modaleContainer = document.getElementById("modale")
let SpamClose =  document.getElementById("close")
let modaleForm = document.getElementById("modale-form")

btnA.addEventListener("click",function(){
    modaleContainer.style.visibility= 'visible'
});

SpamClose.addEventListener("click",function(){
    modaleContainer.style.visibility= 'hidden'
})

btnC.addEventListener("click",function(){
    modaleContainer.style.visibility= 'hidden'
})

btnB.addEventListener("click",function(e){
    e.preventDefault()
    modaleForm.style.display= 'none'
});
