function jugar(e) {
    e.preventDefault()

let name=document.getElementById("name").value    
let apell=document.getElementById("apell").value
let activ=document.getElementById("activ").value

if (name==1 && apell==1 && activ==1 ) {
    alert(`Felicitaciones ha ganado`)
}
else if (name==2 && apell==2 && activ==2) {
    alert(`Felicitaciones ha ganado`)
}
else if (name==3 && apell==3 && activ==3) {
    alert(`Felicitaciones ha ganado`)
}
else if (name==4 && apell==4 && activ==4) {
    alert(`Felicitaciones ha ganado`)
}
else if (name==5 && apell==5 && activ==5) {
    alert(`Felicitaciones ha ganado`)
}
else if (name==6 && apell==6 && activ==6) {
    alert(`Felicitaciones ha ganado`)
}
else if (name==7 && apell==7 && activ==7) {
    alert(`Felicitaciones ha ganado`)
}else{
    alert(`Respuestas incorrectas, vuelva a intentarlo`)
}

}