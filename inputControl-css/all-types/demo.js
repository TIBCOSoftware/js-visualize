visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var inputControls = v.inputControls({
        resource: "/public/viz/InputControl/AllAccounts",
        container: "#ic",
        error: function (err) {
            console.error(err);
        }
    });
});