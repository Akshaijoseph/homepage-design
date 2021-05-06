$(document).ready(function(){
    $('#submitform').validate({
        rules:{
            fname:{
                required:true,
                minlength:4

            }
            
        }
    })
}) 