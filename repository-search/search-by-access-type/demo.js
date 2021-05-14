visualize({
    auth: {
      name: "joeuser",
      password: "joeuser",
         organization: "organization_1"
    }
  }, function(v) {
    const accessTypeElement = document.getElementById('accessType');

    const search = v.resourcesSearch({
      folderUri: "/public",
      types: ["reportUnit"],
      success: renderResults,
      error: displayError
    });
  
    accessTypeElement.addEventListener("change", function() {
        const resourceType = accessTypeElement.value;
        search
          .accessType(resourceType)
          .run()
          .done(renderResults);
      });
  
  
    // utility function
    function renderResults(results) {
      accessTypeElement.disabled = false
      const tbody = document.getElementById("ResultsTableContent"),
        html = [];
      let alt = false;
  
      for (let i = 0; i < results.length; i++) {
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