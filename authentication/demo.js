visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
}, function (v) {

    //render report from provided resource
    v("#container").report({
        resource: "/public/Samples/Reports/9.CustomerDetailReport",
        error: handleError
    });

    //show error
    function handleError(err) {
        alert(err.message);
    }

});