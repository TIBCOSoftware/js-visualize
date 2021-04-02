visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function(v) {

    var resourceTypes = ['folder',
        'dataType',
        'jdbcDataSource',
        'awsDataSource',
        'jndiJdbcDataSource',
        'virtualDataSource',
        'customDataSource',
        'beanDataSource',
        'xmlaConnection',
        'listOfValues',
        'file',
        'reportOptions',
        'dashboard',
        'adhocDataView',
        'query',
        'olapUnit',
        'reportUnit',
        'domainTopic',
        'semanticLayerDataSource',
        'secureMondrianConnection',
        'mondrianXmlaDefinition',
        'mondrianConnection',
        'inputControl'
    ];

    var sortBySelectElement = document.getElementById('sortBy');

    var resourceTypeElement = document.getElementById('resourceType');

    resourceTypes.forEach(function(i) {
        let option = document.createElement('option');
        option.text = i;
        option.label = i;
        resourceTypeElement.add(option)
    });

    var search = v.resourcesSearch({
        folderUri: "/public",
        types: ["reportUnit"],
        success: renderResults,
        error: displayError
    });

    document
        .getElementById('resourceType')
        .addEventListener("change", function() {
            let res = document.getElementById('resourceType').value;
            search
                .types([res])
                .run()
                .done(renderResults);
        });

    // utility function
    function renderResults(results) {
        document.getElementById('resourceType').disabled = false;
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
