document.addEventListener("DOMContentLoaded", function () {

    // Select the search button and search input field by getting their IDs
    const searchBtn = document.getElementById("searchBtn");
    const searchBar = document.getElementById("searchBar");

    // Add an event listener on the search button
    $(searchBtn).on('click', function() {

        // Get user search input and trim whitespace
        const input = searchBar.value.trim(); 

        // Make an AJAX GET request using the query 
        $.ajax({
            url: 'http://localhost/comp2245-assignment4/superheroes.php',  // The URL to send the request to
            type: 'GET', 
            dataType: 'html',  //response format
            data: { query: input }  // use user's search input as the query for the request
        })

        // update result of the HTML with the response 
        .done(function(html) {
            document.getElementById('result').innerHTML = html;
        })

        // display error the AJAX request fails 
        .fail(function() {
            document.getElementById('result').innerHTML = '<p>Error Getting Superhero.</p>';
         });
    });
});










