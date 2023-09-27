//selecting inputs
var nameinput = document.getElementById("nameinput")
var passwordinput = document.getElementById("passwordinput")
var lastinput = document.getElementById("lastinput") 
var phoneinput = document.getElementById("phoneinput") 
//selecting icons
var nameicon = document.getElementById("nameicon")
var passwordicon =document.getElementById("passwordicon")
var lasticon =document.getElementById("lasticon")
var phoneicon =document.getElementById("phoneicon")
//selecting labels
var namelabel = document.getElementById("namelabel")
var passwordlabel = document.getElementById("passwordlabel")
var lastlabel = document.getElementById("lastlabel")
var phonelabel = document.getElementById("phonelabel")
//selecting border
var nameborder = document.getElementById("nameborder")
var passwordborder = document.getElementById("passwordborder")
var lastborder = document.getElementById("lastborder")
var phoneborder = document.getElementById("phoneborder")

function formvalidation(){
  if(nameinput.value == ""){
    namelabel.style.display="block"
    nameicon.style.display="none"
    nameborder.style.borderBottom="4px solid red"
  }else{
    nameicon.style.display="inline-block"
    namelabel.style.display="none"
    nameborder.style.borderBottom="2px solid white"
  }

  if(passwordinput.value == ""){
    passwordlabel.style.display="block"
    passwordicon.style.display="none"
    passwordborder.style.borderBottom="4px solid red"
  }else{
    passwordicon.style.display="inline-block"
    passwordlabel.style.display="none"
    passwordborder.style.borderBottom="2px solid white"
  }

  if(cpasswordinput.value == ""){
    cpasswordlabel.style.display="block"
    cpasswordicon.style.display="none"
    cpasswordborder.style.borderBottom="4px solid red"
  }else{
    cpasswordicon.style.display="inline-block"
    cpasswordlabel.style.display="none"
    cpasswordborder.style.borderBottom="2px solid white"
  }

  if(emailinput.value == ""){
    emaillabel.style.display="block"
    emailicon.style.display="none"
    emailborder.style.borderBottom="4px solid red"
  }else{
    emailicon.style.display="inline-block"
    emaillabel.style.display="none"
    emailborder.style.borderBottom="2px solid white"
  }

  if(phoneinput.value == ""){
    phonelabel.style.display="block"
    phoneicon.style.display="none"
    phoneborder.style.borderBottom="4px solid red"
  }else{
    phoneicon.style.display="inline-block"
    phonelabel.style.display="none"
    phoneborder.style.borderBottom="2px solid white"
  }
}

