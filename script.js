var randomNum1=Math.floor( Math.random()*6)+1;
console.log(randomNum1);

let randomDiceImage= "dice"+randomNum1+".png";

let img1= document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDiceImage);

var randomNum2=Math.floor( Math.random()*6)+1;
console.log(randomNum2);

let randomDiceImage2= "dice"+randomNum2+".png";


let img2= document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDiceImage2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player-1 Wins";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player-2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}




