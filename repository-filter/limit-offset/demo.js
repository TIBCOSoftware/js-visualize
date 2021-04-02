visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function(v) {

    var search = v.resourcesSearch({
        folderUri: "/public",
        types: ["reportUnit"],
        success: renderResults,
        error: displayError,
        limit:10,
        offset:0
    });


    document
        .getElementById('mybtn')
        .addEventListener("click", function() {
            let getLimit = document.getElementById('repoLimit').value ? document.getElementById('repoLimit').value : 5;
            let getOffset= document.getElementById('repoOffset').value ? document.getElementById('repoOffset').value : 0;
            search
                .types(['reportUnit'])
                .limit(parseInt(getLimit,10))
                .offset(parseInt(getOffset,10))
                .run()
                .done(renderResults);
        });


    // utility function
    function renderResults(results) {
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
