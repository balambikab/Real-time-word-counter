const txtareael=document.getElementById("textarea")
const totcountel=document.getElementById("total-counter")
const remel=document.getElementById("remaining-counter")
txtareael.addEventListener("keyup",()=>{
  updatecounter()
})
updatecounter()
function updatecounter(){
  totcountel.innerText=txtareael.value.length
  remel.innerText=txtareael.getAttribute("maxlength")-txtareael.value.length;
}
