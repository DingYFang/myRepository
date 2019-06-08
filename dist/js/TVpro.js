define(["jquery"],function($){
	function TVpro(){
		$(function(){
			$.ajax({
				url: "../data/TV_proList.json",
				success: function(arr){
					for(var i = 0; i < arr.length; i++){
						var node = $(`<li>
						<div class="badge">秒杀</div>
						<div class="imgbox">
							<a href="" class="box-a">
								<img src="${arr[i].img}" alt="">
							</a>
						</div>
						<div class="pro-info">
							<div class="pro-des">
								<strong>${arr[i].title}</strong>
								<p><font>${arr[i].feature}</font>${arr[i].desc}</p>
							</div>
							<p class="pro-pri">${arr[i].price}</p>
							<a class="buy" id='${arr[i].id}'>加入购物车</a>
						</div>
					</li>`);
						node.appendTo($(".list-pro-res ul"));
					}


					$(".box-a").eq(4).attr("href", "../html/proDetails.html");
				},
				error: function(msg){
					alert("请求错误" + msg);
				}
			})	
		})

		$(".features ul li").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
		})
	}
	return{
		TVpro:TVpro
	}
})