$(function() {
    $('#form').bind('submit', function(e) {
        // não executa o envio direto do formulário
        // o form só deve ser enviado via ajax
        e.preventDefault();

        // quando eu der submit no form
        // ele vai dar um serialize no form
        // salva na variável txt
        // exibe no console.log
        var txt = $(this).serialize();
        console.log(txt);

        // enviar informações para o ajax
        // 1º parâmetro: um json
        $.ajax({
            type:'POST',
            url:'44-ajax.php',
            data:txt,

            // função que vou criar para receber as infos que serão retornadas a partir do 44-ajax.php
            // o retorno da função será usado como parâmetro
            success:function(resultado) {
                $('.div').html("Resultado: " + resultado);
            },
            error:function() {
                alert('Ocorreu um erro!');
            }
        });
    });
});
