var achievements = document.getElementById("achievements")
var membership = document.getElementById("membership")

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

achievements.addEventListener("click", achievementsRun)
membership.addEventListener("click", membershipRun)