const formCep = document.querySelector("#form-cep");

// Quero que, neste código, ele entenda o que deve fazer
formCep.addEventListener("submit", (e) => {
// preventDefault se refere a prevenir o evento padrão 
    e.preventDefault();

    // op valor do input
    const cepInputValue = document.querySelector("#cep-input").value;

    //o input em si
    const cepInput = document.querySelector("#cep-input");

    const cepInputDiv = document.querySelector("#cep-input-div");

    const regexSemHifen = /^[0-9]{8}$/
    const regexSemHifen = /^[0-9]{5}[-][0-9]{3}$/;

    if(regexSemHifen.test(cepInputValue) || regexComHifen.test(cepInputValue)) {

    } else {

    }

});