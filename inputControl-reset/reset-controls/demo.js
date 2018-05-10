var inputControls="";

visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
   inputControls= v.inputControls({
    resource: "/public/Samples/Reports/ProfitDetailReport",
    container: "#containerInput",
    error: function(err) {
      console.error(err);
    },
    success: function(data) {
      console.log(data)
    },
    events: {
    change: function(data) {
    	console.log("change: ", data)
    }
	}
});

$("#validate").click(
	function(){
  	inputControls.validate();
	}
);

$("#getParams").click(
	function(){
  	console.log(inputControls.params());
	}
);
$("#run").click(
	function(){
		console.log(inputControls.data().parameters)
  	inputControls.run(null, function(e) {
    console.log(e)
  	});
	}
);

$("#reset").click(
  function(){
    console.log("Params before reset: ", inputControls.params())
      inputControls.reset(function() {
        console.log("Params after: ", inputControls.params())
      }, function(e) {
        console.log(e)
      });
    }
  );
});