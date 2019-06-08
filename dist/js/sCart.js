define(["addToCart", "jquery", "jquery-cookie"],function(addToCart,$){
	$(function(){

		// 以下变量是全局变量，模块划分的闭包写法是为了变量私有化的，所以虽然这样能执行，但是还是要尽量写成闭包的模式
		console.log("购物车页面js引入成功");
		// 删除按钮点击事件
			$(".shoppList").on("click", ".del button", function(){
				var id = this.id;
				// console.log(id);
				$(this).closest($(".cont-item")).remove();

				var cookieStr = $.cookie("products");
				var cookieArr = JSON.parse(cookieStr);
				for(var i = 0; i < cookieArr.length; i++){
					if(cookieArr[i].id == id){
						cookieArr.splice(i, 1);
						console.log(true);
						break;
					}
				}
				if(!cookieArr.length){
					$.cookie("products", null);

					$(".sCart-content").html("");
						var nodeEmpty = $(`<div class="empty">
											<img src="../images/cart_empty.jpg" alt="">
											<div class="empty_right">
												<p>购物车空空的哦~去看看心仪的商品吧~</p>
												<a class="buy-pros">选购商品</a>
											</div>
										</div>`);

						
					nodeEmpty.appendTo(".sCart-content");
					$(".buy-pros").attr("href", "../html/TV.html");
					

				}else{
					$.cookie("products", JSON.stringify(cookieArr), {
						expires: 7
					})
				}
				
				// sc_sum();
				addToCart.sc_sum();	
				Sum();

			})

			// 加减号点击事件
			$(".shoppList").on("click", ".num button", function(){
				var id = this.id;
				// console.log(id);
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

						}else{
							if(cookieArr[i].num == 1){
								alert("当前商品数量为1，不能再删除");
							}else{
								cookieArr[i].num--;
								var priceB = parseInt($(this).closest(".num").siblings(".pri").find("span").html());
								var resB = cookieArr[i].num * priceB;
								$(this).closest(".num").siblings(".sub").find("span").html(resB + ".00元");
								Sum();
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

	function sCart(){
		$(".shoppList").html("");
			$.ajax({
				url:"../data/TV_proList.json",
				success: function(arr){
					var cookieStr = $.cookie("products");


					if(cookieStr){
						var cookieArr = JSON.parse(cookieStr);
						var newArr = [];
						for(var i = 0; i < arr.length; i++){
							for(var j = 0; j < cookieArr.length; j++){
								if(arr[i].id == cookieArr[j].id){
									arr[i].num = cookieArr[j].num;
									newArr.push(arr[i]);
									  // 有 id  num img pric的缓存商品
									 break;
								}
							}
						}

						for(var i = 0; i < newArr.length; i++){

							var node = $(`<div class="cont-item">
							<dl>
								<dd class="sel">
									<input type="checkbox">
								</dd>
								<dd class="pro">
									<span class="left">
										<a href=""><img src='${newArr[i].img}' alt="">
										</a>
									</span>
									<span class="right">
										<a href="">${newArr[i].desc}</a>
									</span>
								</dd>
								<dd class="pri">
									<span>${newArr[i].price}</span>
								</dd>
								<dd class="num">
									<button class="reg" id="${newArr[i].id}">-</button>
									<span class="n">${newArr[i].num}</span>
									<button class="add" id="${newArr[i].id}">+</button>
								</dd>
								<dd class="sub">
									<span class="aPrice">${parseInt(newArr[i].price)*newArr[i].num}.00元</span>
								</dd>
								<dd class="del">
									<button id="${newArr[i].id}">删除</button>
								</dd>
							</dl>
						</div>`);
							node.appendTo($(".shoppList"));
						}		
					}else{
						$(".sCart-content").html("");
						var nodeEmpty = $(`<div class="empty">
											<img src="../images/cart_empty.jpg" alt="">
											<div class="empty_right">
												<p>购物车空空的哦~去看看心仪的商品吧~</p>
												<a class="buy-pros">选购商品</a>
											</div>
										</div>`);
						nodeEmpty.appendTo(".sCart-content");
						$(".buy-pros").attr("href", "../html/TV.html")
					}
					
					Sum();
				},
				error: function(msg){
					alert("请求错误：" + msg);
				}
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
		sCart:sCart
	}
})