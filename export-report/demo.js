visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var reportExports = v.report.exportFormats;
    console.log(reportExports); //print export formats

    report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#container",
        error: function (error) {
            console.log(error);
        }
    });


    window.reportExport = function reportExport() {
        report.export({
            outputFormat: "pdf"
        })
            .done(function (link) {
            window.open(link.href); // open new window to download report
        })
            .fail(function (err) {
            alert(err.message);
        });
    }


});
