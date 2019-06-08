console.log("proMain.js 加载成功");
// 配置文件路径

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"jquery-min":"jquery.min",
		"TVpro":"TVpro",
		"index":"index",
		"list-box":"list-box",
		"addToCart":"addToCart"
	},
	shim:{
		"jquery-cookie":["jquery"],
	}
})

// 调用js文件
require(["TVpro", "index", "list-box", "addToCart"],function(TVpro, index, listbox, addToCart){
	index.index();
	TVpro.TVpro();
	listbox.listPro();
	addToCart.addToCart();
})