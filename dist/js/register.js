
define(["jquery"], function($){
	function reg(){
		$(function(){

			// 通过ajax传给后台字符串

			// ajax方法，如果要传输数据的话，通过查询字符串传输数据
			// 			search  ?name1=value1&name2=value2
			// 			querystring name1=value1&name2=value2
			
			// var aInputs = document.getElementsByTagName('input');
			$("#regBtn").click(function(){
				// var str = queryString(aInputs);
				$.ajax({
					type: "post",
					url: "../register.php",
					data: {
						username : $("input[name = 'username']").val(),
						password : $("input[name = 'password']").val()
					},
					dataType: "json",
					success: function(res){
						// console.log(obj);

						// var res = JSON.parse(obj);
						if(!res.code){
							$("#reg-alt").html("注册成功");
							$("#reg-alt").css("color", "green");
							setTimeout(function(){
							location.replace("../html/login.html")

							},1000);
						}else{
							$("#reg-alt").css("color", "red");
							$("#reg-alt").html(res.message);
						}
					},
					error: function(msg){
						alert("请求错误" + msg);
					}
				})
			})



			// 手机号
			$("#regTel").blur(function(){
				var regTelValue = $(this).val().replace(/\s/g, "");
				$(this).val(regTelValue);

				// 判断输入的是否是手机号、邮箱、字符串

				if(regTelValue.length != 11){
					$("#regTel-alt").html("请输入一个11位的手机号");
					$("#regTel-alt").css("color", "red");
				}else{
					if(/\D/g.test(regTelValue) || (regTelValue[0] != 1)){
						$("#regTel-alt").html("请输入一个合法的手机号");
						$("#regTel-alt").css("color", "red");
					}else{
						$("#regTel-alt").html("");
					}
				}
			})

			// 验证码
			$(".codeNum").html(testCode(6));

			$("#regCode").blur(function(){
				var regCodValue = $(this).val().replace(/\s/g, "");
				$(this).val(regCodValue);
				var code = $(".codeNum").html();

				if(regCodValue.toLowerCase() != code.toLowerCase()){
					$("#regCod-alt").html("验证码错误");
					$("#regCod-alt").css("color", "red");
				}else{
					$("#regCod-alt").html("");
				}
			})

			// 密码
			$("#passwd").blur(function(){
				var regPwdValue = $(this).val().replace(/\s/g, "");
				$(this).val(regPwdValue);

				if(regPwdValue.length < 6 || regPwdValue.length > 11){
					$("#pwd-alt").html("请输入一个6~11位的密码");
					$("#pwd-alt").css("color", "red");
				}else{
					$("#pwd-alt").html("");
				}

			})


			// 确认密码
			$("#repasswd").blur(function(){
				var pwdValue = $("#passwd").val();
				var regRpwdValue = $(this).val().replace(/\s/g, "");
				$(this).val(regRpwdValue);

				if(pwdValue != regRpwdValue){
					$("#pwd-alt").html("两次输入密码不一致");
					$("#pwd-alt").css("color", "red");
				}else{
					$("#pwd-alt").html("");
				}

			})
		})


		// 随机验证码
		function testCode(n){
			var arr = [];
			for(var i = 0; i < n; i++){
				var tmp = parseInt(Math.random() * 123);
				if(tmp >= 0 && tmp <= 9){
					arr.push(tmp);
				}else if(tmp >= 65 && tmp <= 90){
					//大写字母
					var charStr = String.fromCharCode(tmp);
					arr.push(charStr);
				}else if(tmp >= 97 && tmp <= 122){
					var charStr = String.fromCharCode(tmp);
					arr.push(charStr);
				}else{
					i--;
				}
			}
			return arr.join("");
		}


		// 拼接ajax的data字符串
		/*function queryString(nodes){
			var str = "";
			for(var i = 0; i < nodes.length; i++){
				str += nodes[i].name + "=" + nodes[i].value + "&";
			}
			return str.substring(0,str.length - 5);
		}*/
	}
	return{
		reg: reg
	}
})