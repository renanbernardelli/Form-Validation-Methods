export const recuperarEndereco = (input) => {

    const cepNumeros = input.value.replace(/\D/, '');

    if (input.validity.valid) {

        const url = `http://viacep.com.br/ws/${cepNumeros}/json/`
        const options = {

            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            }
        }

        fetch(url, options)
            .then(response => response.json())
            .then(data => {

                console.log(data);
                

                if (data.erro) {
                    
                    input.setCustomValidity('Este não é um CEP válido');
                    return;
                }

                preencherCampos(data);

                input.setCustomValidity('');
                return;
            });
    }
};

const preencherCampos = data => {

    const campoLogradouro = document.getElementById('logradouro');
    const campoLocalidade = document.getElementById('cidade');
    const campoUF = document.getElementById('estado');

    campoLogradouro.value = data.logradouro;
    campoLocalidade.value = data.localidade;
    campoUF.value = data.uf;

}