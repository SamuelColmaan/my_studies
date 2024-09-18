$(document).ready(()=>{
    $('#carousel-images').slick({autoplay:true, arrows: false})
    // Esse bloco faz com que quando clique no menu hamburguer ele desça um suba
    $('.menu-hamburguer').click(()=>{
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem:{
                required: true
            },
            veiculoInteresse:{
                required: false
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'por favor, insira o número de telefone'
        },
        submitHandler: (form)=>{
            console.log(form)
        },
        invalidHandler: (evento, validador)=>{
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
        }
    })
});
