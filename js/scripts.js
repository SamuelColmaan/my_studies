// Espera o DOM estar totalmente carregado antes de executar o código
$(document).ready(function() {
    // Criação do círculo A
    let containerA = document.getElementById('circleA'); // Obtém o elemento HTML que será usado como container
    let circleA = new ProgressBar.Circle(containerA, { // Cria uma nova instância do círculo usando a biblioteca ProgressBar.js
        color: '#64DAF9', // Cor inicial do círculo
        strokeWidth: 8, // Largura da borda do círculo
        duration: 1400, // Duração da animação em milissegundos
        from: { color: '#AAA' }, // Cor inicial quando a animação começa
        to: { color: '#65DAF9' }, // Cor final quando a animação termina
        step: function (state, circle) { // Função chamada em cada passo da animação
            circle.path.setAttribute('stroke', state.color); // Define a cor da borda do círculo
            let value = Math.round(circle.value() * 60); // Calcula o valor para exibir (60 é o total que será representado)
            circle.setText(value); // Atualiza o texto no círculo
        }
    });

    // Criação do círculo B
    let containerB = document.getElementById('circleB'); // Obtém o container do círculo B
    let circleB = new ProgressBar.Circle(containerB, { // Cria uma nova instância do círculo B
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600, // Duração da animação em milissegundos
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color); // Define a cor da borda do círculo
            let value = Math.round(circle.value() * 254); // Calcula o valor para exibir (254 é o total que será representado)
            circle.setText(value); // Atualiza o texto no círculo
        }
    });

    // Criação do círculo C
    let containerC = document.getElementById('circleC'); // Obtém o container do círculo C
    let circleC = new ProgressBar.Circle(containerC, { // Cria uma nova instância do círculo C
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000, // Duração da animação em milissegundos
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color); // Define a cor da borda do círculo
            let value = Math.round(circle.value() * 32); // Calcula o valor para exibir (32 é o total que será representado)
            circle.setText(value); // Atualiza o texto no círculo
        }
    });

    // Criação do círculo D (Novo círculo)
    let containerD = document.getElementById('circleD'); // Obtém o container do círculo D
    let circleD = new ProgressBar.Circle(containerD, { // Cria uma nova instância do círculo D
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200, // Duração da animação em milissegundos
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color); // Define a cor da borda do círculo
            let value = Math.round(circle.value() * 5245); // Calcula o valor para exibir (5245 é o total que será representado)
            circle.setText(value); // Atualiza o texto no círculo
        }
    });

    // Inicia a animação dos círculos quando o usuário chega na seção
    let dataAreaOffset = $('#data-area').offset(); // Obtém a posição da seção 'data-area'
    let stop = 0; // Variável para controlar se a animação já foi iniciada

    $(window).scroll(function(e){ // Evento de rolagem da janela
        let scroll = $(window).scrollTop(); // Obtém a posição atual de rolagem
        // Verifica se a rolagem ultrapassou a posição da seção e se a animação não foi iniciada ainda
        if(scroll > (dataAreaOffset.top - 600) && stop == 0) {
            // Inicia a animação dos círculos
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1; // Marca que a animação foi iniciada
        }
    });

    // Efeito parallax
    setTimeout(function(){ // Define um atraso antes de executar a função
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'}); // Aplica o efeito parallax à seção com a imagem especificada
    }, 250); // O efeito é aplicado após 250 milissegundos
});
