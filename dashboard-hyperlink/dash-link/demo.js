visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var $tooltip = $("<div></div>").css({
        "position": "absolute",
        "height": "25px",
        "background-color": "grey",
        "border": "1px solid black",
        "color": "white",
        "display": "none"
    });
    
    $("body").append($tooltip);
    
    v("#main").dashboard({
        resource: "/public/Samples/Dashboards/1._Supermart_Dashboard",
        linkOptions: {
            beforeRender: function (linkToElemPairs) {
                linkToElemPairs.forEach(showCursor);
            },
            events: {
                "mouseover": function(event, link) {
                    $tooltip.css({
                        top: "42px",
                        left: $(event.target).position().left
                    }).text(link.tooltip).show();
                },
                "mouseout": function(event, link) {
                    $tooltip.hide();
                },
                "click": function(ev, link){
                    if (link.type == "ReportExecution") {
                        var params = {};
                        
                        for (var key in link.parameters) {
                            if (key !== "_report") {
                                params[key] = Object.prototype.toString.call(link.parameters[key]) !== "[object Array]"
                                    ? [link.parameters[key]]
                                    : link.parameters[key];
                            }
                        }
                        
                        v("#drill-down").report({
                            resource: link.parameters._report,
                            params: params
                        });     
                    }
                }
            }    
        },
        error: function (err) {
            alert(err.message);
        }
    });
    
    function showCursor(pair){
           var el = pair.element;
               el.style.cursor = "pointer";
    }
});