visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  const adv = v.adhocView({
    resource: "/public/viz/Adhoc/Chart3",
    container: "#container"
  });

  $(".remove").on("click", function () {
    adv.destroy().done(function () {
      console.log("Table was removed");
    }).fail(function () {
      console.log("Table could not be removed:", arguments);
    });
  });
});
