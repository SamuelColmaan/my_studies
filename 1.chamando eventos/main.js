/*Esse document.ready faz com que o site seja inteiramente carregado e o conteúdo possa rodar*/
$(document).ready(()=>{
    $('#texto').text('Ícone colégio e curso teste')
    $('#bloco').click(()=>{
        $('#texto').text('Clicado')
    })
    $('#bloco').mouseenter(()=>{
        $('#texto').text('Mouse entrou')
    })
    $('#bloco').mouseleave(()=>{
        $('#texto').text('Mouse saiu')
    })
    $('#bloco').mousemove(()=>{
        $('#texto').text('Mouse está movendo')
    })
})