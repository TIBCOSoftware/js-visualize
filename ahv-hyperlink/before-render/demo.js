visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var ahv = v.adhocView({
    resource: "/public/viz/Adhoc/Table1",
    container: "#container",
    success: {
    	
    },
    linkOptions: {
      beforeRender: function(elemToLinkPairs) {
        elemToLinkPairs.forEach(function(pair) {
          pair.element.style.textDecoration = "underline";
          pair.element.style.cursor = "pointer";
          pair.element.style.fontStyle = "italic";
          pair.element.style.color = "#7C3414"
          console.log(pair.element)
          console.log(elemToLinkPairs);
        });
      }
    }
  });
});