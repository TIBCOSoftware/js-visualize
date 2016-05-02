visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {

    var report = v.report({
        resource: "/public/Samples/Reports/17._Report_Workbook",
        container: "#container",
        pages: {
            anchor: "Cliffside"
        },
        error: function(e) {
            alert(e);
        }
    });
    
    $("#anchor").on("change", function() {
        report
            .pages({ anchor: $(this).val() })
            .run()
            .fail(function(e) { alert(e); });
    });
});
