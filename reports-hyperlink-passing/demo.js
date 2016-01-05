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
                        v("#drill-down").report({
                            resource: link.parameters._report,
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
