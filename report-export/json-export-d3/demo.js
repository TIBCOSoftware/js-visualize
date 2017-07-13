visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
        report = v.report({
            resource: "/public/viz/04._Product_Results_by_Store_Type_Report",

            success: exportJson,

            error: errorHandler
        });
});

function exportJson () {
    report.export({        
        outputFormat: "json",
        //pages: "1-5"
    }, function (link, request) {
        request({
            dataType: "json" 
        })
        .done(parseData)
        .fail(errorHandler);
        
    }, errorHandler);
    //Remove custom loading indicator once data has successfully loaded
    document.getElementById("loader").style.display = "none";
    //Add indicator for D3 build
    document.getElementById("build").style.display = "inline";
}

function parseData(data) {
    //console.log("result: ", data)

    drawD3Chart(data);        
}



function drawD3Chart (data) {
    var width = 1100,
        height = 700;
    var svg = dimple.newSvg("#container", width, height);
    
    var myChart = new dimple.chart(svg, data);
        myChart.setBounds(75, 30, width-90, height-70);
    
        myChart.addMeasureAxis("x", "store_cost");
    
        var yAxis = myChart.addCategoryAxis("y", "store_sales")
    
        var zAxis = myChart.addMeasureAxis("z", "unit_sales");
        zAxis.overrideMax = 400;
    
        myChart.addSeries("recyclable", dimple.plot.bubble);

        myChart.addLegend(180, 10, 360, 20, "right");
        myChart.draw();
    
        cleanAxis(yAxis, 30)
    
}

function errorHandler(error) {
    console.log(error);
}

function cleanYAxis(axis) {
    
}

 var cleanAxis = function (axis, oneInEvery) {
     // This should have been called after draw, otherwise do nothing
     if (axis.shapes.length > 0) {
         // Leave the first label
         var del = false;
         // If there is an interval set
         if (oneInEvery > 1) {
             // Operate on all the axis text
             axis.shapes.selectAll("text")
             .each(function (d) {
                 // Remove all but the nth label
                 if (del % oneInEvery !== 0) {
                     this.remove();
                     // Find the corresponding tick line and remove
                     axis.shapes.selectAll("line").each(function (d2) {
                         if (d === d2) {
                             this.remove();
                         }
                     });
                 }
                 del += 1;
             });
         }
     }
 };
