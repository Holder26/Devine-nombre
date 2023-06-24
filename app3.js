
let randomNr = Math.random() *101;
let fixNumber = Math.floor(randomNr);
let titre = document.querySelector(".h1")
let divNb= document.querySelector(".numbers")
let userNb1 = document.querySelector("#myText");

let reload = document.querySelector("#reload")
let btn = document.querySelector("#myButton");
let btn0 = document.querySelector ("#btn0")
let btn1 = document.querySelector ("#btn1")
let btn2 = document.querySelector ("#btn2")
let btn3 = document.querySelector ("#btn3")
let btn4 = document.querySelector ("#btn4")
let btn5 = document.querySelector ("#btn5")
let btn6 = document.querySelector ("#btn6")
let btn7 = document.querySelector ("#btn7")
let btn8 = document.querySelector ("#btn8")
let btn9 = document.querySelector ("#btn9")
let btn10 = document.querySelector ("#btn10")
let userNb = document.querySelector("#myText").value
let leftTry = document.querySelector(".essai")

let menu = document.querySelector(".menu")
let nav = document.querySelector(".nav")

let hidNb = document.querySelector(".hidNb")




menu.addEventListener('click', menuNav);
function menuNav(){
    const l1= document.querySelector(".l1")
    const l2= document.querySelector(".l2")
    const l3= document.querySelector(".l3")
    l1.classList.toggle("activeL1")
    l2.classList.toggle("activeL2")
    l3.classList.toggle("activeL3")
    nav.classList.toggle("active")
    

}


reload.addEventListener('click', ()=>{
    location.reload()
})
deleteNb.addEventListener("click", ()=> {
    document.querySelector("#myText").value = ""
})

btn0.addEventListener('click', ()=>{
    document.querySelector("#myText").value +="0"

})
btn1.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "1"

})
btn2.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "2"

})
btn3.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "3"

})
btn4.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "4"

})
btn5.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "5"

})
btn6.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "6"

})
btn7.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "7"

})
btn8.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "8"

})
btn9.addEventListener('click', ()=>{
    document.querySelector("#myText").value += "9"

})
    btn10.addEventListener('click', ()=>{
        document.querySelector("#myText").value = 10
    
    })


btn.addEventListener('click', guetNb);

let tryLeft = 6;
let count = 0;

function guetNb (){
    count ++;
    tryLeft --;
    leftTry.innerHTML = `Il reste ${tryLeft} essais`;
    userNb = document.querySelector("#myText").value;
    let resultat = document.querySelector(".resultat")
    if (count<6 ){

        userNb = document.querySelector("#myText").value;
        let resultat = document.querySelector(".resultat")
        resultat.innerHTML = ""
        console.log(userNb)
    
        console.log(fixNumber);


    
     if(userNb < fixNumber){
        console.log("trop bas");
        resultat.innerHTML = "trop bas!";
        resultat.classList.toggle("shake")
        document.querySelector("#myText").value = "";
        }
        
        else if(userNb > fixNumber){
        console.log("trop haut");
        resultat.innerHTML = "trop haut!";
        resultat.classList.toggle("shake")
        document.querySelector("#myText").value = "";
        
        }
       
       else if(userNb == fixNumber){
            console.log("bravo")
            resultat.innerHTML = `Bravo! C'était bien ${fixNumber}.`;
            resultat.classList.toggle("scaleAnim");
            document.querySelector("#myText").value = "";
     
        } 
}
else if(userNb == fixNumber){
    
    resultat.innerHTML = `Bravo! C'était bien ${fixNumber}.`;
    resultat.classList.toggle("scaleAnim")
    document.querySelector("#myText").value = "";
}
else{
    let resultat = document.querySelector(".resultat");
    resultat.innerHTML = `Perdu! C'était ${fixNumber}`;
    function relod (){
        location.reload()
    }
    setTimeout(relod, 2000)
    
    
    
}


}




