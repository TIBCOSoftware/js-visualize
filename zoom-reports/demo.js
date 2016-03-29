visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    
    var report,
        zoom = 1,
        plus = document.getElementById("plus"),
        minus = document.getElementById("minus"),
        width = document.getElementById("width"),
        height = document.getElementById("height"),
        page = document.getElementById("page");
    
    report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#container",
        success: function () {
            plus.removeAttribute("disabled");
            minus.removeAttribute("disabled");
            width.removeAttribute("disabled");
            height.removeAttribute("disabled");
            page.removeAttribute("disabled");
        },
        error: function (err) {
            alert(err.message);
        }
    });
    
    plus.onclick = function () {
        report
            .scale(zoom += 0.1)
            .render();
    }
    
    minus.onclick = function () {
        report
            .scale((zoom -= 0.1) > 0 ? zoom : zoom = 0.1)
            .render();
    }
    
    width.onclick = function () {
        report
            .scale("width")
            .render();
    }
    
    height.onclick = function () {
        report
            .scale("height")
            .render();
    }
    
    page.onclick = function () {
        report
            .scale("container")
            .render();
    }
});
