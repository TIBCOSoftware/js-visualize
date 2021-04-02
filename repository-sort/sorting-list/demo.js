visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function(v) {

    var sortByTypes = ['uri', 'description', 'type', 'creationDate', 'updateDate', 'accessTime', 'popularity'];

    var sortByElement = document.getElementById('sortBy');

    sortByTypes.forEach(function(i) {
        let option = document.createElement('option');
        option.text = i;
        option.label = i;
        sortByElement.add(option)
    });
    var search = v.resourcesSearch({
        folderUri: "/public",
        types: ["reportUnit"],
        success: renderResults,
        error: displayError
    });

    document
        .getElementById('sortBy')
        .addEventListener("change", function() {
            let res = document.getElementById('sortBy').value;
            search
                .sortBy(res)
                .run()
                .done(renderResults);
        });


    // utility function
    function renderResults(results) {
        document.getElementById('sortBy').disabled = false;
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
