visualize({
    auth: {
      name: "joeuser",
      password: "joeuser",
         organization: "organization_1"
    }
  }, function(v) {
    var accessTypeElement = document.getElementById('accessType');

    var search = v.resourcesSearch({
      folderUri: "/public",
      types: ["reportUnit"],
      success: renderResults,
      error: displayError
    });
  
    accessTypeElement.addEventListener("change", function() {
        let resourceType = accessTypeElement.value;
        search
          .accessType(resourceType)
          .run()
          .done(renderResults);
      });
  
  
    // utility function
    function renderResults(results) {
      accessTypeElement.disabled = false
      var tbody = document.getElementById("ResultsTableContent"),
        alt = false,
        html = [];
  
      for (var i = 0; i < results.length; i++) {
        html.push((alt = !alt) ? '<tr>' : '<tr class="alt">');
        html.push("<td>" + results[i].label + "</td>");
        html.push("<td>" + results[i].uri + "</td>");
        html.push("<td>" + results[i].resourceType + "</td>");
        html.push("<td>" + results[i].creationDate + "</td>");
        html.push("</tr>");
      }
      tbody.innerHTML = html.join("");
    }
  
    function displayError(err) {
      alert(err.message);
    }
  });