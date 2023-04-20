<?php
	function getRealIpAddr() {  
	   if (!empty($_SERVER['HTTP_CLIENT_IP'])) { //check ip from share internet  
	       $ip=$_SERVER['HTTP_CLIENT_IP'];  
	   } else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  //to check ip is pass from proxy  
	       $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];  
	   } else {  
	       $ip=$_SERVER['REMOTE_ADDR'];  
	   }  
	   return $ip;  
	}

	$ip=getRealIpAddr();

    function emailCheck($email,$connect){
        $Sql  = " Select count(*) FROM fantasyuser where userEmail ='".$email."'";
        $result = $connect -> query($Sql);
        $result = $result->fetch_array(MYSQLI_NUM);

        if($result[0] > 0){
            throw new Exception('このメールアドレスは既に登録されています。',100);   
        } 
    }

		

    	try {
    		//--------------------
    		// 데이터 받아오기
    		//--------------------
    		global $connect;

			$email = $_POST["email"];
			
			//--------------------
    		// 이메일 체크
    		//--------------------
			
			if (empty($email)) {
				throw new Exception('正しく登録ができませんでした。もう一度お試しください。',100);   
			} else if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
				throw new Exception('正しいメールアドレスを入力してください。',100);   
			}


    		//--------------------
    		// DB 접속
    		//--------------------
    		$connect = new mysqli('localhost','root','dE0hgowacbga','fantasyuserdb');
    		mysqli_query($connect,'SET NAMES utf8');

			if (mysqli_connect_errno()) {
				throw new Exception('잠시 후 재시도 해주시기 바랍니다.',100);
			}
			
			//--------------------
    		// 이메일 중복 체크
    		//--------------------
			emailCheck($email,$connect);
			
			

			$sqlQuery = "insert into fantasyuser (userEmail,clientIP) values ('".$email."','".$ip."')";
			$connect->query($sqlQuery);

			$connect->close();

			$result["errorCode"] = 0;
			$result["errorMessage"] = "事前登録にご登録いただきありがとうございます。ご入力いただいたメールアドレスに登録完了メールをお送りいたしましたのでご確認ください。";
			echo json_encode($result);
		}
    	catch (Exception $e) {
    		$result["errorCode"] = $e->getCode();
    		$result["errorMessage"] = $e->getMessage();
    		echo json_encode($result);
    	}

?>