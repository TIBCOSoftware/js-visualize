// Dynamically load input control values from the JasperReport Server for a selected report

reportUri = "/public/Samples/Reports/Cascading_Report_2_Updated";

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }

}, function (v) {
    var inputControls = v.inputControls({
        resource: reportUri,
        success: renderInputControls
    });

    var report = v.report({
        resource: reportUri,
        container: "#container"
    });

    $("#productFamilySelector").on("change", function () {
        report.params({
            "Product_Family": [$(this).val()]
        }).run();
    });
});

function renderInputControls(data) {
    var productFamilyInputControl = _.findWhere(data, {
        id: "Product_Family"
    });
    var select = $("#productFamilySelector");
    _.each(productFamilyInputControl.state.options, function (option) {
        select.append("<option " + (option.selected ? "selected" : "") + " value='" + option.value + "'>" + option.label + "</option>");
    });
}

