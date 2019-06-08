define(["jquery", "jquery-cookie"],function($){
	// 	var a = 3;
	// console.log(a);  //全局变量，只要引用了当前js文件的页面（函数）都能访问到该变量,注意：尽量使用闭包模式
	// 凡是写在对外暴露的函数的外面的 函数、或者是变量  都是全局变量 闭包实现了内部变量私有化
	function addToCart(){
		$(function(){
			sc_sum();
			$(".list-pro-res ul").add(".buy-box").on("click", ".pro-info .buy,.buy", function(){
				var id = this.id;
				var first = $.cookie("products") == null ? true : false;
				if(first){
					$.cookie("products", `[{"id":${id}, "num":1}]`, {
						expires: 7
					})
				}else{

					var same = false;
					var cookieStr = $.cookie("products");
					var cookieArr = JSON.parse(cookieStr);
					for(var i = 0; i < cookieArr.length; i++){
						if(cookieArr[i].id == id){
							same = true;
							cookieArr[i].num++;
							break;
						}
					}
					if(!same){
						var obj = {id: id, num: 1};
						cookieArr.push(obj);
					}
					$.cookie("products", JSON.stringify(cookieArr), {
						expires: 7
					})
				}
				sc_sum();
			})

		})

	}


	function sc_sum(){
		var cookieStr = $.cookie("products");
		var sum = 0;
		if(cookieStr){
			var cookieArr = JSON.parse(cookieStr);
			for(var i = 0; i < cookieArr.length; i++){
				sum+= cookieArr[i].num;
			}
			$(".nav-right .number").html(sum);
		}else{
			$(".nav-right .number").html(0);
		}
	}
	
	return{
		addToCart: addToCart,
		sc_sum: sc_sum
	}
})