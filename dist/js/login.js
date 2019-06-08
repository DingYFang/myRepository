define(["jquery"], function($){
	function log(){
		$("#log-btn").click(function(){
			$.ajax({
				type: "post",
				url: "../login.php",
				data: {
					username: $("#tel").val(),
					password: $("#pwd").val()
				},
				dataType: "json",
				success: function(obj){
					// console.log(obj);
					if(obj.code == 2){
						$("#logpwd-alt").html("登陆成功");
						$("#logpwd-alt").css("color", "green");
						console.log("111");
						setTimeout(function(){
						location.replace("../html/index.html")

						},1000);
				
					}else{
						$("#logpwd-alt").css("color", "red");
						$("#logpwd-alt").html(obj.message);
					}
				},
				error: function(msg){
					alert("请求错误" + msg);
				}
			})	
		})
	}
	return{
		log: log
	}
})