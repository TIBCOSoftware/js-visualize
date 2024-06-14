visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  const adv = v.adhocView({
    resource: "/public/viz/Adhoc/Product_Sales2",
    container: "#container",
    canvas: {
      type: "Table"
    },
    success: function () {
      console.log('inputParameters:', adv.data().metadata.inputParameters);
    }
  });

  $("#selected_resource").change(function () {
    const newValue = $("#selected_resource").val();
    adv.params({
      product_category_1: [newValue]
    }).run().done(function () {
      console.log("successfully changed parameter");
    }).fail(function () {
      console.log('failed to change params, here are details:', arguments);
    })
  });

  $('#selected_resource').prop('disabled', false);
});
