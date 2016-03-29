visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
},function (v) {
    var report = v.report({
        //only reports made in adhoc!
        resource: "/public/Samples/Reports/02._Sales_Mix_by_Demographic_Report",
        container: "#container",
        autoresize: false,
        error: function(e) {
            alert(e);
        }
    });
    
    $("#container").resizable({
        stop: function( event, ui ) {
            report.resize();
        }
    });
});
