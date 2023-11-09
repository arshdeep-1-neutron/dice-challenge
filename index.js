
//Random number generation
let random1 = Math.random();

randomNumber1 = random1 * 6;
randomNumber1 = Math.ceil(randomNumber1);

let random2 = Math.random();

randomNumber2 = random2 * 6;
randomNumber2 = Math.ceil(randomNumber2);


//Manipulating image addresses

let imgString1 = "images/dice"+randomNumber1+".png";
let imgString2 = "images/dice"+randomNumber2+".png";

//DOM manipulation of image tag
document.querySelector(".img1").setAttribute("src",imgString1);
document.querySelector(".img2").setAttribute("src",imgString2);

document.querySelector(".h1")


//Comparing random numbers for the winner
if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "Player1 wins 🚩";

}
else if(randomNumber1 < randomNumber2){

    document.querySelector("h1").innerHTML = "Player2 wins 🚩";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else{
   // document.querySelector("h1").innerHTML = "Refresh me";
}