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
                /* <td>ADD IMAGE BUTTON</td>
                <td>EDIT IMAGE BUTTON</td>
                <td>VIEW IMAGE BUTTON</td> */

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
    
         //I got this from W3schools.com
         $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#tbody tr").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
    })

});
/* 
    $("#search_button").click(function(){
        var movies = data.filter(function(movies){
            return true;
        }); 
        
        var searchBy = $("#searchBy").val();
        var searchName = $("#search_text").val();
        var setData = $("#my_form");
        setData.html("");

        let foundMovies = movies.filter(function(movie){
            if(movie[searchBy]){
                return true;
            }
        })
        var id = 1;
        $.ajax({
            url: 'https://localhost:44325/api/movie/' + id,
            dataType: 'json',
            type: 'get',
           
           
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        })
 */
       






