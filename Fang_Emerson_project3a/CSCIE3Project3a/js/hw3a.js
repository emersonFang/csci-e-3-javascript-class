/* hw3a.js  */

// your solution here
window.onload = function(){
document.getElementById("divideTranscript").addEventListener("click", function() {

	var transcriptText = document.getElementById('transcriptText').innerHTML;

	var arr = transcriptText.split(" ");

	document.getElementById('transcriptText').innerHTML = "";

	var index = 0;
	arr.forEach(function(el) {
		var newSpan = document.createElement("span");
		newSpan.className = "word";
		newSpan.id = "word" + index.toString();
		index++;
		var newText = document.createTextNode(el + " ");  
		newSpan.appendChild(newText);
		document.getElementById('transcriptText').appendChild(newSpan);
		
		newSpan.onmouseover=function(){newSpan.style.color="red"}; 

		newSpan.onmouseout=function(){newSpan.style.color="black"}; 
	}
	)
  }
  )
}
