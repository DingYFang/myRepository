define(["jquery"], function(){
	function index(){
				//点击停止轮播
		/*$("#stop").click(function(){
			clearInterval(time);
			console.log("dsda");
		})*/
		//用于判断导航栏的状态var toggle = true;
		var time=null;
		var nexImg = 0;
		// var bannerHeight = $(".c-banner ul li img").eq(0).css("height");
		var imgLength = $(".c-banner .banner ul li").length;
		// $(".c-banner").css("height",bannerHeight);
		$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");
		//导航栏最后一个li的边框去除
		$(".c-nav ul li:last").css("border","none");
		//导航栏按钮
		$('.btnImg').click(function() {
			if (toggle) {
				$('.btnImg').css("border", "1px solid #b0ccf3");
				toggle = false;
			} else {
				$('.btnImg').css("border", "1px solid transparent");
				toggle = true;
			}
			$(".show").slideToggle(300);
		})

		/*//窗口大小发生改变
		$(window).resize(function() {
			//获取窗口宽度
			var windSize = $(window).width();
			if (windSize > 576) {
				$(".show").slideDown(0);
			} else {
				$(".show").slideUp(0);
			}
			var bannerHeight = $(".c-banner ul li[style*='block'] img").css("height");
			$(".c-banner").css("height",bannerHeight);
		});*/
		$(document).ready(function(){
			//定时器
			time =setInterval(intervalImg,5000);
		});

		//点击上一张
		$(".preImg").click(function(){
			clearInterval(time);
			nexImg = nexImg-1;
			if(nexImg<0){
				nexImg=imgLength-1;
			}
			$(".c-banner .jumpBtn ul li").css("background-color","white");
			$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");
			$(".c-banner .banner ul li").eq(nexImg).css("display","block");
			$(".c-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);
			$(".c-banner .banner ul li").eq(nexImg+1).stop().animate({"opacity":0},1000,function(){
				$(".c-banner ul li").eq(nexImg+1).css("display","none");
			});
			time =setInterval(intervalImg,5000);
		})

		//点击下一张
		$(".nexImg").click(function(){
			clearInterval(time);
			intervalImg();
			time =setInterval(intervalImg,5000);
		})

		//轮播图
		function intervalImg(){
			if(nexImg<imgLength-1){
				nexImg++;
			}else{
				nexImg=0;
			}
			
			$(".c-banner .banner ul li").eq(nexImg).css("display","block");
			$(".c-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);
			$(".c-banner .banner ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
				$(".c-banner .banner ul li").eq(nexImg-1).css("display","none");
			});
			$(".c-banner .jumpBtn ul li").css("background-color","white");
			$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");
		}

		//轮播图底下按钮
		$(".c-banner .jumpBtn ul li").each(function(){
			$(this).click(function(){
				clearInterval(time);
				$(".c-banner .jumpBtn ul li").css("background-color","white");
				jumpImg = $(this).attr("jumpImg");
				if(jumpImg!=nexImg){
					var after =$(".c-banner .banner ul li").eq(jumpImg);
					var befor =$(".c-banner .banner ul li").eq(nexImg);
					nexImg=jumpImg;
					after.css("display","block");
					after.stop().animate({"opacity":1},1000);
					befor.stop().animate({"opacity":0},1000,function(){
						befor.css("display","none");
					});	
				}
				$(this).css("background-color","black");
				time =setInterval(intervalImg,5000);
			});
		});
			}
	return {
		index:index
	}
})