visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var ahv = v.adhocView({
    resource: "/public/viz/Hyperlinks/Table2",
    container: "#container",
    linkOptions: {
      events: {
        click: function(ev, data, defaultHandler, extendedData) {
          console.log(data, extendedData);         
          $("td, th").removeClass("my-selected");
          $("td:nth-child(" + (extendedData.column.index + 1) + ")").addClass("my-selected");
        }
      }
    }
  });
});