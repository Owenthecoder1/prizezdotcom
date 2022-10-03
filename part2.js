var rickroll = document.getElementById("begin")
var asterisk = document.getElementByTagName("span")

function RICKROLLEDLOL (){
	window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
}

function asteriskRun (){
	alert("I LIKE TRAINS")
}

rickroll.addEventListener("click",RICKROLLEDLOL)
asterisk.addEventListener("click",asteriskRun)