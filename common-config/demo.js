// Visualize.js: Share common config between Visualize.js calls, loading multiple reports

visualize.config({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
});


visualize(function (v) {
    v("#container1").report({
        resource: "/public/Samples/Reports/06g.ProfitDetailReport",
        error: function (err) {
            alert(err.message);
        }
    });
});

visualize(function (v) {
    v("#container2").report({
        resource: "/public/Samples/Reports/State_Performance",
        error: function (err) {
            alert(err.message);
        }
    });
});