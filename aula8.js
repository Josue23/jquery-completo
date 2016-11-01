// // como alterar o texto da div #teste
// $(function() {
//     $('#teste').html('Texto  alterado');
// });

// // como verificar o conteúdo da div #teste
// $(function() {
//     alert($('#teste').html());
// });


$(function() {
    $('#teste').html('<button>Botão adicionado</button>');
});

$(function() {
    alert($('#teste').html());
});

// inserir uma classe css em um elemento html que não tem a classe declarada nele ainda
$(function() {
    $('#teste').find('button').addClass('estilo');
    $('#teste').find('button').html('Novo nome do meu botão');
});