window.addEventListener("load", formvalidate);

var submit, inputs, spans, output, errors = false;
var form;
function formvalidate(e)
{
spans = document.querySelectorAll("span");
heads = document.querySelectorAll("p");
inputs = document.querySelectorAll("input[type='text']");
submit = document.getElementById("submit");
output = document.getElementById("confirmation");
form=  document.getElementById("form");
submit.addEventListener("click", addName);	
	}

function addName(e)
	{
		var str= "";
	errors= false;
		for (var i = 0; i < inputs.length; i++){
		
            if (inputs[i].value === "")
            {

			heads[i].style.color = "red";
			spans[i].innerHTML = "*Required"
			errors = true;
        }
        else{
			str += inputs[i].value + "<br>";
        }
     }
  
     if(!confirmEmail()){
        errors = true;
     }

     if (!check_fname()){
        errors = true;
     }
     if (!check_lname()){
        errors = true;
     }
     if (!check_phone()){
        errors = true;
     }
    if (errors == false)
    
    {
        var fNameInput = document.querySelector("input[id='first-name']")
       var lNameInput = document.querySelector("input[id='last-name']")
        var emailInput = document.querySelector("input[id='email']")
        var phoneInput = document.querySelector("input[id='phone']")

    //Object to hold information form
    var person = {

    fname:fNameInput.value,
    lname:lNameInput.value,
    email:emailInput.value,
    phone:phoneInput.value,  
}

str = fNameInput.value + " " + lNameInput.value + "<br>";
str += emailInput.value + "<br>";
str += phoneInput.value + "<br>";

    output.style.display = "block";
    form.style.display = "none";
    output.innerHTML += str;

	}
}

	function confirmEmail(){
        //this regex checks for email validation
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
        var emails = document.getElementById('email')

		 var emailInput = document.querySelector("input[id='email']")
         var cem = document.querySelector("input[id='cemail']")
        
        if(regex.test(emails.value)){

        } else{ 
            alert("You have entered an invalid email address. Please enter a valid email. Example: js@gmail.com ");
            return false;
          }
     if(emailInput.value === cem.value){
		 	return true;
         }alert("You have entered an invalid email address")
         return false;   

    }
    ////this function validates first name
    function check_fname(){
        var regex = /^[a-zA-Z]+$/;
        var firstN = document.getElementById('first-name')
        if(regex.test(firstN.value)){
        return true;
        }else{
       alert("Please enter only letters in this field. EXAMPLE: 'Jesus':");
 
       return false;
        }
      }

      ////this function validates last name
      function check_lname(){
        var regex = /^[a-zA-Z]+$/;
        var lastN = document.getElementById('last-name')

        if(regex.test(lastN.value)){
        return true;
        }
        else{
       alert("Please enter only letters in this field. EXAMPLE: 'Rosario':");
      // lastN.focus();
       return false;

        }
      }
      
      ////this function validates phone number
    function check_phone(){
        var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        var phoneN = document.getElementById('phone')

        if(regex.test(phoneN.value)){
      
       return true;
        }
        else{
          alert("This is not a valid phone number. Please enter a valid phone number: Example 860-718-1234");
          return false;
      }
      }



