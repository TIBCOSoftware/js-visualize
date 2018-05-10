visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var adv
  function renderView() {
    adv = v.adhocView({
      resource: "/public/viz/Adhoc/Product_Sales2",
      container: "#container",
      canvas: {
          type: "Table"
      },
      success: function() {
      	//use to find available params
     		console.log(adv.data().metadata.inputParameters);
      }
    });

    $("#selected_resource").change(function() {
      adv.params({
        product_category_1: [$("#selected_resource").val()]
      }).run().done(function(data) {
        console.log("success");
      }).fail(function() {
        console.log("fail");
        console.log(arguments);
      })
    });

  }
  $('#selected_resource').prop('disabled', false);
  //render initial view
  renderView();
});