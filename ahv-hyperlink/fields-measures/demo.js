visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var ahv = v.adhocView({
    resource: "/public/viz/Adhoc/Chart6",
    container: "#container",
    error: function(e) {
      console.log(e);
    },
    //Use linkOptions to pass fields and measures 
    linkOptions: {
    	events: {
        click: function(ev, data) {
        	//view data for available fields and measures
        	console.log(data);
          $("#field1").html("<span>Field1: <b>" + data.product_subcategory + "</b></span>") 
          $("#field2").html("<span>Field2: <b>" + data.the_date + "</b></span>") 
        	$("#measure").html("<span>Measure: <b>" + data.Measures[0] + "</b></span>")
        }
      }
    }
  });
});