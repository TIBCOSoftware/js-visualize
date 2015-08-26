visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
}, function (v) {

    //render report from provided resource
    v("#container").dashboard({
        resource: "/public/Samples/Dashboards/1._Supermart_Dashboard",
        params: {
        Store_Country: ["Mexico"]
    },
        error: handleError
    });

    //show error
    function handleError(err) {
        alert(err.message);
    }

});