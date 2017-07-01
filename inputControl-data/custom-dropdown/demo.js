visualize({   
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
},function(v) {
    
    v.inputControls({
        resource: "/public/Samples/Reports/9g.CustomerDetailReport",
        success: function (controls) {
            controls.forEach(buildControl);
        },
        error: function (err) {
            alert(err);
        }
    });
    
    function buildControl(control) {

        function buildOptions(options) {
            var template = "<option>{value}</option>";
            return options.reduce(function (memo, option) {
                return memo + template.replace("{value}", option.value);
            }, "")
        }

        var template = "<label>{label}</label><select>{options}</select><br>",
            content = template.replace("{label}", control.label)
                .replace("{options}", buildOptions(control.state.options));

        $("#container").append($(content));
    }
    
});