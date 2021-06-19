$(document).ready(function(){

setInterval(function(){
	$("#time").text(moment().format("h:mm:ss a"));
}, 1000)




})