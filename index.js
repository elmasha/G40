var db = firebase.firestore();




function MemberDetails(){

    var InputFirstname = document.getElementById("name").value;
    var InputSecondname = document.getElementById("location").value;
    var Inputphone = document.getElementById("email").value;
    var InputID = document.getElementById("phone").value;
    var InputEmail = document.getElementById("country").value;
    var InputPassword = document.getElementById("country").value;
    var InputCounty = document.getElementById("state").value;
    var InputConstituency = document.getElementById("message").value;
    var InputWard = document.getElementById("name").value;
    var InputPollingstation = document.getElementById("location").value;
    var InputDisability = document.getElementById("email").value;
    var InputReligion = document.getElementById("phone").value;
    var InputEmployment = document.getElementById("country").value;
    var InputEducationStatus = document.getElementById("state").value;
    var InputEthnicity = document.getElementById("message").value;
  
    if(Inputname == "" |Inputphone == ""
     |Inputcountry == "" |Inputmessage == "" |Inputstate == "" |Inputemail == ""){
      window.alert("Inputs are empty")
  
    }else{
  
      db.collection("Members").doc().set({
        Name: Inputname,
        Location: Inputlocation,
        Email: Inputemail,
        Phone: Inputphone,
        Message: Inputmessage,
        State: Inputstate,
        Country: Inputcountry
        })
        .then(function() {
        console.log("Document successfully written!");
        window.alert(Inputname + "  "+"registration successfull")
        })
        .catch(function(error) {
        console.error("Error writing document: ", error);
        window.alert(error)
        });
    }
  
  
  }