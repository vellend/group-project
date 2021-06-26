$(document).ready(function(){

setInterval(function(){
	$("#time").text(moment().format("h:mm"));
}, 1000)




})

// "h:mm:ss a"