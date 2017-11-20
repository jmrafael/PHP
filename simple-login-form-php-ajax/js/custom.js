function lograr(){
    $("#login_button").click(function(){
        var user = $("#username").val();
        var pass = $("#password").val();

        var dados = "user=" + user + "&pass=" + pass;

        $.ajax({
            method: "post",
            url:"login.php?",
            data: dados,
            success: function(dados){
                $("#error_login").html(dados);
            }
        });
    }   );
}