$(document).ready(function() {

    // all custom jQuery will go here
    $(function(){
        $.get("https://localhost:44325/api/movie/", function(data){    

            data.map(function(el){

                
                $("#tbody").append(`
                <tr>
                <td><p>${el.title}</p></td> 
                <td><p>${el.director}</p></td>
                <td><p>${el.genre}</p></td>
                /* <td>Add Image Button</td>
                <td>Edit Image Button</td>
                <td>View Image Button</td> */

                </tr>`);

            })
        })      
    });

  
    
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

});



