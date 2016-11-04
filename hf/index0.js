$(document).ready(function() {
    $('#move_up').click(function() {
        $('#change_me').animate({top:50}, 2000);
    }); // end move_up

    $('#move_down').click(function() {
        $('#change_me').animate({top:500}, 2000);
    }); // end move_down

    $('#color').click(function() {
        $('#change_me').css('color', 'purple');
    }); // end color

    $('#disappear').click(function() {
        $('#change_me').toggle('slow');
    }); // end disappear

    $('.container').click(function() {
        $('.direita').slideUp('slow');
    }); // end slideUp

    $('.container').click(function() {
        $('.esquerda').slideUp('slow');
        // $('.direita').slideUp('slow');
    }); // end slideUp
});












