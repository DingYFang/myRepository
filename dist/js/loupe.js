define(["addToCart", "sCart", "jquery", "jquery-cookie"],function(addToCart, sCart, $){
	function loupe(){
		$(function(){
			$(".bigImg").mouseenter(function(){
				$("#mark").css("display", "block");
				$("#maxBox").css("display", "block");
			});

			$(".bigImg").mouseleave(function(){
				$("#mark").css("display", "none");
				$("#maxBox").css("display", "none");
			});

			$(".bigImg").mousemove(function(ev){

				var Left = ev.clientX - $(".bigImg").offset().left  - 50;
				var Top = ev.clientY - $(".bigImg").offset().top  - 50;


				if(Left <= 0){
					Left = 0;
				}
				if(Left >= 340){
					Left = 340;
				}
				if(Top <= 0){
					Top = 0;
				}
				if(Top >= 340){
					Top = 340;
				}


				$("#mark").css({
					"left": Left,
					"top": Top
				});

				var maxLeft = Left * (-2);
				var maxTop = Top * (-2); 

				$("#mxImg").css({
					"left": maxLeft,
					"top": maxTop
				});

				
			})




			
			$("#dtl-num i").html(1);	
			$("#dtl-num").on("click", "button", function(){
				var id = this.id;
				console.log(id);
				var cookieStr = $.cookie("products");
				var cookieArr = JSON.parse(cookieStr);
				for(var i = 0; i < cookieArr.length; i++){
					if(id == cookieArr[i].id){
						if(this.innerHTML == "+"){
							cookieArr[i].num++;
							var priceA = parseInt($(this).closest(".num").siblings(".pri").find("span").html());
							// console.log(priceA);
							var resA = cookieArr[i].num * priceA;
							$(this).closest(".num").siblings(".sub").find("span").html(resA + ".00元");
							Sum();

						$("#dtl-num i").html(cookieArr[i].num);	
						}else{
							if(cookieArr[i].num == 1){
								alert("当前商品数量为1，不能再删除");
							}else{
								cookieArr[i].num--;
								var priceB = parseInt($(this).closest(".num").siblings(".pri").find("span").html());
								var resB = cookieArr[i].num * priceB;
								$(this).closest(".num").siblings(".sub").find("span").html(resB + ".00元");
								Sum();
								$("#dtl-num i").html(cookieArr[i].num);
							}
						}
						$(this).siblings(".n").html(cookieArr[i].num);
						break;
					}
					
				}
				$.cookie("products", JSON.stringify(cookieArr), {
					expires: 7
				})

				addToCart.sc_sum();

			})
			
			

		})
	}

	function Sum(){
		var number = $(".cont-item").size();
		console.log(number);
		var sum = 0;
		for(var i = 0; i < number; i++){
			var aPrice = parseInt($(".cont-item").eq(i).find($(".aPrice")).html());
			console.log(aPrice);
			sum += aPrice;
			// console.log(sum);
		}
		$("#all-sum").html(sum + ".00元");
	}
	
	return{
		loupe:loupe
	}
})