// Visualize: Login/Logout with hooks

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1",
        loginFn: function (properties, request) {
            //use whatever you want to establish authentication 
            //be aware of same domain policy, 'request' works only with JRS instance
            alert("Send custom login request. To 'https://infra-platforms-phase2-11723-rsarda.pfa.jaspersoft.com/jasperserver-pro/rest_v2/login'");
            return request({
                url: "https://infra-platforms-phase2-11723-rsarda.pfa.jaspersoft.com/jasperserver-pro/rest_v2/login?j_username=" + properties.name + "&j_password=" + properties.password + "&orgId=" + properties.organization
            });
        },
        logoutFn: function (properties, request) {
            //use whatever you want to destroy session
            //be aware of same domain policy, 'request' works only with  JRS instance
            alert("Send custom logout request. To 'https://infra-platforms-phase2-11723-rsarda.pfa.jaspersoft.com/jasperserver-pro/customLogout'");
            return request({
                url: "https://infra-platforms-phase2-11723-rsarda.pfa.jaspersoft.com/jasperserver-pro/logout.html"
            });
        }
    }
}, function (v) {

    function createReport(uri) {
        v("#container").report({
            resource: uri,
            error: function (err) {
                alert(err.message);
            }
        });
    };

    //enable report chooser
    $(':disabled').prop('disabled', false);
    createReport($("#selected_resource").val());

    $("#selected_resource").change(function () {
        $("#container").html("");
        createReport($("#selected_resource").val());
    });

    //destroy session
    $("#logout").click(function () {
        v.logout().done(function () {
            alert("Destroy session");
        });
    });

});
