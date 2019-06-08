// 配置要引入的模块的路径
require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"jquery-min":"jquery.min",
		"list-box": "list-box",
		"addToCart": "addToCart",
		"loupe": "loupe"
	},
	// 声明依赖关系
	shim:{
		"jquery-cookie": ["jquery"],
	}
})

// 调用js文件
require(["list-box", "addToCart", "loupe"], function(list, addToCart, loupe){
	list.list();
	list.listPro();
	addToCart.addToCart();
	addToCart.sc_sum();
	loupe.loupe();
})