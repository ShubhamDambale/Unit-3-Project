document.querySelector("form").addEventListener("submit", myFunction);

 var regusers = JSON.parse(localStorage.getItem("userCred"));

//  console.log(regusers)

 function myFunction(event) {
  event.preventDefault();

  var enteredemail = document.querySelector("#email").value;
  var enteredpass = document.getElementById("pass").value;


console.log(email,pass)

for(var i = 0; i<regusers.length; i++){

    if((regusers[i].email==enteredemail) && (regusers[i].password==enteredpass)){
        alert("Login Success");
   
       

        window.location.href = "index.html"
        break;
    }
    else{
        alert("Login Failed");
        
    }
}

 }
