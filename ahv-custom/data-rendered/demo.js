visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function(v) {
	var adv
  function renderView(uri) {
    adv = v.adhocView({
      resource: "/public/Samples/Ad_Hoc_Views/04__Product_Results_by_Store_Type",
      //uncomment here and in html to render ad hoc view on page
      container: "#container",
      success: function() {
      	console.log("Table is rendered");
      },
      error: function(e) {
      	console.log(e);
    	},
    });
  }

  //render initial view
  renderView();
  
  function renderData(data, numRow) {
  	console.log("expand object to view data");
  	console.log(data);

    var numCol = 5;
    //Remove numRow limiter here if showing all rows.
    numRow = 7;
    var name = [];
    var sales = [];
    var selectedData = {};
    
    console.log("");
    console.log("data extracted with our loop");
    for (var col = 0; col < numCol; col++) {
    	for (var i = 0; i < numRow; i++) {
      
      	//show some selected data (columns) in the console
        selectedData.name = data.data[i][0];
        selectedData.unitSales = data.data[i][4];
        console.log(selectedData);
        
        //render some data on the page
        var nameID = ("name"+(i+1));
        var saleID = ("sale"+(i+1));
        document.getElementById(nameID).textContent=data.data[i][0];
        document.getElementById(saleID).textContent=data.data[i][4];
    	}
    }
	}
});

