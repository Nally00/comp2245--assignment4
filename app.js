// Run code when the page loads
document.addEventListener("DOMContentLoaded", function () {
 
    const searchBtn = document.getElementById("searchBtn");
 
    $(searchBtn).on('click', function() {
        $.ajax({url: 'http://localhost/comp2245-assignment4/superheroes.php', dataType: 'html'}) // URL of the PHP file
        .done(function(html){
            
            
            // Display the list in an alert box
            alert(html);
        })
        .fail(function() {
            // If the request fails, show an error message
            alert('Error getting superhero data.');
        });
    });
});









