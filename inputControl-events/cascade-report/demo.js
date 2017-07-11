visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    
    var report = v.report({
        resource: "/public/Samples/Reports/16g.InteractiveSalesReport",
        container: "#report"
    });
    
    v.inputControls({
        container: "#ic",
        resource: "/public/Samples/Reports/16g.InteractiveSalesReport",
        error: function (err) {
            alert(err);
        },
        events: {
            change: function (params) {
                console.log(params);
                report
                    .params(params)
                    .run();
            }
        }
    });
});