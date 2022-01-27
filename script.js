$(document).ready(function(){
    $("#Signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true,
            },
           pwd:{
                required:true,
                minlength:6,
                alphanumeric :true,
                number:true,
                specialcharacter:true,
               
            },
            day:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters"
            }
            
        }
        
    })
   
})