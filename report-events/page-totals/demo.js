// Visualize: Listen for change page totals

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var report = v.report({ 
        resource: "/public/Samples/Reports/AllAccounts", 
        container: "#container", 
        error: function(error) {
            alert(error);  
        },
        events: {
            changeTotalPages: function(totalPages) {
                alert("Total Pages:" + totalPages);
            }
        }
    });
});