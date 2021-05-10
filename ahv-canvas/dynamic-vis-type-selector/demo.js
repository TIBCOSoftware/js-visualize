visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function(v) {
  const $visTypeSelector = $("#visTypeSelector");

  const adv = v.adhocView({
    resource: "/public/viz/Adhoc/Change_Visualization1",
    container: "#container",
    canvas: {
      type: "Table"
    },
    success: function(data) {
      const types = data.metadata.availableVisualizationTypes;
      let html = "";
      types.forEach(function(type) {
        html += "<option value='" + type + "'>" + type + "</option>";
      });
      $visTypeSelector.html(html);
    }
  });

  $visTypeSelector.change(function() {
    adv.canvas({
      type: $visTypeSelector.val()
    }).run();
  });
});
