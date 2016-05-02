// Visualize: Pagination (Next/Previous)

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    
    var report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#container"
    });
    
    $("#previousPage").click(function() {
        var currentPage = report.pages() || 1;
        
        report
            .pages(--currentPage)
            .run()
                .fail(function(err) { alert(err); });
    });
    
    $("#nextPage").click(function() {
        var currentPage = report.pages() || 1;
        
        report
            .pages(++currentPage)
            .run()
                .fail(function(err) { alert(err); });
    });
});
