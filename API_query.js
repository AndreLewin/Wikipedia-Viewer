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
        var html = "";
        
        for (var page in pages) {
            
            var title = '';
            var link = "http://en.wikipedia.org/?curid=";
            
            if (pages.hasOwnProperty(page)) {
                title = pages[page].title;
                link += pages[page].pageid;
            }
            
            html +=
                '<div class="col-xs-12">' +
                    '<a href="' + link + '">' + title + '</a>' +
                '</div>';
        }

        return html;
    }


});