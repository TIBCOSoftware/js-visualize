visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var inputControls = v.inputControls({
        resource: "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report",
        container: "#containerInput",
        error: function (err) {
            console.error(err);
        }
    });
});