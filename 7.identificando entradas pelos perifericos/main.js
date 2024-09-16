$(document).ready(()=>{
    $(document).on({
        click:(event)=>{
            $('#resultado').text(event.type + ": " + event.which)},
        keydown:(event)=>{ 
            $('#resultado').text(event.type + ": " + event.which);
            if(event.which == 13){
                alert('enter presionado')
            }}
        })     
})

