// Visualize: Destroy Session

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1",
        timezone: "Europe/Helsinki"
    }
}, function (v) {

    function createReport(uri) {
        v("#container").report({
            resource: uri,
            error: function (err) {
                alert(err.message);
            }
        });
    };
    
     //enable report chooser
    $(':disabled').prop('disabled', false);
    createReport($("#selected_resource").val());

    $("#selected_resource").change(function () {
        $("#container").html("");
        createReport($("#selected_resource").val());
    });

    //destroy session
    $("#logout").click(function () {
        v.logout().done(function () {
            alert("Destroy session");
        });
    });

});