// document é toda a página
$(document).ready(function() {
	alert("Olá, com document.ready");
});

// outra forma de fazer a mesma função
$(function(){  // retira (document).ready
	alert("Olá. sem document.ready");
});

// outra forma de fazer
// criar a função por fora e inserir ela no codigo da chamada
function tudoPronto() {
	alert("Tudo pronto!");
};
// quando o document(toda a página) tiver pronto ele vai executar essa função
$(document).ready(tudoPronto)


// evitando conflitos com outras libs
// var $j = jQuery.noConflict();

// $j(document).ready(function() {
// 	alert("Funcionando sem conflitos....");
// });


// acessando o jQuery nativo sem atalhos
jQuery(document).ready(function() {
	alert("jQuery nativo sem atalhos!!!");
});


// aula6.Selecionando-Elementos(objetos)-do-HTML.mp4

$(function(){
	$("#botao1")
});

// aula7 alterando o valor do atributo href na tag <a>
$(function() {
	$('a').attr('href', 'google.com');
});

$(function() {
	$('img').attr('width', '30%');
	$('img').attr('border', '5');
});


// aula8
$(function() { // altera o conteúdo entre as tags <div></div>
	$('#teste').html("Texto alterado.");
});

// adicionar a classe estilo do css ao elemento html de id test
$(function() {
	// $('#test').find('button').addClass('estilo');
	$('.lista1').find('.botao').addClass('estilo');
	$('.lista1').find('.botao').html('Novo texto');
});















