document.getElementById('nfeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const chaveDigitada = document.getElementById('chave').value.trim();
    const captchaCheck = document.getElementById('captchaCheck').checked;
    const chaveMestra = "21251003526252000147558902531639051420910128";

    // Validação de segurança básica
    if (!captchaCheck) {
        alert("Por favor, marque a caixa 'Sou humano'.");
        return;
    }

    if (chaveDigitada === chaveMestra) {
        // Simula um pequeno delay de processamento governamental
        const btn = e.target.querySelector('.btn-orange');
        btn.innerText = "Processando...";
        btn.disabled = true;

        setTimeout(() => {
            // Esconde a busca e mostra o resultado
            document.querySelector('.consult-box').classList.add('hidden');
            document.getElementById('resultado-download').classList.remove('hidden');
            window.scrollTo(0, 0);
        }, 1200);
    } else {
        alert("Chave de Acesso não encontrada na base de dados ou inválida.");
    }
});
