visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {

    //render report from provided resource
    v("#container").dashboard({
        resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
        error: handleError
    });

    //show error
    function handleError(err) {
        alert(err.message);
    }

});
