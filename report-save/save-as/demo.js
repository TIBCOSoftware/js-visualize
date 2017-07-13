visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {

    //render report from provided resource
    var report = v.report({
        resource: $("#selected_resource").val(),
        error: handleError,
        container: "#container",
        runImmediately: false
    });
    report.run();
    $("#save").click(function(){
        var folder = $("#folder").val(),
            label = $("#label").val(),
            description = $("#description").val();
        if(folder){
            var options = {};
            options.folderUri = folder;
            if(label){
                options.label = label;
            }
            if(description){
                options.description = description;
            }
            options.overwrite = $("#overwrite").prop("checked");
            report.save(options);
        } else {
            report.save();
        }
    });

    $("#selected_resource").change(function () {
        //clean container
        $("#container").html("");
        //render report from another resource
        v("#container").report({
            resource: $("#selected_resource").val(),
            error:handleError
        });
    });
    
     //enable report chooser
    $(':disabled').prop('disabled', false);
    
    //show error
    function handleError(err){
        alert(err.message);
    }
});