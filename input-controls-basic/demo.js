visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
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
