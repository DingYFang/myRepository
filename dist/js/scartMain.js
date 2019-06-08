require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"jquery-min":"jquery.min",
		// "TVpro":"TVpro",
		"index":"index",
		"sCart": "sCart",
		"addToCart":"addToCart"
	},
	shim:{
		"jquery-cookie":["jquery"],
	}
})

// 调用js文件
require(["sCart", "addToCart"],function(sCart, addToCart){
	addToCart.addToCart();
	addToCart.sc_sum();
	sCart.sCart();
})