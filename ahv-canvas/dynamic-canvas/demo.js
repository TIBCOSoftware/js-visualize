var adv;
visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  function renderView(chartType) {
    adv = v.adhocView({
      resource: "/public/viz/Adhoc/Change_Visualization1",
      container: "#container",
      canvas: {
          type: "Table"
      },
      success: function() {
        console.log(arguments);
      },
      error: function() {
        console.log(arguments);
      }
    });
  }

  //render initial view
  renderView();
	
  $("#viz_type_list_2").html(createOptionsForVizTypes());

	$("#viz_type_list_2").change(function() {
  	adv.canvas({
      	type: $("#viz_type_list_2").val()
    }).run().fail(handleError);
  });

  //show error
  function handleError(err) {
    console.log(err.message);
  }
});

function createOptionsForVizTypes() {
	var types = ["Table", "Crosstab", "Bar", "Column", "Line", "Area", "Spline", "AreaSpline", "StackedBar", "StackedColumn", "StackedArea", "StackedPercentBar", "StackedPercentColumn", "StackedPercentArea", "Pie", "DualLevelPie", "TimeSeriesLine", "TimeSeriesArea", "TimeSeriesSpline", "TimeSeriesAreaSpline", "ColumnLine", "ColumnSpline", "StackedColumnLine", "StackedColumnSpline", "MultiAxisLine", "MultiAxisSpline", "MultiAxisColumn", "Scatter", "Bubble", "SpiderColumn", "SpiderLine", "SpiderArea", "HeatMap", "TimeSeriesHeatMap", "SemiPie", "DualMeasureTreeMap", "TreeMap", "OneParentTreeMap"];
  var result = "";
	types.forEach(function(type) {
  		result += "<option value='" + type + "'>" + type + "</option>";
  });
  return result;
}
