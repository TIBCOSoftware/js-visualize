visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  v.adhocView({
    resource: "/public/viz/Adhoc/Table1",
    container: "#container",
    linkOptions: {
      events: {
        click: function (ev, data) {
          $(".display").html("<span>Clicked on: <b>" + ev.currentTarget.innerText + "</b></span>");
          console.log('The extra data:', data);
        }
      }
    }
  });
});
