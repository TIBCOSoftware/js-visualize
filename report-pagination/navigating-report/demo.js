visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {

    var report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#container",
        pages: {
            anchor: "Newton"
        },
        events: {
            changePagesState: function(currentPage) {
                console.log("changeCurrentPage", currentPage);
            }
        },
        error: function(e) {
            alert(e);
        }
    });
    
    $("#showCurrentLocation").on("click", function() {
        alert(JSON.stringify(report.pages()));
    });
    
    $("#anchor").on("change", function() {
        report
            .pages({ anchor: $(this).val() })
            .run()
            .fail(function(e) { console.log(report.pages()); alert(e); });
    });
    
    $("#page").on("change", function() {
        report
            .pages({ pages: $(this).val() })
            .run()
            .fail(function(e) { console.log(report.pages()); alert(e); });
    });
    
    $("#range").on("click", function() {
        report.properties({
            pages: {
                pages: "20-30",
                anchor: "Everett"
            }
        }).run().fail(function(e) { console.log(report.pages());  alert(e); });
    });
});

