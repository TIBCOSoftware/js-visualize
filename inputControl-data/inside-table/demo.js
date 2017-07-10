visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {

  //use input controls as service to get data from the server

  v.inputControls({
    resource: "/public/Samples/Reports/9g.CustomerDetailReport",
    success: function(controls) {
      controls.forEach(buildTable);
      //Remove custom loading indicator once data has successfully loaded
      document.getElementById("loader").style.display = "none";
    },
    error: function(err) {
      alert(err);
    }
  });

  function buildTable(control) {

    function buildRows(options) {
      var template = "<tr><td>{value}</td></tr>";
      return options.reduce(function(memo, option) {
        return memo + template.replace("{value}", option.value);
      }, "")
    }

    var template = "<table class='table'>"+
                      "<thead><tr><td>{label}</td></tr></thead>" +
                      "<tbody{rows}</tbody>" + 
                      "</table>";
      content = template.replace("{label}", control.label)
      .replace("{rows}", buildRows(control.state.options));

    $("#container").append($(content));
  }
});