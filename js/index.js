let total = 0;

    // Seleciona todos os botões de adicionar item
    const addItemButtons = document.querySelectorAll('.add-item');

    // Adiciona um evento de clique a cada botão
    addItemButtons.forEach(button => {
    button.addEventListener('click', function () {
        const price = parseFloat(button.getAttribute('data-price'));
        total += price;
        document.getElementById('cartTotal').innerText = total.toFixed(2);
    });
});


