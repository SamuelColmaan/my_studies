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
        }
    })
});
