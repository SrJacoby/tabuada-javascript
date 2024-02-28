const multiInput = document.querySelector("input#multi-input")
const multiButton = document.querySelector("button#multi-button")
const multiResult = document.querySelector("div#multi-result")

multiButton.addEventListener('click', function(){
    const multiInputValue = multiInput.value

    if(multiInputValue !== "" && !isNaN(multiInputValue)){
        const multi = parseFloat(multiInputValue)

        multiResult.innerHTML = ""

        multiResult.style.border = "1px solid black"

        for(i=0; i<=10; i++){
            multiResult.innerHTML += `${multi} x ${i} = ${multi * i}<br>`
        }} else{
            alert('Digite um número válido')
            multiResult.innerHTML = ""
            multiResult.style.border = "none"
        }
    }
)
