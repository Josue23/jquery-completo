$(document).ready(function() {
	alert("Olá, com document.ready");
});

// outra forma de fazer a mesma função
$(function(){
	alert("Olá. sem document.ready");
});

// outra forma de fazer
// criar a função por fora e inserir ela no codigo da chamada
function tudoPronto() {
	alert("Tudo pronto!");
};
// quando o document(toda a página) tiver pronto ele vai executar essa função
$(document).ready(tudoPronto)


$(function(){
	$("#botao1")
});






















