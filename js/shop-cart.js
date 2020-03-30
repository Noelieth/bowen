$(function(){
    $("#form-register").validate({
        rules: {
            password : {
                required : true,
            },
            confirm_password: {
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "Escriba un username, por favor"
            },
            email: {
                required: "Escriba un email, por favor"
            },
            password: {
                required: "Escriba una contraseña, por favor"
            },
            confirm_password: {
                required: "Escriba una contraseña, por favor",
                equalTo: "Introduzca la misma contraseña, por favor"
            }
        }
    });
    //to steps forms wizard shopping cart
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        // enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : '', //add tag button to back form wizard
            next : '', //add tag button to next form wizard
            finish : '',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var username = $('#username').val();
            var email = $('#email').val();
            var cardtype = $('#card-type').val();
            var cardnumber = $('#card-number').val();
            var cvc = $('#cvc').val();
            var month = $('#month').val();
            var year = $('#year').val();

            $('#username-val').text(username);
            $('#email-val').text(email);
            $('#card-type-val').text(cardtype);
            $('#card-number-val').text(cardnumber);
            $('#cvc-val').text(cvc);
            $('#month-val').text(month);
            $('#year-val').text(year);

            $("#form-register").validate().settings.ignore = ":disabled,:hidden";
            return $("#form-register").valid();
        }
    });
});
