visualize({
  auth: {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1"
  }
}, function (v) {
  v.adhocView({
    resource: "/public/viz/Adhoc/Table1",
    container: "#container",
    linkOptions: {
      beforeRender: function (cells) {
        cells.forEach(function (cell) {

          console.log('Cell:', cell);

          cell.element.style.textDecoration = "underline";
          cell.element.style.cursor = "pointer";
          cell.element.style.fontStyle = "italic";
          cell.element.style.color = "#7C3414";
        });
      }
    }
  });
});
