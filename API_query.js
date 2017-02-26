$("#searchButton").on("click", function () {
    var text = document.getElementById('searchText').value;


    var html = text;

    // For each article found
    html += '<div class="col-xs-12">' + text + '</div>';
    document.getElementById('articlesFound').innerHTML = html;

});