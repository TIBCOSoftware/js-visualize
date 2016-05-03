// Visualize: Track report completed status

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var report = v.report({ 
        //provide report with many pages in
        resource: "/public/Samples/Reports/RevenueDetailReport", 
        container: "#container", 
        events: {
            reportCompleted: function(status) {
                alert("Report status: "+ status+ "!");
            }
        },
        error: function(error) {
            alert(error);  
        },
    });
});