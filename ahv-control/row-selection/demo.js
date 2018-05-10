visualize({
  auth: {
    name: "joeuser",
    password: "joeuser"
  }
}, function(v) {
  var ahv = v.adhocView({
    resource: "/public/viz/Hyperlinks/Table",
    container: "#container",
    success: function() {
      console.log("rendered", _);
    },
    error: function(e) {
      console.log(e);
    },
    linkOptions: {
      events: {
        click: function(ev, data, defaultHandler, extendedData) {
          console.log(data, extendedData);
          
          $("tr").removeClass("my-selected");
          $("tbody tr:nth-child(" + (extendedData.row.relativeIndex + 1) + ")").addClass("my-selected");
          
          $("#details").html(renderDetails(extendedData));
        }
      }
    }
  });
});

function renderDetails(data) {
	return _.template(`
  	<table border="1" cellspacing="0">
    	<thead>
      	<tr>
        	<% row.cells && row.cells.forEach(function (cell) { %>
        	<th><%= cell.label || cell.name %></th>
          <% }) %>
        </tr>
      </thead>
      <tbody>
      	<tr>
        	<% row.cells && row.cells.forEach(function (cell) { %>
        	<td><%= cell.value %></td>
          <% }) %>
        </tr>
      </tbody>
    </table>
  `)(data);  
}
