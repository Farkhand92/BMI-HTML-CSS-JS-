const iconBars =document.querySelector(".bar-icon");
const navBar = document.querySelector(".navbar");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const bMi=document.querySelector(".guageValue");
const guageMeter =document.querySelector(".guageMeter");
const calcBtn = document.querySelector("#calcBtn");
const loader = document.querySelector("#loader");
const formBack = document.querySelector("#form");
const form = document.querySelector("form");
const fBtn = document.querySelector("#fBtn");
let dispNav = "hidden"; 

let navFunc=()=>{
    if(dispNav === "hidden"){
     navBar.style.left="0%";
     dispNav = "visible";
     document.querySelector("#bars").setAttribute("class","fa-solid fa-xmark");
    }
    else{
     navBar.style.left="-100%";
     dispNav = "hidden";
     document.querySelector("#bars").setAttribute("class","fas fa-bars");
    }
}

iconBars.addEventListener("click",navFunc);
//BMI Calculations
const bmiCalc = ()=>{
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);
    const bmi = weightValue / ((heightValue/100) * (heightValue/100));
    const result = bmi.toFixed(2);
    if((isNaN(weightValue) || isNaN(heightValue)) || (weightValue<=0 || heightValue<=0)){
     bMi.innerText="Enter valid values";
     guageMeter.style.transform =`rotate(0deg)`;

    }
    else{
    if(result <= 40)
    {
        guageMeter.style.transform =`rotate(${result*4.5}deg)`;
        if(result > 0 && result < 18.5)
        {
            bMi.innerText = `BMI: ${result}\n Under-Weight`;
            guageMeter.style.backgroundColor = "yellow";
            bMi.style.color= "yellow";
        }
        else if(result >= 18.5 && result <=24.99)
        {
         bMi.innerText = `BMI: ${result}\n Normal-Weight`;
         guageMeter.style.backgroundColor = "green";
         bMi.style.color= "green";

         }
        else if(result >= 25 && result <= 29.9)
        {
            bMi.innerText = `BMI: ${result}\n Over-Weight`;
            guageMeter.style.backgroundColor = "darkred";
            bMi.style.color= "darkred";

        }
        else
        {
            bMi.innerText = `BMI: ${result}\n Obese`;
            guageMeter.style.backgroundColor = "red";
            bMi.style.color= "red";
 
        }

    }
    else{
        bMi.innerText = `BMI: ${result} Obesity`;
        bMi.style.color="red";
        guageMeter.style.transform = `rotate(180deg)`;
        guageMeter.style.backgroundColor = "black";
    }
}
};

calcBtn.addEventListener('click',bmiCalc);

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        navBar.style.left = "-100%";
        dispNav = "hidden";
        document.querySelector("#bars").setAttribute("class", "fas fa-bars");

        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});


window.addEventListener("load",()=>
{ 
   loader.style.display="none";
   formBack.style.display="block";
   document.body.style.overflow = 'hidden';
 });

fBtn.addEventListener("click",()=>{
 form.addEventListener("submit",(event)=>{
    event.preventDefault();
    formBack.style.display="none";
    document.body.style.overflow = 'auto'; 
});
});


