
const colors=["green","yellow","red","orange","blue","white","pink"];
let btn=document.getElementById("btn");
let color=document.querySelector(".color");
btn.addEventListener("click",()=>{
    const randomNumber=getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];

})
const getRandomNumber=()=>{
   
    return Math.floor(Math.random()*colors.length);
}