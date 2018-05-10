visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function(v) {
  var adv = v.adhocView({
    //	container: "#container",
    resource: "/public/viz/Adhoc/Table1",
    error: function() {
      console.log(arguments);
    },
    success: function() {
    	outputValues()
      setInProgress(false);
    }
  });

  var inProgress = true,
    offset = [0, 0],
    pageSize = [400, 400];


  $("#right").click(function() {
    offset[0] += 2;

    doUpdate();
  });

  $("#left").click(function() {
    offset[0] -= 2;

    if (offset[0] < 0) {
      offset[0] = 0;
    }

    doUpdate();
  });

  $("#bottom").click(function() {
    offset[1] += 2;

    doUpdate();
  });

  $("#top").click(function() {
    offset[1] -= 2;

    if (offset[1] < 0) {
      offset[1] = 0;
    }

    doUpdate();

  });

  $("#sizeX").click(function() {
    pageSize[0] = +$("#pageSizeX").val();
    outputValues();
  })

  $("#sizeY").click(function() {
    pageSize[1] = +$("#pageSizeY").val();
    outputValues();
  })

  $(".print").click(function() {
    console.log(adv.data());
  });

  function setInProgress(inP) {
    inProgress = inP;

    if (inProgress) {
      $("#overlay").show();
    } else {
      $("#overlay").hide();
    }
  }

  function outputValues() {
    $("#container").text("Current values: offset: [" + offset.join() + "] & pageSize: [" + pageSize.join() + "]")
  }

  function doUpdate() {
    if (!inProgress) {
      setInProgress(true);
      adv._updateComponent_internal_("_dataset_internal_", {
        params: {
          offset,
          pageSize
        }
      }).always(function(data) {
      	outputValues();
        setInProgress(false);
        console.log(data);
      })
    }
  }
});