require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"login": "login"
		// addToCart: "addToCart",
		// sCart: "sCart"
	}
})

require(["login"], function(log){
	log.log();
})