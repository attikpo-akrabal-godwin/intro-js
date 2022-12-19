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
})

btnC.addEventListener("click",()=>{
    modaleContainer.style.visibility= 'hidden'
})

btnB.addEventListener("click",(e) =>{
    e.preventDefault()
    modaleForm.style.display= 'none'
});

barSvg.addEventListener("click",(e)=>{
    secondHeader.classList.toggle("second-header-collapse")
})

SpamCloseSecond.addEventListener("click",(e)=>{
    secondHeader.classList.toggle("second-header-collapse")
})
