/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

 function twelveEvenFibonacciSum(){
 /// WRITE YOUR CODE HERE
	fibArray = [];	
	fibArray[0] = 0;
	fibArray[1] = 1;
	for (i=2;i<100;i++) {
		fibArray[i]=fibArray[i-1]+fibArray[i-2]	
	}
	
	sum = 0;
	counter = 0;
   	for (i=0;i<100;i++) {
		if (counter==12) {break;}				
		if (fibArray[i]%2==0) {
			sum += fibArray[i]
			counter++;
		}
	}
	return sum;	 
 }
