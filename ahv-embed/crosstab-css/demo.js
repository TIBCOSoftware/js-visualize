visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function(v) {
  v("#container").adhocView({
    resource: "/public/viz/Adhoc/Crosstab3",
    error: function(e) {
      	console.log(e);
    }
  });
});