visualize({   
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
},function(v) {
    
    v.inputControls({
        resource: "/public/Samples/Reports/04._Product_Results_by_Store_Type_Report",
        success: function (controls) {
            controls.forEach(buildControl);
            //Remove custom loading indicator once data has successfully loaded
            document.getElementById("loader").style.display = "none";
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

        var template = "<br>&nbsp;<label>{label}</label>&nbsp;<select>{options}</select><br>",
            content = template.replace("{label}", control.label)
                .replace("{options}", buildOptions(control.state.options));

        $("#container").append($(content));
    }
});