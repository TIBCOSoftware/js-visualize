visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var inputControls = v.inputControls({
        resource: "/public/viz/InputControl/Cascading_Report_2_Updated",
        container: "#containerInput",
        error: function (err) {
            console.error(err);
        }
    });
});