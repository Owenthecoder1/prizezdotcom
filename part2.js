var rickroll = document.getElementById("begin")
var asterisk = document.getElementById("verycoolasterisk")

function RICKROLLEDLOL (){
	window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
}

function asteriskRun (){
	var rikrol = prompt("Do you like rickrolls? Y/N")
	if(rikrol == "Y" || rikrol == "N"){
		window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
	}else{
		stage2Initiate()
	}
}

rickroll.addEventListener("click",RICKROLLEDLOL)
asterisk.addEventListener("click",asteriskRun)

function confirmationing (){
	var confirminging = prompt("Would you like to recieve a complimentary cube? Y/N")
	if(confirminging == "N"){
		alert("WELL YOU'RE GETTING ONE ANYWAY!")
		document.body.innerHTML = "U R WINNAR AGEN"
	}else{
		window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
	}
}

function stage2Initiate(){
	var prizeWant = prompt("Please input the prize you would like to recieve. 2 Hugs/Exercise Ball/Rick Roll/Coconut Plushie/1 Kiss")
	if(prizeWant == "1 Kiss" || prizeWant == "Exercise Ball" || prizeWant == "2 Hugs"){
		alert("Sadly, that prize is out of stock. You will recieve a rick roll instead")
		window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
	}else if(prizeWant == "Rick Roll"){
		window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
	}else if(prizeWant == "Coconut Plushie"){
		alert("Sadly, that prize is out of stock.")
		confirmationing()
	}else{
		alert("That prize does not exist")
		stage2Initiate()
	}	
}