var reportResource = "/public/Samples/Reports/States";

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    v("#main").report({
        resource: reportResource,
        linkOptions: {
            events: {
                "click": function (ev, link) {
                    if (link.type == "ReportExecution") {
                    		var urlToOpen = "https://en.wikipedia.org/wiki/" + 													link.parameters.store_state
                    		window.open(urlToOpen, '_blank');
                        v("#drill-down").report({
                            resource: "/public/Samples/Reports/Cities",
                            params: {
                                state: [link.parameters.store_state]
                            },
                        });
                        console.log(link.parameters.store_state);

                    }
                }
            }
        },
        error: function (err) {
            alert(err.message);
        }
    });


});
