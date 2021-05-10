visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  v.adhocView({
    resource: "/public/viz/Adhoc/Chart6",
    container: "#container",
    linkOptions: {
      events: {
        click: function (ev, data) {
          console.log('The extra data:', data);
          $("#field1").html("<span>Field1: <b>" + data.product_subcategory + "</b></span>")
          $("#field2").html("<span>Field2: <b>" + data.the_date + "</b></span>")
          $("#measure").html("<span>Measure: <b>" + data.Measures[0] + "</b></span>")
        }
      }
    }
  });
});
