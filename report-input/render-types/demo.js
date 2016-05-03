// Visualize: Discover available types, formats etc.

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    
    buildControl("Chart types", v.report.chart.types); 
    
    buildControl("Resources types", v.resourcesSearch.types); 
    
    buildControl("Resources search sort types", v.resourcesSearch.sortBy); 
    
    buildControl("Report export formats", v.report.exportFormats);
    
    buildControl("Report table column types", v.report.table.column.types);
   
});

function buildControl(name, options) {

        function buildOptions(options) {
            var template = "<option>{value}</option>";
            return options.reduce(function (memo, option) {
                return memo + template.replace("{value}", option);
            }, "")
        }
    
    console.log(options);
    
    if (!options.length){
        console.log(options);
    }

        var template = "<label>{label}</label><select>{options}</select><br>",
            content = template.replace("{label}", name)
                .replace("{options}", buildOptions(options));

        $("#container").append($(content));
    }
    