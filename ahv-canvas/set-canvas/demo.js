var adv;
//try changing canvas type to "Line"
var visualType = "Table";
visualize({
      auth: {
        name: "joeuser",
        password: "joeuser"
      }
    }, function(v) {
      function renderView() {
        adv = v.adhocView({
          resource: "/public/viz/Adhoc/Change_Visualization2",
          container: "#container",
          canvas: {
            type: visualType
          }
        });
      }
      //render initial view
      renderView();
  });

/*
availableVisuals = ["Table", "Crosstab", "Bar", "Column", "Line", "Area", "Spline", "AreaSpline", "StackedBar", "StackedColumn", "StackedArea", "StackedPercentBar", "StackedPercentColumn", "StackedPercentArea", "Pie", "DualLevelPie", "TimeSeriesLine", "TimeSeriesArea", "TimeSeriesSpline", "TimeSeriesAreaSpline", "ColumnLine", "ColumnSpline", "StackedColumnLine", "StackedColumnSpline", "MultiAxisLine", "MultiAxisSpline", "MultiAxisColumn", "Scatter", "Bubble", "SpiderColumn", "SpiderLine", "SpiderArea", "HeatMap", "TimeSeriesHeatMap", "SemiPie", "DualMeasureTreeMap", "TreeMap", "OneParentTreeMap"];
*/