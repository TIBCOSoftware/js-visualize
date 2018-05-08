visualize({
  auth: {
    name: "jasperadmin",
    password: "jasperadmin",
    organization: "organization_1"
  }
}, function(v) {
	var adv
  function renderView(uri) {
    adv = v.adhocView({
      resource: "/public/viz/Adhoc/Table1",
      container: "#container",
      error: function(e) {
      	console.log(e);
    	}
    });
  }
  //render initial view
  renderView();
});