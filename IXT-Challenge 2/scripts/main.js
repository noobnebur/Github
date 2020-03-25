 window.onload = function() { setInterval( timeFunction, 100); }

function timeFunction() {
   	var currentTime = new Date();
  	var h = currentTime.getHours();
   	var m = currentTime.getMinutes();
   	var s = currentTime.getSeconds();
   	h = checkTime(h);
   	m = checkTime(m);
  	s = checkTime(s);
  		

    document.getElementById("clockText").innerHTML = h + ":" + m + ":" + s ;

	if(h <= 8 || h >= 21 ) {

		document.getElementById("sun").style.display = "none"; // Maan
 		document.body.style.backgroundColor = "#E6E6E6";
    document.getElementById("clockText").style.color = "#000000";
 	}
 	else {
 		document.getElementById("moon").style.display = "none"; // Zon
		document.body.style.backgroundColor = "#FF760D";
 	}

 }
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

/*function dayNight {
	if(h <= 8 || h => 20) {
		document.getElementById("sun").style.display = "none";
	}
}*/

function setCurrentTime() {
 
    var date = new Date();
 
    var hours = date.getHours() % 12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
 
    var hoursHand = document.getElementById('hoursHand');
    hoursHand.style.animationDelay = - ( (hours * 3600) + (minutes * 60) + seconds ) + "s";
 
    var minutesHand = document.getElementById('minutesHand');
    minutesHand.style.animationDelay = - ( (minutes * 60) + seconds ) + 's';
 
    var secondsHand = document.getElementById('secondsHand');
    secondsHand.style.animationDelay = -seconds + 's';
 
}
 
function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
 
ready(setCurrentTime);