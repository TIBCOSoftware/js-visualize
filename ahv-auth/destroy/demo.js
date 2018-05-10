visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var adv;

  function renderView(uri) {
    adv = v.adhocView({
      resource: "/public/viz/Adhoc/Chart3",
      container: "#container"
    });
  }

  //render initial view
  renderView();

  //destroy method
  $(".destroy").on("click", function() {
    adv.destroy().done(function() {
      console.log("Table was destroyed");
    }).fail(function() {
      console.log("Table could not be destroyed:  " + arguments);
    });
  });
});
