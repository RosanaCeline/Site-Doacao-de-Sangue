const btnAtivos = document.getElementById('btn-ativos');

btnAtivos.addEventListener('click', function () {

    const box03 = document.querySelector('.campanhas-container #box03');
    const box04 = document.querySelector('.campanhas-container #box04');

    if (box03.style.display === 'none' || box03.style.display === '') {
        box03.style.display = 'block';
        box04.style.display = 'block';
        btnAtivos.textContent = 'FECHAR CAMPANHAS ▲';
    } else {
        box03.style.display = 'none';
        box04.style.display = 'none';
        btnAtivos.textContent = 'VER MAIS CAMPANHAS ▼';
    }
});

const btnPassados = document.getElementById('btn-passados');

btnPassados.addEventListener('click', function () {

    const box05 = document.querySelector('.campanhas-container #box05');
    const box06 = document.querySelector('.campanhas-container #box06');

    if (box05.style.display === 'none' || box06.style.display === '') {
        box05.style.display = 'block';
        box06.style.display = 'block';
        btnPassados.textContent = 'FECHAR CAMPANHAS ▲';
    } else {
        box05.style.display = 'none';
        box06.style.display = 'none';
        btnPassados.textContent = 'VER MAIS CAMPANHAS ▼';
    }
});