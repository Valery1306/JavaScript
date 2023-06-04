function calcular(e)
{
    e.preventDefault()

    let p = document.getElementById("p").value
    let option = parseInt(document.getElementById("option").value)

    if (option == 1)
    {
        alert(`su longitud es de ${p.length}`)
    }
    else if (option==2)
    {
        alert(p.toUpperCase())
    }
    else if (option==3)
    {
        alert(p.toLowerCase())
    }
    else if (option==4) {
        alert(`El primer caracter de su palabra es ${p.charAt()}`)
        
    }
    else{
        alert(`Ingrese una Opción`)
    }
}