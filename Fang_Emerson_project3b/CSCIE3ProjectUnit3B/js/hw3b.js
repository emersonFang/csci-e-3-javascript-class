window.onload = function(){
/* 6 */

/* 
I entered a regex pattern for the phone number in the html file based on info found here for US phones: http://html5pattern.com/Phones
*/

var f = document.forms[0];

f.addEventListener("submit", function (e) {
    
    if (!((f.phone.value.length > 0 || f.email.value.length > 0) && (f.phone.checkValidity() || f.email.checkValidity()))) {
	    e.preventDefault();
	alert("Make sure you have either a valid email, and/or a valid phone number with the format 'xxx-xxx-xxxx' entered");    	
    }

});



/* 1 */

var pwd1input = document.forms[0].pwd1;
//document.getElementById("pwd1");

pwd1input.addEventListener("keyup", function () {    
    
    if (this.value.length<8) {
    	document.getElementById("pwd1Hint").style.display = "inline";
    } else {
    	document.getElementById("pwd1Hint").style.display = "none";
    }
});

var pwd2input = document.forms[0].pwd2;

pwd2input.addEventListener("keyup",function () {

   if (pwd2input.value != pwd1input.value) {
   	document.getElementById("pwd2Hint").style.display = "inline";
    } else {
    	document.getElementById("pwd2Hint").style.display = "none";
    } 

});


/* 2 */

	var txt = document.getElementById("bio");

	txt.addEventListener("keyup", function () {
	    document.getElementById("charsLeft").innerHTML = (140-this.value.length);
	});


/* 3 */
var sel1 = document.getElementById("firstSelect");

 var selectList1 = {
     "carMakes": ["Ford", "Dodge", "Nissan"]
 }

/*  First, populate the select.  
     For each element in the "selectList1.carMakes" array,
      we will create an <option> element, give it a
      text node that contains its label, set the 
      'value' attribute on our new <option> element, and 
      finally, add it to the <select> element. 
 */
 for (var i = 0; i < selectList1.carMakes.length; i++) {
     //create <option>
     var s = document.createElement("option");  
     // create text node
     var t = document.createTextNode(selectList1.carMakes[i]);
     // add text node to <option>
     s.appendChild(t);
     // set value="" on the <option>
     s.setAttribute("value", selectList1.carMakes[i]);
     // add the new <option> to the <select>
     sel1.appendChild(s);
 }


// This part will react to user selections on our drop-down list
  sel1.addEventListener("change", function(e) {
     var val = this.value;
     //alert(val);	
     //document.getElementById('feedback').innerHTML = val + "s are good!"
    //create model arrays for each make based on what is selected
     if (val=="Ford") {
	var selectList2 = {"carModels": ["Focus", "Fusion", "Flex"]};
	//alert(selectList2.carModels);
     } else if (val=="Dodge") {
	var selectList2 = {"carModels": ["Charger", "Challenger", "Caravan"]};
	//alert(selectList2.carModels);
     } else if (val=="Nissan") {
        var selectList2 = {"carModels": ["Maxima", "Altima", "Pathfinder"]};
	//alert(selectList2.carModels);
     }

     var sel2 = document.getElementById("secondSelect");
     
     //clear previous options in <select> 
     if (sel2.length>=1) {
     	document.getElementById("secondSelect").innerHTML="<option>----</option>&nbsp;"
     }

     for (var i = 0; i < selectList2.carModels.length; i++) {
     //create <option>
     var u = document.createElement("option");  
     // create text node
     var v = document.createTextNode(selectList2.carModels[i]);
     // add text node to <option>	
     u.appendChild(v);
     // set value="" on the <option>	
     u.setAttribute("value", selectList2.carModels[i]);
     //add the new <option> to the <select>	
     sel2.appendChild(u);
}
}
)
}
