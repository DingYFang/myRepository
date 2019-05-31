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


		
		$(".navList").mouseenter(function(){
			$("#list-box li").attr("class", "");
			$(this).attr("class", "list-item active");

			$(".nav-items").css({
				backgroundColor:"#fff",
				opacity:1
			});

			$(".nav-items").find(".pro-box")
			.eq($(this).index()).css("display", "block");
			// .mouseover(function(){
			// 	$(this).css("display", "block")
			// })
			// .mouseout(function(){
			// 	$(this).css("display", "none");
			// });

		})

		$(".navList").mouseleave(function(){
			// $("#list-box li").attr("class", "");
			$(this).attr("class", "");

			$(".nav-items").css({
				backgroundColor:"#fff",
				opacity:0
			});
			$(".nav-items").find(".pro-box")
			.eq($(this).index()).css("display", "none");
		})
		




		})
		
	}
	return {
		list:list
	}
})