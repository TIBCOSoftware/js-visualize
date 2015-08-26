visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
}, function (v) {

    v("#container").report({
        resource: "/public/Samples/Reports/ProfitDetailReport",
        error: handleError,
         params: { 
                "ProductFamily": ["Food", "Drink"]
                }
    });

    function handleError(err) {
        alert(err.message);
    }

});