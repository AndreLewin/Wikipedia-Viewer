$("#searchButton").on("click", function () {

    // Get the input text and build the URL
    var text = $("#searchText").val();

    var theUrl =
        'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=20&generator=search&origin=*&gsrsearch='
        + text ;

    // Send the GET request (CORS)
    $.getJSON(theUrl, function (data) {
        displayData(data);
    });

    // Display the data
    function displayData(data) {

        var html = '';

        // TODO For each article found
        // html += '<div class="col-xs-12">' + data[part] + '</div>';
        document.getElementById('articlesFound').innerHTML = html;

    }
});