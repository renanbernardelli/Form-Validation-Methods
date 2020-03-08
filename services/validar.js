import { validarDataNascimento } from "./validaDataNascimento.js";
import { retornarMensagemDeErro } from "./mensagensErro.js"

export const validarInput = (input, adicionarErro = true) => {

    
    const classeElementoErro = 'erro-validacao';
    
    const elementoPai = input.parentNode;
    const elementoErroExiste = elementoPai.querySelector(`${classeElementoErro}`);
    const elementoErro = elementoErroExiste || document.createElement("div");
    
    
    const classeInputErro = 'possui-erro-validacao';
    
    const tipo = input.dataset.tipo;
    const elementoEhValido = input.validity.valid;

    const validadoresEspecificos = {
        dataNascimento: input => validarDataNascimento(input)
    };

    if (validadoresEspecificos[tipo]) {
        validadoresEspecificos[tipo](input);
    };

    if (!elementoEhValido) {
        //não é válido

        elementoErro.className = classeElementoErro;
        elementoErro.textContent = retornarMensagemDeErro(tipo, input.validity);

        if (adicionarErro) {
            
            input.after(elementoErro);
            input.classList.add(classeInputErro);
        }

    } else {
        //é válido

        elementoErro.remove();
        input.classList.remove(classeInputErro);
    }
};