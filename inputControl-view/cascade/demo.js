visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    v.inputControls({
        container: "#container",
        resource: "/public/viz/InputControl/Cascading_Report_2_Updated",
        error: function (err) {
            alert(err);
        },
        events: {
            change : function(params) { 
                console.log(params);
            }
        }
    });
});