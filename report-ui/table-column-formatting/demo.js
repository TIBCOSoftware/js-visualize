visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    //discover name through JRXML (field name by default)
    var salesColumnName = "_detail_level__sales_fact_ALL.sales_fact_ALL__unit_sales_2013",
        report = v.report({
            resource: "/public/Samples/Reports/04._Product_Results_by_Store_Type_Report",
            container: "#container",
            error: showError
        });
    
    $("#changeConditions").on("click", function() {
            report.updateComponent(salesColumnName, {
                conditions: [
                    {
                        operator: "greater",
                        value: 3,
                        backgroundColor: null,
                        font: {
                            color: "FF0000",
                            bold: true,
                            underline: true,
                            italic: true
                        }
                    },
                    {
                        operator: "between",
                        value: [5, 9],
                        backgroundColor: "00FF00",
                        font: {
                            color: "0000FF"
                        }
                    }
                ]
            })
            .then(printConditions)
            .fail(showError);
    });
    
    function printConditions(component){
        console.log("Conditions: "+ component.conditions);
    }
    
    function showError(err) {
           alert(err);
    }
});