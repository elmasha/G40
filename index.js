
var db = firabase.firstore();


function MemberDetails(){

    var InputFirstname = document.getElementById("name").value;
    var InputSecondname = document.getElementById("secname").value;
    var Inputphone = document.getElementById("phone").value;
    var InputID = document.getElementById("ID").value;
    var InputDOB = document.getElementById("dob").value;
    var InputNationality = document.getElementById("nationality").value;
    var InputEmail = document.getElementById("email").value;
    var InputPassword = document.getElementById("password").value;
    var InputCounty = document.getElementById("county").value;
    var InputConstituency = document.getElementById("constituency").value;
    var InputWard = document.getElementById("ward").value;
    var InputPollingstation = document.getElementById("pollingstation").value;
    var InputDisability = document.getElementById("yes").value;
    var InputReligion = document.getElementById("religion").value;
    var InputEmployment = document.getElementById("Employed").value;
    var InputEducationStatus = document.getElementById("Primary").value;
    var InputEthnicity = document.getElementById("ethnicity").value;
  
    if(InputID == "" |Inputphone == ""
     |InputDOB == "" |InputFirstname == "" |InputNationality == "" |InputEmail == "" | InputPassword == ""){
      window.alert("Inputs are empty")
  
    }else{
  
      db.collection("G40Members").doc().set({
        firstName: Inputname,
        secondName: InputSecondname,
        email: Inputemail,
        phone: Inputphone,
        id: InputID,
        nationality: InputNationality,
        county: InputCounty,
        constituency: InputConstituency,
        pollingstation: InputPollingstation,
        ward: InputWard,
        religion: InputReligion,
        ethnicity: InputEthnicity,
        education: InputEducationStatus,
        employment: InputEmployment,
        dob: InputDOB
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