$(document).ready(()=>{
    $('#bloco').on({
        click: (()=>$('#texto').text('Voce clicou')),
        mouseenter: (()=>$('#texto').text('O mouse entrou')),
        mouseleave: (()=>$('#texto').text('O mouse saiu')),
        dblclick: (()=>$('#texto').text('Voce clicou duas vezes')),
        mousemove: (()=>$('#texto').text('You are moving'))
    });
})