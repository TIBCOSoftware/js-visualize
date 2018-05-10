var perShipped = [];
var perCost = [];

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
      resource: "/public/viz/Adhoc/Chart5",
      //uncomment container to render ad hoc view
      //container: "#container",
      params: {
      	//*****TRY: Change "Gerolli" to "Golden" to update D3 visualization
        inv__product__brand_name_1: ["Gerolli"]
      },
      success: function() {
      	console.log(adv.data());
        
        perShipped = adv.data()._dataset_internal_.data[0][0];
        perCost = adv.data()._dataset_internal_.data[1][0];
        
        buildD3Visualization(perShipped, perCost);
       
      },
      error: function(e) {
      	console.log(e);
    	},
    }); 
  }
  //render initial view
  renderView();
  
  function buildD3Visualization(perShipped, perCost) {
  
  //console.log(perShipped);
	//console.log(Number((perShipped * 100).toFixed(1)));

//custom D3 code for liquidFillGauge
var configLarge = liquidFillGaugeDefaultSettings();
    configLarge.circleColor = "#D4AB6A";
    configLarge.textColor = "#422703";
    configLarge.waveTextColor = "#724c10";
    configLarge.waveColor = "#bc8f56";
    configLarge.circleThickness = 0.07;
    configLarge.circleFillGap = 0.16;
    configLarge.textVertPosition = 0.5;
    configLarge.waveAnimateTime = 3000;
    configLarge.waveHeight = 0.09;
    configLarge.waveCount = 1;
        
    var configSmall = liquidFillGaugeDefaultSettings();    
    configSmall.circleColor = "#178BCA";
    configSmall.textColor = "#045681";
    configSmall.waveTextColor = "#A4DBf8"; 
    configSmall.waveColor = "#178BCA";
    configSmall.circleThickness = 0.05; 
    configSmall.circleFillGap = 0.17;  
    configSmall.textVertPosition = 0.5; 
    configSmall.waveAnimateTime = 3000;  
    configSmall.waveHeight = 0.08;
    configSmall.waveCount = 1;
        
    var gauge1 = loadLiquidFillGauge("fillgauge1", Number((perShipped * 100).toFixed(1)), configLarge);   
    var gauge2 = loadLiquidFillGauge("fillgauge2", Number((perCost * 100).toFixed(1)), configSmall);    
  } 
});
