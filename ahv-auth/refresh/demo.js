visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
	var adv;
  function renderView() {
    adv = v.adhocView({
      resource: "/public/viz/Adhoc/Chart3",
      container: "#container"
    });
  }

  //render initial view
  renderView();

  //refresh method
  $(".refresh").on("click", function () {
    adv.refresh().done(function () {
      console.log("Table was refreshed");
    }).fail(function () {
      console.log("Table could not be refreshed:  " + arguments);
    });
  });
});