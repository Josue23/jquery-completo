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






















