//Advanced pagination (using changePagesState event)

visualize({
	auth: {
		name: "joeuser", 
		password: "joeuser",
	}
}, function (v) {
    var currentPage = 1,
        totalPages,
        report = v.report({
            resource: "/public/Samples/Reports/AllAccounts",
            container: "#container",
            events: {
                changePagesState: function(page) {
                    currentPage = page;
                    checkPagesConditions();
                },
                changeTotalPages: function(pages) {
                    totalPages = pages;
                    checkPagesConditions();
                }
            }
        });

    $("#currentPage").on("change", function() {
        var value = parseInt($(this).val(), 10);
        
        if (!isNaN(value) && value >= 1 && value <= totalPages) {
            currentPage = value;

            report
			    .pages(currentPage)
    			.run()
                    .done(checkPagesConditions)
		    		.fail(function(err) { alert(err); });
        }       
	});
	
    $("#previousPage").on("click", function() {
        report
			.pages(--currentPage)
			.run()
                .done(checkPagesConditions)
				.fail(function(err) { alert(err); });
	});

	$("#nextPage").on("click", function() {
        report
			.pages(++currentPage)
			.run()
                .done(checkPagesConditions)
                .fail(function(err) { alert(err); });
	});
    
    function checkPagesConditions() {
        $("#currentPage").val(currentPage);
        $("#previousPage").prop("disabled", currentPage === 1);
        $("#nextPage").prop("disabled", currentPage === totalPages);
    }
});