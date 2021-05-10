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

  $(".refresh").on("click", function () {
    adv.refresh().done(function () {
      console.log("Table was refreshed");
    }).fail(function () {
      console.log("Table could not be refreshed:", arguments);
    });
  });
});
