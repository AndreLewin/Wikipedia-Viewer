$("#searchButton").on("click", function () {

    // Get the input text and build the URL
    var text = $("#searchText").val();

    var theUrl =
        'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext&format=json&gsrlimit=20&generator=search&origin=*&gsrsearch='
        + text ;

    // Send the GET request (CORS)
    $.getJSON(theUrl, function (data) {
        displayData(data);
    });

    // Display the data
    function displayData(data) {
        var pages;
        var html = '';

        // Check if there is a positive return
        if (data.hasOwnProperty("query")){
            pages = data.query.pages;
            html = buildHTML(pages);
        } else {
            html = "No page found";
        }

        document.getElementById('articlesFound').innerHTML = html;

    }

    // Build the html from the pages received
    function buildHTML(pages){
        console.log(pages);

        for (page in pages) {
            alert(page.pageid); // TODO : How to not get "undefined"?
        }

        // Get the link (use the pageid)
        // Get the title
        // Check if the extract exists, and if so, add it
        // html += '<div class="col-xs-12">' + data[part] + '</div>';

        return "A page was found";
    }


});