// Visualize: UI for Login/Logout

visualize(
    function(v){
        $("#selected_resource").change(function () {
            $("#container").html("");
            createReport($("#selected_resource").val(), v);
        });
        $("#login").click(function(){
            v.login(getAuthData()).done(function(){
                createReport($("#selected_resource").val(),v);
                showMessage(".success");
            }).fail(function(){showMessage(".error");});
        });
        $("#logout").click(function(){
            v.logout().done(function(){showMessage(".logout");});
        });
        $(':disabled').prop('disabled', false);
    }
);

//create and render report to specific container
function createReport(uri, v) {
    v("#container").report({
        resource: uri,
        error: function (err) {
            alert(err.message);
            }
     });
};

function showMessage(selector){
    $(".message").hide();
    $(selector).show();
};

function getAuthData(){
    return {name: $("#j_username").val(),
            password: $("#j_password").val(),
            organization:$("#orgId").val(),
            locale:$("#userLocale").val(),
            timezone:$("#userTimezone").val()
           }
};