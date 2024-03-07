//calculadora de motete la para coñaso
const display = document.getElementById("display")

/* 
esta funcion sirve para segun yo para mostrar en pantalla algo que el usuario ponga
*/
function appendToDisplay(input){
    display.value += input;
}

/*
esta funcion para borrar al presional la letra ( C )
*/
function clearDisplay(){
    display.value = ""
}

/*
 esta funcion hace que al presionar ( = ) esta nos de el resultado que queremos 
*/
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = error
    }
}