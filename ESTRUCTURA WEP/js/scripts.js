/* Imprimir lista de nombres
Crea un programa en javascript que cumpla con lo siguiente:

1. Define una lista de objetos llamada grupo.
    Este objeto debe tener una lista de 10 nombres.
    Separado por nombre y apellido
2. Crea una función llamada imprimirNombres.
    Esta función debe recorrer la lista de nombres 
    y mostrarlos en la consola uno a uno.
3. Llama a la funcion imprimirNombres para mostrar todos los nombres. */


const grupo = [
    {
        nombre: "Ari",
        apellido: "Osuna"
    },
    {
        nombre: "Lever",
        apellido: "Zurita"
    },
    {
        nombre: "Jesus",
        apellido: "Rojas"
    },
    {
        nombre: "Piedro",
        apellido: "Osuna"
    },
    {
        nombre: "Luis",
        apellido: "Lizarraga"
    },
    {
        nombre: "Ivan",
        apellido: "Inzuna"
    },
    {
        nombre: "Ismael",
        apellido: "Inda"
    },
    {
        nombre: "Julian",
        apellido: "Silva"
    },
    {
        nombre: "Kevin",
        apellido: "Orozco"
    },
    {
        nombre: "Lennyn",
        apellido: "Random"
    }

]

function imprimeNombres(){

    console.log(grupo)

}

imprimeNombres()