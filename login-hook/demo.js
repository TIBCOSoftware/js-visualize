// Visualize: Login/Logout with hooks

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1",
        loginFn: function (properties, request) {
            //use whatever you want to establish authentication 
            //be aware of same domain policy, 'request' works only with JRS instance
            alert("Send custom login request. To 'http://localhost:8080?/customLogin'");
            return request({
                url: "http://localhost:8080/customLogin?username=" + properties.name + "&password=" + properties.password
            });
        },
        logoutFn: function (properties, request) {
            //use whatever you want to destroy session
            //be aware of same domain policy, 'request' works only with  JRS instance
            alert("Send custom logout request. To 'http://localhost:8080/customLogout'");
            return request({
                url: "http://localhost:8080/customLogout"
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