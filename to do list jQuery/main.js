$(document).ready(() => {
    // Função para cadastrar tarefas
    function cadastrar() {
        const tarefa = $('#txt').val().trim();

        if (tarefa) {
            $('#lista').append('<li>' + tarefa + '</li>');
            $('#txt').val('');
        } else {
            Toastify({
                text: "Insira a tarefa",
                duration: 2000, 
                gravity: "bottom", 
                position: "right", 
                backgroundColor: "#000000",
                stopOnFocus: true
            }).showToast();
        }
    }

    // Adicionar o evento de clique ao botão para cadastrar tarefas
    $('#btn').click(function() {
        cadastrar();
    });

    // Adicionar o evento de clique aos itens da lista para marcar como feito
    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('feito');
    });

    // Adicionar evento para pressionar Enter no input
    $('#txt').keypress((e) => {
        if (e.which === 13) {
            cadastrar();
            e.preventDefault();
        }
    });
});
