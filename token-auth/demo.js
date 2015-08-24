var t = encodeURIComponent("u=Sven|r=ROLE_USER|o=organization_1|pa1=Sweden");

visualize({
    auth: {
        token: t,
        preAuth: true,
        tokenName: "pp"
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