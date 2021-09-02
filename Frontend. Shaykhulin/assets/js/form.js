$( document ).ready(function() {
    console.log( "ready!" );

    $( "form" ).submit(function( event ) {

        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'https://60376bfd5435040017722533.mockapi.io/form',
            data: new FormData(this),
            contentType: false,
            processData: false,
            cache: false,

            success: function(data, textStatus, xhr) {
                alert("Отправка формы - успешна! Код статуса - " + xhr.status);
                console.log(xhr.status);
            },

            error: function(jqXHR, textStatus, xhr) {
                alert("Ошибка отправки формы. Код статуса - " + xhr.status);
                console.log(xhr.status);
            }

        });

      });

});