$(document).ready(()=>{
    $('#nome').keyup(()=>{
        $('#texto').text($('#nome').val())
    })
})