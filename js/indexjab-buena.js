document.querySelector(".boton1").addEventListener("click",empezar);

function empezar(){
    document.querySelector(".caja").innerHTML=`
    <button class="boton2">Añadir 1</button>
    <button class="boton3">Reiniciar</button>`
    document.querySelector(".boton2").addEventListener("click",incrementar);
    document.querySelector(".boton3").onclick=reiniciar;
}

function incrementar(){
    alert("Incrementar")
}
function reiniciar(){
    alert("Decrementar")
}