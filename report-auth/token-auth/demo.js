// Visualize: login/logout with SSO sample

visualize({
    auth : { 
        tokenName: "myCustomTokenName",
        token : "ST-40-CZeUUnGPxEqgScNbxh9l-sso-cas.example.com"
    } 
}, function (v){
    
    alert("Authentification with SSO token complete");
    
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