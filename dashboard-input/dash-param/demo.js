function handleError(e) {
    alert(e);
}

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var initialParams = {};
    
    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
        container: "#dashboard",
        error: handleError,
        success: function() {
            $("button").prop("disabled", false);
            buildParamsInput();
        }
    });
    
    function buildParamsInput() {
        var params = dashboard.data().parameters;
        
        for (var i = params.length-1; i >= 0; i--) {
            var $el = $("<div>" + params[i].id + ": <input type='text' data-paramId='" + params[i].id + "'/></div>");
            
            $("body").prepend($el);
            
            $el.find("input").val(initialParams[params[i].id]);
        }
    }
    
    $("button").on("click", function() {
        var params = {};
        
        $("[data-paramId]").each(function() {
            params[$(this).attr("data-paramId")] = $(this).val().indexOf("[") > -1 ? JSON.parse($(this).val()) : [$(this).val()];    
        });
        
        $("button").prop("disabled", true);
        
        dashboard.params(params).run()
            .fail(handleError)
            .always(function() { $("button").prop("disabled", false); });
    });
});