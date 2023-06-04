function determinarTriangulo(e) {
    e.preventDefault()

    let lado1=document.getElementById("lado1").value  
    let lado2=document.getElementById("lado2").value  
    let lado3=document.getElementById("lado3").value  
//Triángulo equilátero
    if (lado1==lado2 && lado2==lado3 && lado1==lado3) {
       alert(`Su tipo de triangulo es equilátero ya que todos su lados son iguales`) 
    }
//Triángulo isósceles
    else if (lado1==lado2 || lado1==lado3 || lado2==lado3)
        alert(`Su tipo de triangulo es isósceles ya que Tiene dos lados iguales (de igual longitud) y otro no.`)

//Triángulo escaleno
    else if (lado1 != lado2 || lado1 != lado3 || lado2 != lado3)
        alert(`Su tipo de triangulo es escaleno ya que tiene los tres lados diferentes, es decir, de distinta longitud.`)
}