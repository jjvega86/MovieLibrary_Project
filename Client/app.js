$(function(){

    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);

        data.map(function(el){
            $("#Movies").append(`<div> Movie Title: ${el.title} </div>
            <div> Movie Director: ${el.director}</div>
            <br>`);
        })
    })
})

(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);