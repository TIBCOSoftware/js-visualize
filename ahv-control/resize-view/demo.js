visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"

  }
}, function(v) {
  var adv = v.adhocView({
    resource: "/public/viz/Adhoc/Change_Visualization2",
    container: "#container",
  });


  //render initial view
  setInitialType();

  function setInitialType() {
    adv.canvas({
      type: $("#selected_resource").val()
    }).run().fail(handleError);
  }

  $("#selected_resource").change(function() {
    adv.canvas({
      type: $("#selected_resource").val()
    }).run().fail(handleError);
  });

  function handleError(err) {
    console.log(err);
  }

  $('#selected_resource').prop('disabled', false);

  $("#container").resizable({
    resize: function(event, ui) {
      adv.resize();
    }
  });
});