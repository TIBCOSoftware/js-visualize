visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function(v) {
  v.adhocView({
    resource: "/public/viz/Adhoc/Change_Visualization2",
    container: "#container",
    canvas: {
      type: "Table"
    }
  });
});
