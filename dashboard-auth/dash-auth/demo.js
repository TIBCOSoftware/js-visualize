// Visualize: Login and logout/destroy session with dashboards

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/4._New_Dashboard",
        container: $("#dashboard"),
        error: function(e) {
            alert(e);
        }
    });
    
    $("button").on("click", function(e) {
        dashboard
            .destroy()
            .fail(function(e) { alert(e); })
            .done(function() { console.log("dashboard destroyed"); });
    });
});