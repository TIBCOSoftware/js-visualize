visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
	var adv
  function renderView() {
    adv = v.adhocView({
      resource: "/public/viz/Adhoc/Product_Sales1",
      container: "#container",
      success: function() {
      	//use to find available params (filters) for ad hoc view
     		console.log(adv.data().metadata.inputParameters);
      },
      //control ad hoc view parameters
      params: {
        product_category_1: ["Hot Beverages", "Bread"]
      },
      error: function() {
        alert("error");
        console.log(arguments);
      }
    });
  }
  //render initial view
  renderView();
});