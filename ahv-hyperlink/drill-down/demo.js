var firstView = "/public/viz/Adhoc/Store_Sales3";

visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  function renderView() {
  	$("#backButton").hide();
    first = v.adhocView({
      resource: firstView,
      container: "#firstContainer",
      linkOptions: {
        events: {
          click: function(ev, data, defaultHandler, extendedData) {
            console.log(data);
            var measureSelected = data.Measures;
            var categorySelected = data.product_category;
            $("#field").html("<span>Field: <b>" + data.product_category + "</b></span>") 

            updateView(measureSelected, categorySelected)
          }
        }
      },
      success: function() {
        console.log("Available filters")
        console.log(first.data().metadata.inputParameters);
      },
      error: function(e) {
        console.log(e);
      }
  	});
  }
  
  renderView()
  
  function updateView(measure, category) {
  	var showCostView = "/public/viz/Adhoc/Store_Cost4";
    var showSalesView = "/public/viz/Adhoc/Store_Sales4";
    
    $("#backButton").show();
    if (measure[0] === "store_cost") {
    
    	$("#measure").html("<span>Measure: <b>Store Cost</b></span>")
    	var costView = v.adhocView({
    		resource: showCostView,
    		container: "#firstContainer",
        params: {
        	product_category_1: [category]
      	},
    		error: function(e) {
      		console.log(e);
    		}
  		});
      
    } else {
    	$("#measure").html("<span>Measure: <b>Store Sales</b></span>")
    	var salesView = v.adhocView({
    		resource: showSalesView,
    		container: "#firstContainer",
        params: {
        	product_category_1: [category]
      	},
    		error: function(e) {
      		console.log(e);
    		}
  		});
		}
	}
  
  function goBack() {
  	$("input[name='goBack']").click(doIt);
    
  	function doIt() {
      renderView()
  	} 
	} 
  
  goBack()
});