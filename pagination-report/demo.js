visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var report = v.report({
        //only reports made in adhoc!
        resource: "/public/Samples/Reports/9.CustomerDetailReport",
        container: "#container",
        autoresize: false,
        error: function (e) {
            alert(e);
        }
    });

    window.previousPage = function () {
        var currentPage = report.pages() || 1;

        report.pages(--currentPage)
            .run()
            .fail(function (err) {
            alert(err);
        });
    };

window.nextPage = function () {
    var currentPage = report.pages() || 1;

    report.pages(++currentPage)
        .run()
        .fail(function (err) {
        alert(err);
    });
};
});
