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
    success: function () {
      console.log('Ad Hoc View has been rendered. The success() callback arguments are:', arguments);
    },
    error: function (error) {
      console.log('ERROR: The error() callback arguments are:', arguments);
    }
  });
});
