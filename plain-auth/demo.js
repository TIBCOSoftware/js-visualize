/*
There are many ways to authenticate - one of them is plain text but you can also do tokens, no authentication (i.e. you are already authenticated), 

*/

visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1",
        timezone: "Europe/Dublin"
    }
}, function (v) {
    alert("Congratulations, you've authenticated!");
}, function () {
    alert("Authentication error.");
});