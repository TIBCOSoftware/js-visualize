visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function(v) {
    var sortByElement = document.getElementById('sortBy');
    var search = v.resourcesSearch({
        folderUri: "/public",
        types: ["reportUnit"],
        success: renderResults,
        error: displayError
    });

    sortByElement.addEventListener("change", function() {
        let columnName = sortByElement.value;
        search
            .sortBy(columnName)
            .run()
            .done(renderResults);
    });

    // utility function
    function renderResults(results) {
        sortByElement.disabled = false;
        var tbody = document.getElementById("ResultsTableContent"),
            alt = false,
            html = [];

        for (var i = 0; i < results.length; i++) {
            html.push((alt = !alt) ? '<tr>' : '<tr class="alt">');
            html.push("<td>" + results[i].label + "</td>");
            html.push("<td>" + results[i].uri + "</td>");
            html.push("<td>" + results[i].resourceType + "</td>");
            html.push("<td>" + results[i].creationDate + "</td>");
            html.push("</tr>");
        }
        tbody.innerHTML = html.join("");
    }

    function displayError(err) {
        alert(err.message);
    }

});
