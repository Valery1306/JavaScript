//Acceder al formulario
let form = document.getElementById("validacion")

let fe1 = document.querySelector("#campoDoc .feedback")

let fe2 = document.querySelector("#campoNombre .feedback")

let fe3 = document.querySelector("#campoApellido .feedback")

let fe4= document.querySelector("#campoCorreo .feedback")

let fe5= document.querySelector("#campoPass .feedback")

//eSTABLECER REGLAS DE VALIDACIÓN
const $number = /^[0-9]{1,15}/
const $textos = /^[A-Za-zñÑáÁ]{1,50}/
const $email = /^[a-z+@++.+\w+]{1,0}/
const $pass = /^[A-z+@++.+\w+]{10,25}/

//Evennto validación antes de enviar el formulario

form.noDoc.addEventListener(`input`, (e) =>
{
    e.preventDefault();
    //console.log(e.target.value)
    if ($number.test(e.target.value)) {
        form.noDoc.setAttribute("class", "success")
        fe1.style.setProperty("visibility", "hidden")
        fe1.style.setProperty("opacity", "0")
    }

    else 
    {
        form.noDoc.setAttribute("class", "error") 
        fe1.textContent = "Solo puede digitar valores numéricos y la longitud debe ser minimo 1"
        fe1.style.setProperty("visibility", "visible")
        fe1.style.setProperty("opacity", "1")
    } 

})


form.nombre.addEventListener(`input`, (e) =>
{
   e.preventDefault();
    //console.log(e.target.value)
    if ($textos.test(e.target.value)) {
        form.nombre.setAttribute("class", "success")
        fe2.style.setProperty("visibility", "hidden")
        fe2.style.setProperty("opacity", "0")
    }

    else 
    {
        form.nombre.setAttribute("class", "error") 
        fe2.textContent = "Solo puede digitar Caracter de Palabra "
        fe2.style.setProperty("visibility", "visible")
        fe2.style.setProperty("opacity", "1")
    }   
})

form.apellido.addEventListener(`input`, (e) =>
{
   e.preventDefault();
    //console.log(e.target.value)
    if ($textos.test(e.target.value)) {
        form.apellido.setAttribute("class", "success")
        fe3.style.setProperty("visibility", "hidden")
        fe3.style.setProperty("opacity", "0")
    }

    else 
    {
        form.apellido.setAttribute("class", "error") 
        fe3.textContent = "Solo puede digitar Caracter de Palabra "
        fe3.style.setProperty("visibility", "visible")
        fe3.style.setProperty("opacity", "1")
    }   
})


form.email.addEventListener(`input`, (e) =>
{
   e.preventDefault();
    //console.log(e.target.value)
    if ($email.test(e.target.value)) {
        form.email.setAttribute("class", "success")
        fe4.style.setProperty("visibility", "hidden")
        fe4.style.setProperty("opacity", "0")
    }

    else 
    {
        form.email.setAttribute("class", "error") 
        fe4.textContent = "Solo puede digitar un correo valido"
        fe4.style.setProperty("visibility", "visible")
        fe4.style.setProperty("opacity", "1")
    }   
})


form.cpass.addEventListener(`input`, (e) =>
{
   e.preventDefault();
    //console.log(e.target.value)
    if ($pass.test(e.target.value)) {
        form.cpass.setAttribute("class", "success")
        fe5.style.setProperty("visibility", "hidden")
        fe5.style.setProperty("opacity", "0")
    }

    else 
    {
        form.cpass.setAttribute("class", "error") 
        fe5.textContent = "Su password debe incluir mínimo una letra mayúscula, un número, una letra minúscula, un carácter y debe ser mínimo de 10 caracteres."
        fe5.style.setProperty("visibility", "visible")
        fe5.style.setProperty("opacity", "1")
    }   
})
