var achievements = document.getElementById("achievements")
var membership = document.getElementById("membership")
var freetrial = document.getElementById("fretryil")

function achievementsRun (){
	alert("To access your achievements you need to have a membership")
	membershipRun()
}

function membershipRun (){
	var membership = prompt("There are 3 levels of memberships with different perks. Normal: Access to achievements. Gold: Access to achievements and 2 free prizes. Diamond: Access to achievements with 50% of the requirements and 5 free prizes. Please enter Normal/Gold/Diamond")
	if(membership == "Normal" || membership == "Gold" || membership == "Diamond"){
		prompt("Please enter your credit/debit card ID")
		document.body.innerHTML = "Insufficient Funds <span style = 'opacity:0'><a href='https://www.youtube.com/watch?v=iik25wqIuFo'>Right?</a></span>"
	}
}

function winRun (){
	document.body.innerHTML = "U R WINNAR"
}

function freetrialRun (){
	var confirm = confirm("To access your free trial, you must agree to our terms and conditions. Do you agree?")
	if(confirm == true){
		document.body.innerHTML = "<a href='https://www.youtube.com/watch?v=iik25wqIuFo'>Begin!</a>"
	}else{
		document.body.innerHTML = "<!DOCTYPE html><html><head><link rel='stylesheet' href='index.css'></head><center style = 'font-size: 50px'>Hello Prize Reciever<div style = 'font-size: 12px' id='win'>WIN</div></center><p>Welcom to prizezdotcom! This is a website where you can claim your prizes for completing achievements. Click the button below to view your achievements. If you like out services and want to become a member, click the other button. Thank you!<br></br><br></br><br></br><br></br><br></br><br></br><center style = 'font-size: 50px'><u><span id='achievements'>Achievements</span><br></br><br></br><span id='membership'>Membership</span></u></center></p><script type='text/javascript' src='index.js'></script></html>"
		var WINNAR = document.getElementById("win")
		WINNAR.addEventListener("click",winRun)
	}
}

achievements.addEventListener("click", achievementsRun)
membership.addEventListener("click", membershipRun)
freetrial.addEventListener("click",freetrialRun)