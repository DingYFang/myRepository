<?php 
	header('content-type:text/html;charset="utf-8"');
	// 约定好返回字符串的格式
	$responseState = array("code" => 0, "message" => "");
	$username = $_POST["username"];
	$password = $_POST["password"];
	// var_dump($password); 
    // 天龙8步
    $link = mysql_connect("localhost", "root", "123456");
    if(!$link){
    	$responseState["code"] = 1;
		$responseState["message"] = "数据库链接失败";
		echo json_encode($responseState);
		exit; //退出程序
    }
    mysql_set_charset("utf8");
    mysql_select_db("qd1903");
    //密码要加密去存储
	$password = md5(md5(md5($password)."qian").'feng');

    $sql = "SELECT * FROM tclusers WHERE username = '{$username}' and password = '{$password}';";
    // 6.执行字符串
    $res = mysql_query($sql);
    // 7.取出数据
    $row = mysql_fetch_assoc($res);
    if($row){
    	$responseState["code"] = 2;
		$responseState["message"] = "登陆成功";
		echo json_encode($responseState);
    }else{
    	$responseState["code"] = 3;
		$responseState["message"] = "用户名或密码错误";
		echo json_encode($responseState);
    }
    

    // 8.关闭数据库连接
    mysql_close($link);

 ?>