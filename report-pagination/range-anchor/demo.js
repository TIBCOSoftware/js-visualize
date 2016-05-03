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
            pages: "26-31",
            anchor: "Newton"
        },
        error: function(e) {
            alert(e);
        }
    });
});
