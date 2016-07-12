visualize({
    auth: {
        name: "joeadmin",
        password: "joeadmin",
        organization: "organization_1"
    }
}, function (v) {

    //render report from provided resource
    v("#container").dashboard({
        resource: "/public/Samples/Dashboards/5.1_Custom_DarkTheme1_Dashboard",
        error: handleError
    });

    //show error
    function handleError(err) {
        alert(err.message);
    }

});
