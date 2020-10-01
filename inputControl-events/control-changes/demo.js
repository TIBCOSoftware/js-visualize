visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    v.inputControls({
        container: "#container",
        resource: "/public/Samples/Reports/06g.ProfitDetailReport",
        error: function (err) {
            alert(err);
        },
        events: {
            change : function(params) {
                $("#hint").show(); 
                $("#output").text(params['ProductFamily'].join(', '));
            }
        }
    });
});