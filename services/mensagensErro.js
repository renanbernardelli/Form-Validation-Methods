export const retornarMensagemDeErro = (tipo, validity) => {

    let mensagemDeErro = '';

    const tiposDeErro = ['valueMissing', 'typeMismatch', 'tooShort', 'rangeUnderflow', 'customError', 'patternMismatch'];

    const mensagensDeErro = {

        email: {
            valueMissing: 'O email é necessário',
            typeMismatch: 'Este email não é válido'
        },

        senha: {
            valueMissing: 'O senha é necessária',
            tooShort: 'A senha deve ter no mínimo 4 caracteres'
        },

        dataNascimento: {
            valueMissing: 'A data de nascimento é necessária',
            rangeUnderflow: 'A data mínima é 01/01/1901'
        },

        cpf: {
            valueMissing: 'O CPF é necessário',
            customError: 'Este não é um CPF válido'
        },

        rg: {
            valueMissing: 'O RG é necessário'
        },

        cep: {
            valueMissing: 'O CEP é necessário',
            patternMismatch: 'Este não é um CEP válido',
            customError: 'Este não é um CEP válido'

        },

        logradouro: {
            valueMissing: 'O logradouro é necessário'
        },

        cidade: {
            valueMissing: 'A cidade é necessária'
        },

        estado: {
            valueMissing: 'O estado é necessário'
        },

        preco: {
            valueMissing: 'O preço é necessário',
            customError: 'O valor deve ser maior que R$ 0,00'
        },

        nomeProduto: {
            valueMissing: 'O nome do produto é necessário'
        }
    };

    tiposDeErro.forEach(erro => {

        if (validity[erro]) {
            mensagemDeErro = mensagensDeErro[tipo][erro];
        }
    });

    return mensagemDeErro;
}