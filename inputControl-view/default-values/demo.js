visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var inputControls = v.inputControls({
        resource: "/public/viz/Adhoc/Ad_Hoc_View_filters_with_default_Report",
        container: "#containerInput",
        error: function (err) {
            console.error(err);
        }
    });
});