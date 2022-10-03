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

function stage2Initiate(){

}