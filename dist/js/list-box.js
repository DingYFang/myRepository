define(["jquery"],function($){
	function list(){
		$(function(){
			$.ajax({
				url: "../data/data_tab.json",
				success: function(arr){

					// var arrList = $("#list-box").find("li").index();

					for(var i = 0; i < arr.length; i++){
						var node = $(`<ul class="pro-box"></ul>`);
						node.appendTo($("#nav-items"));

						for(var j = 0; j < arr[i].length; j++){
							var node2 = $(`<li><a href="" class="tel-item">
								<img src="${arr[i][j].img}" alt="">
								<div class="product">
									<p>${arr[i][j].desc}</p>
									<button id="${arr[i][j].id}">立即购买</button>
								</div>
							</a></li>`);
							node2.appendTo(node);//插入到新创建的node节点下即可
						}	
					}
		
				},
				error: function(msg){
					alert("请求错误" + msg);
				}
			})


		
			$("#list-box li").mouseenter(function(){
				$("#list-box li").attr("class", "");
				$(this).attr("class", "list-item active");

				$(".nav-items").css({
					backgroundColor:"#fff",
					opacity:1
				});

				$(".nav-items").find(".pro-box")
				.eq($(this).index()).css("display", "block").siblings().css("display", "none");
				// .mouseover(function(){
				// 	$(this).css("display", "block")
				// })
				// .mouseout(function(){
				// 	$(this).css("display", "none");
				// });

			})

			$(".navList").mouseleave(function(){
				$("#list-box li").attr("class", "");
				$(".nav-items").css({
					backgroundColor:"#fff",
					opacity:0
				});
				$(".nav-items").find(".pro-box")
				.eq($(this).index()).css("display", "none");
			})

		})
	}

	function listPro(){
			$.ajax({
				url: "../data/telchannel.json",
				success: function(arr){
					for(var i = 0; i < arr.length; i++){
							var node = $("<ul></ul>");
							node.appendTo($(".list-pros"));

						for(var j = 0; j < arr[i].length; j++){
							var node2 = $(`<li><a href="">
						<span class="list-pros-img">
							<img src="${arr[i][j].img}" alt="">
						</span>
						<p class="list-pros-title">${arr[i][j].desc}</p>
						<p class="list-pros-price">${arr[i][j].price}</p>
					</a></li>`);
							node2.appendTo(node);
						}	
						
					}
					
				},
				error: function(msg){
					alert("请求错误" + msg);
				}
			})


			$(".nav-list").mouseenter(function(){

				$(".nav-list .li").mouseenter(function(){
					if($(this).index() != 0){
						// var _this = $(this);
					
						$(".list-pros ul").eq( $(this).index()).css("display", "inline-block").siblings().css("display", "none");
						
						$(".list-pros").stop().slideDown(600,function(){
						})
					}else{
						$(".list-pros").css("display", "none");
					}
					
				})
			})

			$(".nav-list").mouseleave(function(){
					$(".list-pros").stop().slideUp(600,function(){
						
					})
				})

			// $(".nav-list li:eq(0)").off();

	}	

	return {
		list:list,
		listPro:listPro
	}
})

