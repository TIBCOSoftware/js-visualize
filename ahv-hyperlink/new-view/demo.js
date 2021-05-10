visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {

  v.adhocView({
    resource: "/public/viz/Adhoc/Store_Sales3",
    container: "#firstContainer",
    linkOptions: {
      events: {
        click: function (ev, data) {
          const measureSelected = data.Measures;
          const categorySelected = data.product_category;
          $("#field").html("<span>Field: <b>" + data.product_category + "</b></span>")

          drillDown(measureSelected, categorySelected)
        }
      }
    }
  });

  function drillDown(measure, category) {
    let title, resource;

    if (measure[0] === "store_cost") {
      title = 'Store Cost';
      resource = "/public/viz/Adhoc/Store_Cost4";
    } else {
      title = 'Store Sales';
      resource = "/public/viz/Adhoc/Store_Sales4";
    }

    $("#measure").html("<span>Measure: <b>" + title + "</b></span>");

    v.adhocView({
      resource: resource,
      container: "#secondContainer",
      params: {
        product_category_1: [category]
      }
    });
  }
});
