visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
    var adv
    function renderView() {
      adv = v.adhocView({
        resource: "/public/viz/Adhoc/Product_Sales2",
        container: "#container",
        canvas: {
            type: "Table"
        },
        success: function() {
          //use to find available parameters / control.id
          console.log("")
          console.log("Available filters")
          console.log(adv.data().metadata.inputParameters);
        }
      });
			
      //dynamically get input control (parameter) values
      var ic = v.inputControls({
          resource: "/public/viz/Adhoc/Product_Sales2",
          success: function(data) {
          	renderInputControls(data)
          },
          error: function(e) {
              alert(e);
          }
      });
   }
    
    function renderInputControls (data) {
    	data.forEach(function(control) {
      
      	var $productCategory = $("#selected_resource");
        if (control.id == "product_category_1") {
        	var _opt = control.state.options;
          console.log(_opt);
          //console.log(_opt[0]);
          
          _opt.forEach(function(val) {
          console.log(val.value);
          var o = new Option(val.label, val.value, val.selected);
          //console.log(o);
          $productCategory.append(o);
          });
      	}
    	});
    }
    
    $("#selected_resource").change(function() {
        adv.params({
          product_category_1: [$("#selected_resource").val()]
        }).run().done(function(data) {
          console.log("success changing param");
        }).fail(function() {
          console.log("fail");
          console.log(arguments);
        })
    });
  
  $('#selected_resource').prop('disabled', false);
  //render initial view
  renderView();
});
