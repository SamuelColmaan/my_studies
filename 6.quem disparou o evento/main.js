/* 
$(document).ready(()=>{
    $(document).click((event)=>{
        $('#resultado').text('Objeto clicado: ' + event.target.tagName Aqui estou utilizando tagName, mas poderia utilizar o id, por exemplo)
        if (event.target.id == 'resultado'){
            $('#resultado2').text('Você clicou no resultado')
        }
    })
})
*/

$(document).ready(()=>{
    $(document).on({
        click: (event)=>{$('#resultado').text(event.type + ":" + event.which)},
        keydown: (event)=> ($('#resultado').text(event.type + ': ' + event.which))
    })
    
})