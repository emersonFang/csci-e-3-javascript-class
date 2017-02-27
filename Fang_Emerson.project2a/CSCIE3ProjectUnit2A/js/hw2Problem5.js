var myWordsToCount = document.getElementById("myWordsToCount");

myWordsToCount.onkeyup = function () {

	myString = myWordsToCount.value;
	myString = myString.replace(/[.!?<>@#$%'"[\]|+,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //http://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex

	myString = myString.replace(/[\s,]+/g, ' '); //http://stackoverflow.com/questions/11211175/javascript-split-space-delimited-string-and-trim-extra-commas-and-spaces
	myStringArray = myString.split(' ');
	numWords = myStringArray.length;
	document.getElementById("wordcount").innerHTML = numWords;

}
