// Visualize: Pagination (Range)

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#container"
    });
    
    $("#pageRange").change(function() {
        report
            .pages($(this).val())
            .run()
                .fail(function(err) { alert(err); });
    });
});
