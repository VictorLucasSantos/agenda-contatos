const form = document.getElementById('form-cadastro');
const aNomes = [];
const aTelefones = [];

let Linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
});

function adicionalinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    const partesNome = inputNome.value.trim().split(' ');

    console.log(partesNome)

    if (partesNome.length < 2 && partesNome.every(partesNome => partesNome.length > 1)){
        alert('Informe o nome completo');
        return;
    }

    if (inputTelefone.value.length <= 10){
        alert('Numero de telefone inválido');
        return;
    }

    if (aNomes.includes(inputNome.value)){
        alert(`O contato de nome : ${inputNome.value} ja foi incluído`);
        return;
    }

    if (aTelefones.includes(inputTelefone.value)){
        alert(`O numero de telefone: ${inputTelefone.value} ja foi incluído`);
        return;
    }

    aNomes.push(inputNome.value);
    aTelefones.push(inputTelefone.value);

    let Linha = '<tr>';
    Linha += `<td>${inputNome.value}</td>`;
    Linha += `<td>${inputTelefone.value}</td>`;
    Linha += '<tr>';

    Linhas += Linha;

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizatabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = Linhas;

    const RodapeTabela = document.querySelector('tfoot');
    RodapeTabela.innerHTML =`
        <tr>
            <td>Qtd Contatos</td>
            <td>${aNomes.length.toString()}</td>
        </tr>
    `;

}
