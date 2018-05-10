visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var ahv = v.adhocView({
    resource: "/public/viz/Adhoc/Table1",
    container: "#container",
    //Use linkOptions to pass selected value
    linkOptions: {
      events: {
        click: function(ev, data) {
         $(".selected").html("<span>Clicked: <b>" + ev.currentTarget.innerText + "</b></span>")
          console.log(data);
        }
      }
    }
  });
});