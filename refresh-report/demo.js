visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
},function (v) {
   var alwasyRefresh = false;    

    var report = v.report({
        //skip repport runnig during initialization
        runImmediately: !alwasyRefresh,
        resource: "/public/Samples/Reports/States",
        container: "#container",
     });
    
    if (alwasyRefresh){
        report.refresh();
    }
    
     window.refreshReport = function reportExport() {   
        report
            .refresh()
            .done(function(){console.log("Report Refreshed!");})
            .fail(function(){alert("Report Refresh Failed!");});
    }
   
});
