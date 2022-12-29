const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const parrafoHexa = document.getElementById("parrafoHexa");
const cardColor = document.getElementById("cardColor");

btnVisualizar.addEventListener("click", () => {
    // console.log("me diste click")
    console.log(inputColor.value) 
    parrafoHexa.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value

    //Bonus
    navigator.clipboard
        .writeText(inputColor.value)
        // .then(() => console.log("texto copiado"))
        // .catch((e) => console.log(e));
})