visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var dashboard = v.dashboard({
    resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
    container: "#dashboard",
    error: handleError,
    success: function() {
      $("#apply").prop("disabled", false);
      buildParamsInput();
    },
    events: {
      canUndo: function(val) {
        $("#undo").prop("disabled", !val);
        $("#undoAll").prop("disabled", !val);
      },
      canRedo: function(val) {
        $("#redo").prop("disabled", !val);
      }
    }
  })

  $("#undo").on("click", function() {
    dashboard.undoParams().fail(handleError);
  });

  $("#undoAll").on("click", function() {
    dashboard.undoAllParams().fail(handleError);
  });

  $("#redo").on("click", function() {
    dashboard.redoParams().fail(handleError);
  });


  $("#apply").on("click", function() {
    var params = {};

    $("[data-paramId]").each(function() {
      params[$(this).attr("data-paramId")] = $(this).val().indexOf("[") > -1 ? JSON.parse($(this).val()) : [$(this).val()];
    });

    $("#apply").prop("disabled", true);

    dashboard.params(params).run()
      .fail(handleError)
      .always(function() {
        $("#apply").prop("disabled", false);
        fillWithValues();
      });
  });

  function buildParamsInput() {
    var params = dashboard.data().parameters;

    for (var i = params.length - 1; i >= 0; i--) {
      var $el = $("<tr><td>" + params[i].id + "</td><td><input type='text' data-paramId='" + params[i].id + "'/></td></tr>");

      $("#params").append($el);

      $el.find("input").val(params[i].value);
    }
  }

  function handleError(e) {
    alert(e);
  }
});