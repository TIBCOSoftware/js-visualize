visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
      
    v("#main").report({
        resource: "/public/viz/Hyperlinks/Drill_Reports_with_Controls/main_report",
        linkOptions: {
            beforeRender: function (linkToElemPairs) {
                linkToElemPairs.forEach(showCursor);
            },
            events: {
                "click": function(ev, link){
                   if (link.type == "ReportExecution"){
                        v("#drill-down").report({
                            resource: link.parameters._report,
                            params: {
                                city: [link.parameters.city],
                                country: link.parameters.country,
                                state: link.parameters.state
                            }, 
                        });     
                    }
                     console.log(link);
                }
            }    
        },
        error: function (err) {
            alert(err.message);
        }
    });
    
    function showCursor(pair){
           var el = pair.element;
               el.style.cursor = "pointer";
    }
    
});