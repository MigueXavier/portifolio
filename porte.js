document.addEventListener("DOMContentLoaded", function() {
    const imgs = document.getElementById("img");
    const img = document.querySelectorAll("#img img");
    let idx = 0;

    function carrossel() {
        idx++;
        if (idx > img.length - 1) {
            idx = 0;
        }
        imgs.style.transform = `translateX(${-idx * 100}%)`; // Mover as imagens em porcentagem
    }

    setInterval(carrossel, 1800);


    let botao = document.getElementById('botao');

    botao.addEventListener('change', () => {
        document.body.classList.toggle('dark', botao.checked);
    });

});

