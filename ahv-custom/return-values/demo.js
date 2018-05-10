visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function(v) {
  var adv,
    text = document.getElementById("text"),
    apply = document.getElementById("apply"),
    res = document.getElementById("res");

  adv = v.adhocView({
    resource: "/public/viz/Adhoc/Chart2",
    container: "#container",
    success: function() {
      //use to find available params
     	console.log(adv.data().metadata.inputParameters);
    },
    error: function() {
      alert("error");
      console.log(arguments);
    }
  });

  apply.onclick = function() {
    adv.params({
      sales_fact_ALL__store_sales_2013_1: [parseInt(text.value)]
    }).run().done(function(data) {
      res.innerHTML = "[" + data._dataset_internal_.counts.join() + "]";
    }).fail(function() {
      console.log("fail");
      console.log(arguments);
    })
  }
});