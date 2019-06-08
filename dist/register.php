<?php 
	header('content-type:text/html;charset="utf-8"');
	// 约定好返回字符串的格式
	$responseState = array("code" => 0, "message" => "");
	$username = $_POST["username"];
	$password = $_POST["password"];
    // $password = $_POST["repassword"];
	// var_dump($password); 
	
    // 天龙8步
    $link = mysql_connect("localhost", "root", "123456");
    if(!$link){
    	$responseState["code"] = 2;
		$responseState["message"] = "数据库链接失败";
		echo json_encode($responseState);
		exit; //退出程序
    }

    // var_dump("111");
    mysql_set_charset("utf8");
    mysql_select_db("qd1903");
    $sql = "SELECT * FROM tclusers WHERE username = '{$username}';";
    // 6.执行字符串
    $res = mysql_query($sql);
    // var_dump($res);
    // 7.取出数据
    $row = mysql_fetch_assoc($res);
    // var_dump($row);
    /*
    $row2 = mysql_fetch_assoc($res);
    $row3 = mysql_fetch_assoc($res);
    $row4 = mysql_fetch_assoc($res);
    var_dump($row2);
    var_dump($row3);
    var_dump($row4);*/
    // 如果能取出，说明用户已存在
    if($row){
    	$responseState["code"] = 3;
		$responseState["message"] = "用户名已存在";
		echo json_encode($responseState);
		exit;
    }

    $password = md5(md5(md5($password)."qian").'feng');

    // 对用户进行注册
    $sql = "insert into tclusers (username,password) values('{$username}','{$password}');";
    $res = mysql_query($sql);

    if($res){
    	$responseState["message"] = "注册成功";
		echo json_encode($responseState);
    }else{
    	$responseState["code"] = 4;
		$responseState["message"] = "注册失败";
		echo json_encode($responseState);
    }


    // 8.关闭数据库连接
    mysql_close($link);



 ?>