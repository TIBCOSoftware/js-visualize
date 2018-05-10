var firstView = "/public/viz/Adhoc/Store_Sales1";
var secondView = "/public/viz/Adhoc/Store_Sales2";

visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var first = v.adhocView({
    resource: firstView,
    container: "#firstContainer",
    success: function() {
      console.log("First container view rendered");
    },
    error: function(e) {
      console.log(e);
    }
  });
  var second = v.adhocView({
    resource: secondView,
    container: "#secondContainer",
    canvas: { 
    	type: "Crosstab" 
    },
    error: function(e) {
      console.log(e);
    }
  });
});