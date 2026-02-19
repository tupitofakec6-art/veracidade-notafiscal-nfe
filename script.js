document.getElementById('nfeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const chave = document.getElementById('chaveAcesso').value.replace(/\s/g, '');
    const captchaInput = document.getElementById('captchaInput').value.toUpperCase();
    const captchaOriginal = document.getElementById('captchaDisplay').innerText.replace(/\s/g, '');

    // Validação da Chave
    if (chave.length !== 44 || isNaN(chave)) {
        alert("Erro: A Chave de Acesso deve conter exatamente 44 dígitos numéricos.");
        return;
    }

    // Validação Simples de Captcha
    if (captchaInput !== captchaOriginal) {
        alert("Erro: O texto do CAPTCHA não confere.");
        return;
    }

    // Simulação de Carregamento
    exibirResultado();
});

function exibirResultado() {
    document.getElementById('consulta-section').classList.add('hidden');
    document.getElementById('resultado-section').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function voltarConsulta() {
    document.getElementById('consulta-section').classList.remove('hidden');
    document.getElementById('resultado-section').classList.add('hidden');
    document.getElementById('nfeForm').reset();
}
