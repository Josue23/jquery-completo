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
    });
});
