var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0

function stpwatch(){
	end = new Date()
	diff = end - start
    diff = new Date(diff)
    
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("stpwatchtime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("stpwatch()", 10)
}

function stpwatchStart(){
	document.stpwatchForm.startstop.value = "stop!"
	document.stpwatchForm.startstop.onclick = stpwatchStop
	document.stpwatchForm.reset.onclick = stpwatchReset
	start = new Date()
	stpwatch()
}

function stpwatchContinue(){
	document.stpwatchForm.startstop.value = "stop!"
	document.stpwatchForm.startstop.onclick = stpwatchStop
	document.stpwatchForm.reset.onclick = stpwatchReset
	start = new Date()-diff
	start = new Date(start)
	stpwatch()
}
function stpwatchReset(){
	document.getElementById("stpwatchtime").innerHTML = "0:00:00:000"
	start = new Date()
}
function stpwatchStopReset(){
	document.getElementById("stpwatchtime").innerHTML = "0:00:00:000"
	document.stpwatchForm.startstop.onclick = stpwatchStart
}
function stpwatchStop(){
	document.stpwatchForm.startstop.value = "start!"
	document.stpwatchForm.startstop.onclick = stpwatchContinue
	document.stpwatchForm.reset.onclick = stpwatchStopReset
	clearTimeout(timerID)
}