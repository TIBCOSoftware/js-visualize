visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  function renderInputControls(controls) {
    controls.forEach(function (control) {
      const $productCategory = $("#selected_resource");
      if (control.id === "product_category_1") {
        const options = control.state.options;
        options.forEach(function (val) {
          const option = new Option(val.label, val.value, val.selected);
          $productCategory.append(option);
        });
      }
    });
  }

  $("#selected_resource").change(function () {
    adv.params({
      product_category_1: [$("#selected_resource").val()]
    }).run().done(function () {
      console.log("successfully changed param");
    }).fail(function () {
      console.log('failed to change params, here are details:', arguments);
    })
  });

  $('#selected_resource').prop('disabled', false);

  const adv = v.adhocView({
    resource: "/public/viz/Adhoc/Product_Sales2",
    container: "#container",
    canvas: {
      type: "Table"
    },
    success: function () {
      console.log("Available filters:", adv.data().metadata.inputParameters)
    }
  });

  v.inputControls({
    resource: "/public/viz/Adhoc/Product_Sales2",
    success: function (data) {
      renderInputControls(data)
    },
    error: function (error) {
      console.log('failed to run input control, here are details:', error);
    }
  });
});
