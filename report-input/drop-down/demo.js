// Change report paramater with custom drop-down

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    
    var report = v.report({
        resource: "/public/Samples/Reports/07g.RevenueDetailReport",
        params: {
            "ProductFamily": ["Drink"]
        },
        container: "#container",
        error: showError
    });
    
    $('#repo-param').on('change', function(){
        report
            .params({
           		"ProductFamily": [$(this).val()] 
        	})
            .run();
    });


    function showError(err) {
        alert(err);
    }
});
