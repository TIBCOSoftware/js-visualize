visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {

    //render report from provided resource
    v("#container").report({
        resource: "/public/Samples/Reports/States",
        error: handleError
    });

    //show error
    function handleError(err) {
        alert(err.message);
    }

});
