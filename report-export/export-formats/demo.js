visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    //add custom export format
    //(should throw a proper error)
    var reportExports =  v.report
                    .exportFormats
                    .concat(["json"]);
        $select = buildControl("Export to: ",reportExports),
        $button = $("#button"),
        report = v.report({
            resource: "/public/Samples/Reports/AllAccounts",
            container: "#container",

            success: function () {
                button.removeAttribute("disabled");
            },

            error: function (error) {
                console.log(error);
            }
        });

    $button.click(function () {
        
        console.log($select.val());
        
        report.export({
            //export options here        
            outputFormat: $select.val(),
            //exports all pages if not specified
            //pages: "1-2"
        }, function (link) {
           var url = link.href ? link.href : link;
           window.location.href = url;
        }, function (error) {
            console.log(error);
        });
    });

    function buildControl(name, options) {

        function buildOptions(options) {
            var template = "<option>{value}</option>";
            return options.reduce(function (memo, option) {
                return memo + template.replace("{value}", option);
            }, "")
        }

        var template = "<label>{label}</label><select>{options}</select><br>",
            content = template.replace("{label}", name)
                .replace("{options}", buildOptions(options));

        var $control = $(content);
        $control.insertBefore($("#button"));
        //return select
        return $($control[1]);
    }
});