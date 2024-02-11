let time = 60;
var score = 0;
var hit = 0;

function makeBubbles(){
   let bubble = ""

 for(let i = 0; i< 126; i++){
    let rn = Math.floor(Math.random() * 10);
    bubble += `<h2 class="bubble">${rn}</h2>`;
 }

 document.querySelector(".panel-buttom").innerHTML = bubble;
}makeBubbles()

function Timer(){
   let timeInterval = setInterval(()=>{
      time--;
      if(time>=0){
         document.querySelector("#time-in-html").innerHTML = time;
      }else{
         clearInterval(timeInterval)
         document.querySelector(".panel-buttom").innerHTML = `<h1>Game Over Your Score is ${score}</h1>`
      }
   },1000)
}Timer()

function scoreChanger(){
   score+=10;
   document.querySelector("#score-in-html").innerHTML = score;
}

function hitChanger(){
   hit = Math.floor(Math.random() * 9)
   document.querySelector("#hit-in-html").innerHTML = hit
}hitChanger()

document.querySelector(".panel-buttom").addEventListener("click", function(e){
   let clickedNum = Number(e.target.textContent);
   if(clickedNum === hit){
      scoreChanger();
      hitChanger();
      makeBubbles();
   }else{
      console.log("wrong")
      console.log(clickedNum)
   }
});