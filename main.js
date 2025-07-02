function escolha (tipo) {
    if (tipo === 'ataque') {
        alert("Você atingiu o inimigo, vitoria!");
    }
    else if (tipo === 'defesa') {
        alert("Você defendeu o ataque, prepare-se para outro.");
    }
    else {
        alert("Você fugiu, o inimigo riu da sua covardia.");
    }

}