function validarChave() {
    const chaveCorreta = "21251003526252000147558902531639051420910128";
    const input = document.getElementById('chaveInput').value.replace(/\s/g, '');
    const isHuman = document.getElementById('humanCheck').checked;

    if (input.length !== 44) {
        alert("A chave deve ter 44 dígitos.");
        return;
    }

    if (!isHuman) {
        alert("Por favor, valide o CAPTCHA.");
        return;
    }

    if (input === chaveCorreta) {
        document.getElementById('area-consulta').classList.add('hidden');
        document.getElementById('area-resultado').classList.remove('hidden');
    } else {
        alert("Chave de acesso inválida ou não encontrada.");
    }
}

function limpar() {
    document.getElementById('chaveInput').value = "";
    document.getElementById('humanCheck').checked = false;
}
