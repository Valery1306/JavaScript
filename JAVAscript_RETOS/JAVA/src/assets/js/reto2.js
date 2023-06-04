function convertir(e) {
    e.preventDefault()

    
    let op=document.getElementById("op").value
    let conver=parseInt(document.getElementById("conver").value)
    let conver1=parseInt(document.getElementById("conver1").value)
//Grados Fahrenheit a celsius
    if (conver==1 && conver1==2) {
        cels=(op-32)/1.8
        alert(`Su temperatura convertida a grados  Celsius es `+cels)  
    }
//Grados Fahrenheit a Kelvin
    else if (conver==1 && conver1==3){
        kelvi=(op-32)/1.8+273.1
        alert(`Su temperatura convertida a grados  Kelvin es `+kelvi)
    }
//Grados Celsius a Fahrenheit
    else if (conver==2 && conver1==1){
        fahr=(1.8*op)+32
        alert(`Su temperatura convertida a grados Fahrenheit  es `+fahr)
    }
//Grados Celsius a Kelvin
    else if (conver==2 && conver1==3){
        kelvi=op+(273.15)
        alert(`Su temperatura convertida a grados Kelvin es `+kelvi)
}
//Grados Kelvin a Fahrenheit
    else if (conver==3 && conver1==1){
        fahr=((op-273.15)*1.8)+32
        alert(`Su temperatura convertida a grados  Fahrenheit es `+fahr)
}
//Grados Kelvin a Celsius
    else if (conver==3 && conver1==2){
        cels=op-273.15
        alert(`Su temperatura convertida a grados  Celsius es `+cels)
}

}



