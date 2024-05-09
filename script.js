//Asi agregamos a la pantalla el valor de la calculadora que toquemos 
function agregar(valor){
document.getElementById("pantalla").value+=valor;
}

//funcion para borrar pantalla boton C se lo igual a un espacio para borrar lo de la pantalla
function borrar(){
    document.getElementById("pantalla").value=" "
}

///funcion para tomar valor de pantalla y realizar calculos
function calcular(){
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla) //metodo de javascript hagarra string y lo calcula matematicamente
    document.getElementById("pantalla").value = resultado
}

