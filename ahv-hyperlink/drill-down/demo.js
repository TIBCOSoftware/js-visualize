visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  const $backButton = $("#backButton");
  $backButton.hide();
  $backButton.click(function () {
    renderInitialView();
  });

  function renderInitialView() {
    v.adhocView({
      resource: "/public/viz/Adhoc/Store_Sales3",
      container: "#container",
      linkOptions: {
        events: {
          click: function (ev, data) {
            const measureSelected = data.Measures;
            const categorySelected = data.product_category;

            $("#field").html("<span>Field: <b>" + data.product_category + "</b></span>");

            drillDown(measureSelected, categorySelected);
          }
        }
      }
    });
  }

  function drillDown(measure, category) {
    let title, resource;
    $backButton.show();

    if (measure[0] === "store_cost") {
      title = "Store Cost";
      resource = "/public/viz/Adhoc/Store_Cost4";
    } else {
      title = "Store Sales";
      resource = "/public/viz/Adhoc/Store_Sales4";
    }

    $("#measure").html("<span>Measure: <b>" + title + "</b></span>");

    v.adhocView({
      resource: resource,
      container: "#container",
      params: {
        product_category_1: [category]
      }
    });
  }

  renderInitialView();
});
