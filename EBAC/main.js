$(document).ready(()=>{
    $('#carousel-images').slick({autoplay:true, arrows: false})
    // Esse bloco faz com que quando clique no menu hamburguer ele desça um suba
    $('.menu-hamburguer').click(()=>{
        $('nav').slideToggle();
    })
});
