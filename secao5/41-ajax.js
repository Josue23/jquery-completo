$(function() {
    $('button').bind('click', function() {
        // requisita 41.1-ajax.html
        // faz a função
        // armazena o resultado no parâmetro data
        $.post("41.1-ajax.html", function(data) {
            $('.div').html(data);
        });
    })
});
