visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  v.adhocView({
    resource: "/public/viz/Adhoc/Store_Sales1",
    container: "#firstContainer"
  });

  v.adhocView({
    resource: "/public/viz/Adhoc/Store_Sales2",
    container: "#secondContainer"
  });
});
