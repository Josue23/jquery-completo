// // trocando o botão da id teste por texto com a função html()
// $(function() {
//     $('#teste').html('Novo texto');
// });

// $(function() {
//     $('#teste').html("Este é <strong>negrito</strong>");
// });

// // fazendo strip no texto com a função text()
// $(function() {
//     $('#teste').text("Este é <strong>negrito</strong>");
// });

// // exibe o id da div
// $(function() {
//     if ($('#teste').length > 0) {
//         alert('O id da div é ' +  $('#teste').attr('id'));
//     }
// });

// // altera o id da div
// $(function() {
//     $('#teste').attr("id", "novoid");
// });

// // exibe o id da div
// $(function() {
//     if ($('#novoid').length > 0) {
//         alert('O id da div é ' +  $('#novoid').attr('id'));
//     }
// });


$(function() {
    // $('img').attr('width', '100');
    $('#teste').find('img').width(300);                   // altera a largura da imagem com .width
    $('#teste').find('img').attr('border', '10');        // altera a largura da borda da imagem
    $('#teste').find('img').attr('height', '100');      // altera a altura da imagem com .attr
});


$(function() {
    alert('Campo input é  ' + $('input'));
});
// adiciona um valor ao campo input
$(function() {
    $('input').val('Teste');     // adiciona o valor Teste ao campo inout
});
$(function() {
    $('input').attr('val', 'Mais outro texto de input');     // outra forma de adiciona o valor Teste ao campo inout
});

// adiciona uma coisa depois de um elemento
$(function() {
    $('input').before("<div>Texto antes do input</div>")
});

// adiciona uma coisa antes de um elemento
$(function() {
    $('input').after("<div>Texto depois do input</div>")
});

// adiciona um li no final da lista
$(function() {
    $('ul').append('<li>Item 5</li>');
});
// .append adiciona no final
// .html substitui tudo

$(function() {
    $('#teste').append('Texto qualquer');
});

// adiciona um li no começo da lista
$(function() {
    $('ul').prepend('<li>Item 0</li>');
});

$(function() {
    $('#teste').prepend('Texto antes da div');
})


$(function() {
    $('input').before('Nome');
})

$(function() {
    $('input').after('(Obrigatório)');
})

/*
adicionar fora do elemento:
- antes do elemento: .before();
- depois do elemento: .after();

adicionar dentro do elemento:
- antes do primeiro item do elemento: .prepend();
- depois do último item do elemento: .append();
*/

$(function() {
    $('#teste').html('Limpa tudo.......');
});


// remover o campo de input
$(function() {
    $('input').remove();
});






















