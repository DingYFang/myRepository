console.log("加载成功");

// 配置要引入的模块的路径
require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery-cookie",
		"jquery-min":"jquery.min",
		"index": "index",
		"list-box": "list-box"
	},
	// 声明依赖关系
	shim:{
		"jquery-cookie": ["jquery"],
	}
})

// 调用js文件
require(["index", "list-box"], function(index, list){
	list.list();
	index.index();
})