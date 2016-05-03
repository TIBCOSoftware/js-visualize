// Plain text authentication with report rendering from a list

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization:"organization_1",
        timezone: "Europe/Helsinki"
    }
}, function (v){
    
    //enable report chooser
    $(':disabled').prop('disabled', false);
    
    function createReport(uri) {
        v("#container").report({
            resource: uri,
            error: function (err) {
                alert(err.message);
            }
        });
    };
    
    createReport($("#selected_resource").val());
    
    $("#selected_resource").change(function () {
        $("#container").html("");
        createReport($("#selected_resource").val());
    });
            
}, function(err){
    alert(err.message);
});