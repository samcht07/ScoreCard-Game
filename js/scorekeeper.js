

var p1button=document.querySelector("#p1");//by id
var p2button=document.querySelector("#p2");
var reset=document.getElementById("reset");//access button
var h1=document.querySelector("#score1");//by id
var h2=document.querySelector("#score2");
var number=document.querySelector("input");
var p=document.querySelector(".set");//

var p1score=0;
var p2score=0;
var gameOver=false;
var winningScore=5;//assume intial score as is 5

p1button.addEventListener("click", function(){
	

	if(!gameOver){
		p1score++;
		if(p1score === winningScore){
			h1.classList.add("winner");//add green color to winner
			
			gameOver=true;
			
				var myset1=setTimeout(mySet1, 500);

			
			/**/			
		}
	h1.textContent=p1score;//access player 1 score on h1 tag
	}	

});
p2button.addEventListener("click", function(){

	if(!gameOver){
		p2score++;//player 2 increment
		if(p2score===winningScore){
			h2.classList.add("winner");
			var myset2=setTimeout(mySet2, 500);
		/*	alert("Player 2 is WON the Game!!");*///pop up message for winner
			gameOver=true;
		}
		h2.textContent=p2score;
	}	

});


reset.addEventListener("click", function(){
resetFun();
});
function resetFun(){
p1score=0;
p2score=0;
h1.textContent=0;//player 1 score comes to 0
h2.textContent=0;
h1.classList.remove("winner");//remove color of winner
h2.classList.remove("winner");//remove color of winner

gameOver=false;
}

number.addEventListener("change", function(){

p.textContent=this.value;//number.value
winningScore=Number(this.value);//number.vaue
resetFun();

});
function mySet1(){
				
			alert("Player 1 is WON the Game!!");
		}

function mySet2(){
	alert("Player 2 is WON the Game!!");
}