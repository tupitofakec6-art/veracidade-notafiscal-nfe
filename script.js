document.getElementById('nfeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const chave = document.getElementById('chave').value.trim();
    const captchaCheck = document.getElementById('captchaCheck').checked;

    // 1. Validação de Caracteres Numéricos
    const apenasNumeros = /^\d+$/.test(chave);

    // 2. Validação de Comprimento
    if (chave.length !== 44 || !apenasNumeros) {
        alert("A Chave de Acesso deve conter exatamente 44 dígitos numéricos.");
        return;
    }

    // 3. Validação do CAPTCHA
    if (!captchaCheck) {
        alert("Por favor, confirme que você não é um robô (Marque o checkbox).");
        return;
    }

    // Se passar nas validações
    alert("Chave válida! Redirecionando para consulta do servidor...");
    // window.location.href = "resultado.html?chave=" + chave;
});

// Máscara simples para impedir letras no campo da chave
document.getElementById('chave').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
