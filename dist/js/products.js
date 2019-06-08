define(["jquery"], function($){
	function pro(){
		$(function(){
			$.ajax({
				url: "../data/products.json",
				success: function(arr){
					var arrTel = arr[0];
					var arrAir = arr[1];
					for(var i = 0; i < arrTel.length; i++){
						var node = $(`<li class="tel-item"><img src="${arrTel[i].pic}" alt=""  class="img-title"><a href="">
								<img src="${arrTel[i].img}" alt="">
								<p class="pro-title">${arrTel[i].title}</p>
								<p class="desc">${arrTel[i].desc}</p>
								<p class="price">${arrTel[i].price}</p>
							</a>
						</li>`);
						node.appendTo($(".cont-right"));
					}

					for(var i = 0; i < arrAir.length; i++){
						var node = $(`<li class="tel-item"><img src="${arrAir[i].pic}" alt=""  class="img-title"><a href="">
								<img src="${arrAir[i].img}" alt="">
								<p class="pro-title">${arrAir[i].title}</p>
								<p class="desc">${arrAir[i].desc}</p>
								<p class="price">${arrAir[i].price}</p>
							</a>
						</li>`);
						node.appendTo($(".cont-right-air"));
					}
					
				},
				error: function(msg){
					alert("请求错误" + msg);
				}
			})
		})

		// $("tel-item").on(mouseover(function(){
		// 	$("tel-item").removeClass("active");
		// 	$(this).addClass("active");
		// })
		// 
		$(".cont-right,.cont-right-air").on("mouseenter", ".tel-item", function(){
			$(".tel-item").removeClass("shadow");
			$(this).addClass("shadow");
		})

		$(".cont-right,.cont-right-air").on("mouseleave", ".tel-item", function(){
			$(".tel-item").removeClass("shadow");
			$(this).removeClass("shadow");
		})
	}
	return{
		pro:pro
	}
})
