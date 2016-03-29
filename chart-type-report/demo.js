visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var report = v.report({
        resource: "/public/Samples/Reports/States",
        error: handleError,
        container: "#container",
        success: printComponentsNames,
    });
    
    function printComponentsNames(data){
      report.data().components.forEach(function(c){
      console.log("Component Name: " + c.name, "Component Lable: "+ c.label);
      });
      }

    //show error
    function handleError(err) {
        alert(err.message);
    };


    var component = report.data().components.filter(function (c) {
        return c.name === chartName;
    });

		    
    $( "#barChart" ).click(function() {
    	
  		report.updateComponent("salesChart", {
            chartType: "Bar"
        })
            .done(function () {
            alert("Chart type changed!");
        })
            .fail(function (err) {
            alert(err.message);
        });
		});
    
    $( "#pieChart" ).click(function() {
  		report.updateComponent("salesChart", {
            chartType: "Pie"
        })
            .done(function () {
            alert("Chart type changed!");
        })
            .fail(function (err) {
            alert(err.message);
        });
		});
   
    //console.log(report.data().components);

});
