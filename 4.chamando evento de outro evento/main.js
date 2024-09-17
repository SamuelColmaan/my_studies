$(document).ready(()=>{
    $('#bloco').on({
        click: (()=>$('#texto').text('Voce clicou')),
        mouseenter: (()=>$('#texto').text('O mouse entrou')),
        mouseleave: (()=>$('#texto').text('O mouse saiu')),
        dblclick: (()=>$('#texto').text('Voce clicou duas vezes')),
        mousemove: (()=>$('#texto').text('You are moving')),
    });

    $('#bloco2').dblclick(()=>{
        $('#bloco').trigger('dblclick')
        })

    $('#bloco2').trigger('dblclick') /* Isso faz com que um evento seja chamado sem que eu tenha de fato eu tenha feito algo para ativá-lo. Neste caso o evento mouseenter */
})