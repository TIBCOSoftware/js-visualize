visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    
    var _report="/public/Samples/Reports/ProfitDetailReport";
  
    var controls= v.inputControls({
        container: "#filters",
        resource: _report,
        error: function (err) {
            console.log(err);
        },
        events: {
            change : function(state, validationResult) {
              if (validationResult) {
                console.log(validationResult)
              } else {
                console.log(state)
              }
            }
        }
    });
});