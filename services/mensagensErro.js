export const retornarMensagemDeErro = (tipo, validity) => {

    let mensagemDeErro = '';

    const tiposDeErro = ['valueMissing', 'typeMismatch', 'tooShort', 'rangeUnderflow', 'customError'];

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
            valueMissing: 'O CPF é necessário'
        },

        rg: {
            valueMissing: 'O RG é necessário'
        },

        cep: {
            valueMissing: 'O CEP é necessário'
        },

        logradouro: {
            valueMissing: 'O logradouro é necessário'
        },

        cidade: {
            valueMissing: 'A cidade é necessária'
        },

        estado: {
            valueMissing: 'O estado é necessário'
        }
    };

    tiposDeErro.forEach(erro => {

        if (validity[erro]) {
            mensagemDeErro = mensagensDeErro[tipo][erro];
        }
    });

    return mensagemDeErro;
}