/*
Make sure to first configure Token based Authentication on the Server:
http://community.jaspersoft.com/documentation/tibco-jasperreports-server-authentication-cookbook/v610/token-based-authentication

*/

var t = encodeURIComponent("u=Sven|r=ROLE_USER|o=organization_1|pa1=Sweden");

visualize({
    auth: {
        token: t,
        preAuth: true,
        tokenName: "pp"
    }

}, function (v) {

    v("#container").report({
        resource: "/public/Samples/Reports/States",
        error: handleError
    });

    function handleError(err) {
        alert(err.message);
    }

});