visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  v.adhocView({
    resource: "/public/Samples/Ad_Hoc_Views/04__Product_Results_by_Store_Type",
    container: "#container",
    params: {
      sales__store__store_contact__store_country_1: ["Canada"]
    }
  });
});
