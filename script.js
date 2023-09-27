//selecting inputs
var nameinput = document.getElementById("nameinput")
var passwordinput = document.getElementById("passwordinput")
//selecting icons
var nameicon = document.getElementById("nameicon")
var passwordicon =document.getElementById("passwordicon")
//selecting labels
var namelabel = document.getElementById("namelabel")
var passwordlabel = document.getElementById("passwordlabel")
//selecting border
var nameborder = document.getElementById("nameborder")
var passwordborder = document.getElementById("passwordborder")

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
}