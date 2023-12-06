const form = document.getElementById('form-valores');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(document.getElementById("valorA").value);
    const valorB = parseFloat(document.getElementById("valorB").value);
    const mensagemSucesso = `O segundo valor é maior que o primeiro.`;
    const mensagemErro = `O segundo valor não é maior que o primeiro.`;

    if (valorB > valorA) {
        const containermensagemSucesso = document.querySelector('.success-message');
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = 'block';

        document.getElementById("valorA").value = '';
        document.getElementById("valorB").value = '';
 
    } else {
        const containermensagemErro = document.querySelector('.error-message');
        containermensagemErro.innerHTML = mensagemErro;
        containermensagemErro.style.display = 'block';

        document.getElementById("valorA").value = '';
        document.getElementById("valorB").value = '';
    }
})


